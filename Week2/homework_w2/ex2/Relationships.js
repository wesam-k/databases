"use strict";

let util = require("util");
let mysql = require("mysql");

let authors = require("./authors ");
let Research_papers = require("./research papers");
let relation = require("./research papers");

let connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "homework_ex"
});

let execQuery = util.promisify(connection.query.bind(connection));

async function seedDatabase() {
  let createTableResearch = ` CREATE TABLE IF NOT EXISTS Research_Papers (
        paper_id int ,
        paper_title varchar(100),
        Affiliations varchar(100) ,
        publish_date Date ,
        author int,
        constraint fk_authors foreign key(author) references authors(author_no)
        )`;
  let createAuthorsResearchPaper = `CREATE TABLE IF NOT EXISTS Authors_Research_paper (
        author_no int, paper_id int,
        constraint pk_Authors_Research_paper primary key(author_no, paper_id),
        constraint fk_Authors_Research_paper foreign key(author_no) reference authors(author_no),
        constraint fk_Authors_Research_paper foreign key(paper_id) reference research_papers(paper_id),
         )`;

  connection.connect();

  try {
    await execQuery(createTableResearch);
    await execQuery(createAuthorsResearchPaper);

    await Promise.all(
      authors.map(async ele => {
        await execQuery(ele);
      })
    );

    await Promise.all(
      Research_papers.map(async ele => {
        await execQuery(ele);
      })
    );
    await Promise.all(
      relation.map(async ele => {
        await execQuery(ele);
      })
    );
  } catch (error) {
    console.error(error);
  }

  connection.end();
}

seedDatabase();
