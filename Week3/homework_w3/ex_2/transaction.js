const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "homework-w3"
});
connection.connect();
async function transferAmount(fromAccountNum, toAccountNum, totallyAmount) {
  const trans = await connection.getConnection();
  await trans.beginTransaction();

  try {
    await trans.query(
      "select account_number from account where account_number = ${fromAccountNum}"
    );
    await trans.query(
      "update account set balance = sum(balance - ${totallyAmount}) where account_number = ${fromAccountNum}"
    );
    await trans.query(
      "select account_number from account_changes where account_number = ${toAccountNum}"
    );
    await trans.query(
      "update account_changes set balance =sum(balance + ${totallyAmount}) where account_number = ${toAccountNum}"
    );

    await trans.commit();
  } catch (err) {
    await trans.rollback();
    throw err;
  } finally {
    connection.end();
  }
}
transferAmount(101, 102, 1000);
