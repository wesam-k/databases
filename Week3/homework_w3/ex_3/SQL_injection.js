  "use strict"
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
  multipleStatements: true
});

function getPopulation(Country, name, code, cb) {

  conn.connect()
  const select_query= `SELECT Population
     FROM `+ conn.escape(Country)
    `WHERE name = ` + conn.escape(name),
    `code = `+ conn.escape(code) ;

  conn.query(select_query,function(err, result) {
      if (err) cb(err);
      if (result.length == 0) cb(new Error("Not found"));
      cb(null, result[0].name);
    });
  conn.end()
}

getPopulation(united_states,America,us)