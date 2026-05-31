const express = require("express");
const bodyparser = require("body-parser");
const { connectToDB, getDB } = require("./db");
const { ObjectId } = require("mongodb");

const app = express();

app.use(bodyparser.json());
const users = [];
let lastAddedID = 0;

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
app.post("/user", async (req, res) => {
  const body = req.body;
  await getDB().collection("user").insertOne(body);
  res.status(201).send({ data: null, message: "User added successfully" });
});

app.get("/user", async (req, res) => {
  const id = req.query.id;
  console.log(id);
  const foundUser = await getDB()
    .collection("user")
    .findOne({ _id: new ObjectId(id) });
  if (!foundUser) {
    res.status(404).send({ data: null, message: "User not found" });
    return;
  }

  res
    .status(200)
    .send({ data: foundUser, message: "User retrieved successfully" });
});

app.delete("/user", async (req, res) => {
  const id = req.query.id;
  const objectId = new ObjectId(id);
  await getDB().collection("user").deleteOne({ _id: objectId });
  res.status(200).send({ data: null, message: "User deleted successfully" });
});

app.put("/user", async (req, res) => {
  const id = req.query.id;
  const objectId = new ObjectId(id);
  const body = req.body;
  await getDB().collection("user").updateOne({ _id: objectId }, { $set: body });
  res
    .status(200)
    .send({ data: null, message: "User updated successfully" });
});
const PORT = 5000;

connectToDB()
  .then(() => {
    console.log("Connected to DB...");
    app.listen(PORT, () => {
      console.log("Server is listening on 5000");
    });
  })
  .catch((error) => {
    console.error("Failed to connect to DB, server not started:", error);
  });
