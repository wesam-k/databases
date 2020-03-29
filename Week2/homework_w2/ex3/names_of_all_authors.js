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

async function selectDatabase() {
  let namesOfAllAuthors = `select a.author_name form authors as A, b.friends from authors as B
    where  A.author_no =B.friends`;

  let authorAndTitle = `select (*),paper_title form authors as A
    left join relation as R on (a.author_no = r.author_no)       
    left join research_papers as RP on (r.paper_id = rp.paper_id)`;

  connection.connect();

  try {
    console.log(await execQuery(namesOfAllAuthors));
    console.log(await execQuery(authorAndTitle));
  } catch (error) {
    console.error(error);
  }

  connection.end();
}

selectDatabase();