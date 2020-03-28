const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "homework-w3"
});

const execQuery = util.promisify(connection.query.bind(connection));

async function newTables() {
  const CREATE_ACCOUNT_TABLE = `
    CREATE TABLE IF NOT EXISTS account (
        account_number int primary key, 
        balance int
    );`;
  const CREATE_ACCOUNT_CHANGES_TABLE = `
    CREATE TABLE IF NOT EXISTS account_changes (
        change_number int primary key ,
        account_number int  constraint fk_account FOREIGN KEY(account_number) REFERENCES account(account_number),
        amount int,
        changed_date date,
        remark text
    );`;

  connection.connect();

  try {
    await execQuery(CREATE_ACCOUNT_TABLE);
    await execQuery(CREATE_ACCOUNT_CHANGES_TABLE);
  } catch (error) {
    console.error(error);
  }

  connection.end();
}



newTables();
