const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

// Routes
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Make sure it's working terminal side
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
