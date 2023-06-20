const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//***********SEND API */
// app.post("/send", async (req, res) => {
//   try {
//     const { fullName, email, message } = req.body;
//     res.json({ msg: "server" });
//   } catch (error) {
//     res.status(404).json({ msg: "Error " });
//   }
// });

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "12345",
  database: "fyp2",
});

app.get("/teetimes", (req, res) => {
  const sql = "SELECT * FROM teetimes ORDER BY tt_time ASC";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/hotdeals", (req, res) => {
  const sql = "SELECT * FROM hotdeals ORDER BY hotdeal_time ASC";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// app.post("/register", (req, res) => {
//   const users_firstName = req.body.firstName;
//   const users_lastName = req.body.lastName;
//   const users_email = req.body.email;
//   const users_password = req.body.password;
//   db.query(
//     "INSERT INTO users (users_firstName, users_lastName, users_email, users_password) VALUES (?,?,?,?)",
//     [users_firstName, users_lastName, users_email, users_password],
//     (err, result) => {
//       console.log(err);
//     }
//   );
// });

// app.post("/login", (req, res) => {
//   const users_email = req.body.email;
//   const users_password = req.body.password;

//   db.query(
//     "SELECT * FROM users WHERE users_email=? AND users_password=?",
//     [users_email, users_password],
//     (err, result) => {
//       if (err) {
//         res.send({ err: err });
//       }
//       if (result) {
//         res.send(result);
//       } else {
//         res.send({ message: "Wrong email/password combination!" });
//       }
//     }
//   );
// });

// app.get("/", (re, res) => {
//   return res.json("From server side");
// });

app.listen(3001, () => {
  console.log("running on port 3001, lets get this fyp2 done! ");
});
