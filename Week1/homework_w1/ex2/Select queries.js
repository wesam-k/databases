const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "new_world"
});

connection.connect();
const query1 = [
  "SELECT name, population From country WHERE  population > 8 million"
];
const query2 = ['SELECT name, From country WHERE  name like "%land%"'];
const query3 = [
  "SELECT name,population From city WHERE population between 500000 and 1 million"
];
const query4 = ['SELECT name, From country WHERE  continent = "Europe"'];
const query5 = [
  "SELECT name,SurfaceArea From country WHERE SurfaceArea ORDER BY desc"
];
const query6 = ['SELECT name,CountryCode From city WHERE  CountryCode = "NLD"'];
const query7 = ['SELECT name,population From city WHERE  name  = "Rotterdam"'];
const query8 = [
  "SELECT name,SurfaceArea From country WHERE SurfaceArea ORDER BY desc limit 10"
];
const query9 = [
  "SELECT name,population From city WHERE population ORDER BY desc limit 10"
];
const query10 = ["SELECT SUM(population) From Country"];

connection.query(query1, function(error, results, fields) {
  if (error) {
    throw error;
  }
  console.log("the solution is ", results[0]);
});
connection.query(query2, function(error, results, fields) {
  if (error) {
    throw error;
  }
  console.log("the solution is ", results[0]);
});
connection.query(query3, function(error, results, fields) {
  if (error) {
    throw error;
  }
  console.log("the solution is ", results[0]);
});
connection.query(query4, function(error, results, fields) {
  if (error) {
    throw error;
  }
  console.log("the solution is ", results[0]);
});
connection.query(query5, function(error, results, fields) {
  if (error) {
    throw error;
  }
  console.log("the solution is ", results[0]);
});
connection.query(query6, function(error, results, fields) {
  if (error) {
    throw error;
  }
  console.log("the solution is ", results[0]);
});
connection.query(query7, function(error, results, fields) {
  if (error) {
    throw error;
  }
  console.log("the solution is ", results[0]);
});
connection.query(query8, function(error, results, fields) {
  if (error) {
    throw error;
  }
  console.log("the solution is ", results[0]);
});
connection.query(query9, function(error, results, fields) {
  if (error) {
    throw error;
  }
  console.log("the solution is ", results[0]);
});
connection.query(query10, function(error, results, fields) {
  if (error) {
    throw error;
  }
  console.log("the solution is ", results[0]);
});

connection.end();
