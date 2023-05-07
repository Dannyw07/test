const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "12345",
  database: "fyp2",
});

app.post("/register", (req, res) => {
  db.query(
    "INSERT INTO users (users_firstName, users_lastName, users_email, users_password) VALUES (?,?,?,?)",
    [users_firstName, users_lastName, users_email, users_password],
    (err, result) => {
      console.log(err);
    }
  );
});

app.listen(3001, () => {
  console.log("running on port 3001, lets get this fyp2 done! ");
});
