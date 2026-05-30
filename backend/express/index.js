const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.json());
const user = [];

// TEMP: to understand middleware
// app.post(
//   "/user",
//   (req, res, next) => {
//     console.log("Middleware 1");
//     // res.send("Middleware 1");
//     req.classTiming = "9pm";
//     next();
//   },
//   (req, res, next) => {
//     console.log(req.classTiming);
//     console.log("Middleware 2");
//     next();
//   },
//   (req, res) => {
//     console.log("Middleware 3");
//     const body = req.body;
//     console.log(body);
//     //   user.push(body);
//     //   res.json({ id: user.length });
//     res.send("User added");
//   },
// );
// function middleware1(req, res, next) {
//   console.log("Middleware 1");
//   next();
// }
// function middlewareGenerator() {
//   return (req, res, next) => {
//     console.log("Middleware 1");
//     next();
//   };
// }
app.post("/user", (req, res) => {
  const body = req.body;
  console.log(body);
  user.push(body);
  res.status(201).send({ id: user.length });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
