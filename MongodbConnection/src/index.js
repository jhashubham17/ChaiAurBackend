import express from "express";
import connectDB from "./config/dbConfig.js";

const PORT = 3000;

const app = express(); // Create an instance of express app server

app.get("/home", (req, res) => {
  return res.json({ message: "Home" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  connectDB();
});
