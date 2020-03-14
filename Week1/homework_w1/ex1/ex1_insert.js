let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "meetup"
});

connection.connect();
let insert_Invitee = [
  "INSERT INTO Invitee VALUES (01,'health insurance','Unive company')",
  "INSERT INTO Invitee VALUES (02,'medical assistant','Joni Doul')",
  "INSERT INTO Invitee VALUES (03,'welcome baby party','linda van geert')",
  "INSERT INTO Invitee VALUES (04,'introduction day','hotel school')",
  "INSERT INTO Invitee VALUES (05,'tax update','tony luber')"
];

let insert_Room = [
  "INSERT INTO Room VALUES (101,'Italy',01)",
  "INSERT INTO Room VALUES (202,'Istanbul',02)",
  "INSERT INTO Room VALUES (303,'Amsterdam',03)",
  "INSERT INTO Room VALUES (104,'lord',01)",
  "INSERT INTO Room VALUES (206,'Paris',02)"
];

let insert_Meeting = [
  "INSERT INTO Meeting VALUES (09,'health cost', '2020-03-15 10:00', '2020-03-15 13:00',101)",
  "INSERT INTO Meeting VALUES (09,'new employees', '2020-03-17 09:00', '2020-03-17 11:00',202)",
  "INSERT INTO Meeting VALUES (09,'new baby', '2020-03-25 14:00', '2020-03-25 17:30',303)",
  "INSERT INTO Meeting VALUES (09,'welcome', '2020-03-27 11:15', '2020-03-27 13:00',104)",
  "INSERT INTO Meeting VALUES (09,'next year', '2020-04-01 10:30', '2020-04-01 12:30',206)"
];

let allInserts = [insert_Invitee, insert_Room, insert_Meeting];

allInserts.forEach(insert => {
  insert.forEach(query => {
    connection.query(query, function(error, results, fields) {
      if (error) {
        throw error;
      }
      console.log("the reply is ", results[0]);
    });
  });
});

connection.end();
