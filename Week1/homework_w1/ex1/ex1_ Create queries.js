let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "meetup"
});

connection.connect();

let queries = [
  " CREATE TABLE Invitee (invitee_no integer, invitee_name text, invited_by text)",
  " CREATE TABLE Room (room_no integer, room_name text, floor_number integer)",
  " CREATE TABLE Meeting (meeting_no integer, meeting_title text, starting_time timestamp, ending_time timestamp, room_no integer)"
];

for (let que of queries) {
  connection.query(que, function(error, results, fields) {
    if (error) {
      throw error;
    }
    console.log("the solution is: ", results[0]);
  });
}
connection.end();
