const express = require("express");
const app = express();
const port = process.env.port || 3001;

// Routes
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Make sure it's working terminal side
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
