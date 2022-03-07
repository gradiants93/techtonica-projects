import express from "express";
const app = express();
const port = process.env.port || 3001;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
