const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());

app.use(
  session({
    secret: "secret", // a secret key used to encrypt the session cookie
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    }, //set the session cookie properties
  })
);
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

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({
      Message:
        "In order to login, we need the token. Hence provide it by login now",
    });
  } else {
    jwt.verify(token, "our-jsonwebtoken-secret-key", (err, decoded) => {
      if (err) {
        return res.json({ Message: "Authentication Error." });
      } else {
        req.session.name = decoded.name;
        next();
      }
    });
  }
};

//home route
app.get("/", verifyUser, (req, res) => {
  if (req.session.name) {
    return res.json({ valid: true, name: req.session.name });
  } else {
    return res.json({ valid: false });
  }
});

//user register api
app.post("/register", (req, res) => {
  const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.password];

  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });

  // bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
  //   if (err) return res.json({ Error: "Error for hashing password" });
  //   const values = [req.body.name, req.body.email, hash];

  //   db.query(sql, [values], (err, result) => {
  //     if (err) return res.json({ Error: "Inserting data error in server" });
  //     return res.json({ Status: "Success!" });
  //   });
  // });
});

//user login api
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ? ";

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      req.session.name = data[0].name;
      console.log(req.session.name);

      const name = data[0].name;
      const token = jwt.sign({ name }, "our-jsonwebtoken-secret-key", {
        expiresIn: "1d",
      });
      res.cookie("token", token);
      return res.json({ Login: true, name: req.session.name });
    } else {
      return res.json("Failed");
    }
  });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
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

app.get("/teetimes/holes", (req, res) => {
  const sql = "SELECT * FROM teetimes WHERE tt_holes=18 ORDER BY tt_time ASC";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/teetimes/holes/9", (req, res) => {
  const sql = "SELECT * FROM teetimes WHERE tt_holes=9 ORDER BY tt_time ASC";
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

// app.listen(3001, () => {
//   console.log("running on port 3001, lets get this fyp2 done! ");
// });
app.listen(8081, () => {
  console.log("Let's get this fyp2 done!");
});
