const express = require("express");
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./router/router");

app.use(routes);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
