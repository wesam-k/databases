"use strict";

let util = require("util");
let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "homework_ex"
});

let execQuery = util.promisify(connection.query.bind(connection));

async function seedDatabase() {
  let createTable =
    ` CREATE TABLE IF NOT EXISTS Authors(
      author_no int Primary Key,
      author_name varchar(30),
      Affiliations varchar(30),
      date_of_birth date,
      h_index int,
      gender ENUM('m','f'));`;
  let insertColumn = "ALTER TABLE Authors ADD COLUMN friend varcher(20)";
  let forinKey =
    "ALTER TABLE Authors ADD CONSTRAINT fk_authors foreign key (friend) references authors(author_no)";

  connection.connect();
  try {
    await execQuery(createTable);
    await execQuery(insertColumn);
    await execQuery(forinKey);
  } catch (error) {
    console.error(error);
  }

  connection.end();
}

seedDatabase();
