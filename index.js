const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("AWS cloud practitioner!");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
