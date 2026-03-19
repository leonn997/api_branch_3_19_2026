const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("oi entrei na sua branch");
});


app.listen(3005, () => {
  console.log("Servidor on");
});