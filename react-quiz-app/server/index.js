const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const fetch = require("node-fetch");

// Routes
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});
app.get("/quiz", async (req, res) => {
  let response = await fetch("https://opentdb.com/api.php?amount=10");
  let quizQs = await response.json();
  console.log(quizQs);
  res.json(quizQs.results);
  return quizQs;
});

// Make sure it's working terminal side
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
