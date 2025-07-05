import express from "express";

const PORT = 3000; // port number

const app = express(); // create express app server instance

app.get("/", (req, res) => {
  return res.send("Home");
});

app.get("/login", (req, res) => {
  return res.json({ message: "login" });
});

app.get("/signup", (req, res) => {
  return res.json({ message: "signup" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // server is running
});
