const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "homework-w3"
});

connection.connect();
const insert_queries = [
  "insert into account values (101, '100000')",
  "insert into account values (102, '150000')",
  "insert into account values (103, '30000')",
  "insert into account values (104, '65000')",
  "insert into account_changes values (100201, 101, '21000', '2018-04-01','done')",
  "insert into account_changes values (100201, 104, '2000', '2019-05-01','done')",
  "insert into account_changes values (100201, 104, '8000', '2018-06-01','done')",
  "insert into account_changes values (100201, 102, '3000', '2019-07-01','done')",
  "insert into account_changes values (100201, 101, '1000', '2019-06-01','done')",
  "insert into account_changes values (100201, 103, '7000', '2019-10-01','done')"
];

for (let i in insert_queries) {
  console.log("Going to run ", insert_queries[i]);
  connection.query(insert_queries[i], function(error, results, fields) {
    if (error) {
      throw error;
    }
    console.log("the reply is ", results[0]);
  });
}

connection.end();
