const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017/db";

const client = new MongoClient(uri);
let db = null;

async function connectToDB() {
  try {
    await client.connect();
    db = client.db("db");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

function getDB() {
  if (!db) {
    throw new Error("Database not connected. Please call connectToDB first.");
  }
  return db;
}

module.exports = {
  connectToDB,
  getDB,
};
