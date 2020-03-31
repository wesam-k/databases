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
  let allRPAndAuthors = `select rp.paper_title,count(distinct a.author_no)
    from authors a 
    right join authors b
    on(a.author_no =b.author_no)
    right join research_papers rp
    on(b.author_no =rp.paper_id)
    group by re.paper_title`;

  let RPByFemale = `select count(distinct rp.paper_title)
    from authors a 
    right join authors b
    on(a.author_no =b.author_no)
    right join research_papers rp
    on(b.author_no =rp.paper_id)
    where a.author ='f`;

  let avgAllAuthors = `select avg(h_index)
    from authors a 
    group by a.Affiliations`;

  let sumRP = `select a.Affiliations count(distinct rp.paper_title)
    from authors a 
    right join authors b
    on(a.author_no =b.author_no)
    right join research_papers rp
    on(b.author_no =rp.paper_id)
    group by a.Affiliations`;

  let min_max = `select min(a.h_index)
    max(a.h_index) 
    from author a
    group by a.Affiliations`;

  connection.connect();

  try {
    console.log(await execQuery(allRPAndAuthors));
    console.log(await execQuery(RPByFemale));
    console.log(await execQuery(avgAllAuthors));
    console.log(await execQuery(sumRP));
    console.log(await execQuery(min_max));
  } catch (error) {
    console.error(error);
  }

  connection.end();
}

selectDatabase();
