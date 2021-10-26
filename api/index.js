const express = require("express");

const config = require("./config/app");

const app = express();

app.get("/home", (req, res) => {
  return res.send("Welcom Home");
});

const port = config.appPort;

app.listen(
  (port,
  () => {
    console.log(`server listening on PORT:${port}`);
  })
);

console.log("Hello World!");
