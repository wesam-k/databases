var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "company"
});

connection.connect();
var insert_queries = [
  "insert into employees values (106, 'Ahmad', '2000', '2018-11-01','m')",
  "insert into employees values (107, 'sam', '2100', '2018-04-01','m')"
];

for (var i in insert_queries) {
  console.log("Going to run ", insert_queries[i]);
  connection.query(insert_queries[i], function(error, results, fields) {
    if (error) {
      throw error;
    }
    console.log("the reply is ", results[0]);
  });
}

connection.end();
