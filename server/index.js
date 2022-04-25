const express = require("express");
const app = express();
const mysql = require("mysql2");
const multer = require("multer");
const cors = require("cors");

var bodyParser = require("body-parser"); // ใช้ฝั่ง api ลงไปใน body
var jsonParser = bodyParser.json();

//token
var jwt = require("jsonwebtoken");
const secert = "TeeTime"; //salt

//hash
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "employeesystem",
});

app.get("/employee", (req, res) => {
  db.query("SELECT * FROM employee", (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});

app.post("/create", (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const age = req.body.age;
  const email = req.body.email;
  const password = req.body.password;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    db.query(
      "INSERT INTO employee (fname, lname, age, email, password) VALUES (?,?,?,?,?)",
      [fname, lname, age, email, hash],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values insert Success");
        }
      }
    );
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const age = req.body.age;
  db.query(
    "UPDATE employee SET age = ? WHERE id = ?",
    [age, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employee WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// ส่วนรูปภาพ

const storage = multer.diskStorage({
  //ในส่วนนี้จะเป็น configของMulter ว่าจะให้เก็บไฟล์ไว้ที่ไหน และ Rename ชื่อไฟล์
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + ".png");
  },
});

const upload = multer({ storage: storage }); // ใส่ config

app.get("/", (req, res) => {
  res.send("Hello Upload");
});

app.post("/upload", upload.single("file"), (req, res) => {
  //สร้าง method POST ขึ้นมาและ ใส่ middleward upload โดนตั้งชื่อ paramที่จะรับว่า "file" ไว้หรือจะเป็นอย่างอื่นก็ได้ตามที่ต้องการ
  //เข้าไป ส่วน.singleจะเป็นตัวกำหนดว่าอัพโหลดได้ทีละกี่ไฟล์ อ่านใน Doc ของ Multer ดู จะมี .single .array 9ล9
  res.send(req.file); //และให้ Response ค่าไฟล์ออกไป
});

// ส่วนเข้าสู่ระบบ
app.post("/login", jsonParser, function (req, res, next) {
  db.execute(
    "SELECT * FROM employee WHERE email=?",
    [req.body.email],
    function (err, users, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      if (users.length === 0) {
        res.json({ status: "error", message: "no user found" });
        return;
      }
      //ตรวจสอบ pass
      bcrypt.compare(
        req.body.password,
        users[0].password,
        function (err, isLogin) {
          // result == true
          if (isLogin) {
            //สร้าง token ในการ login และกำหนดอายุ
            var token = jwt.sign(
              { email: users[0].email, role: users[0].status },
              secert,
              {
                expiresIn: "1h",
              }
            );
            res.json({
              status: "ok",
              message: "login sucess",
              token,
              role: users[0].status,
            });
          } else {
            res.json({ status: "error", message: "login failed" });
          }
        }
      );
    }
  );
});

//authen
app.post("/authen", jsonParser, function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1]; //ตัดช่องว่างใน token ออก
    var decoded = jwt.verify(token, secert); // เอาอีเมลมาใช้ และวันเวลาหมดอายุ
    res.json({ status: "ok", decoded });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});

app.listen("3001", () => {
  console.log("Sever is running on port 3001");
});
