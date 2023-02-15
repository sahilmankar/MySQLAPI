var mysql = require("./db");

exports.GetAll = function (request, response) {
  var command = "select * from products";
  mysql.query(command, (err, rows) => {
    if (err) {
      response.send("error while fetching data" + err);
    }
    response.send(rows);
  });
};

exports.InsertProduct = function (request, response) {
  let product = request.body;

  const columns = Object.keys(product);
  // console.log(Object.keys(product));
  const values = Object.values(product);
  // console.log(Object.values(product));

  let command = `INSERT INTO products(${columns.join(",")}) VALUES (${values.map((v) => "?").join(",")})`;
  mysql.query(command, values, (err, results) => {
    if (err) {
      response.send(err);
    }
    response.send("record inserted successfully");
  });
};

exports.GetById = function (request, response) {
  let command = "select * from products where productid=" + request.params.id;
  mysql.query(command, (err, rows) => {
    if (err) {
      response.send("error while fetching data" + err);
    }
    response.send(rows);
  });
};

exports.UpdateProduct = function (request, response) {
  let product = request.body;

  const columns = Object.keys(product);
  const values = Object.values(product);
  let placeholders = columns.map((c) => `${c}=?`).join(", ");

  let command =
    `UPDATE products SET ${placeholders} WHERE productid=` + request.params.id;

  mysql.query(command, values, (err) => {
    if (err) {
      response.send(err);
    }
    response.send("Record updated succesfully");
  });
};

exports.DeleteById = function (request, response) {
  let command = "DELETE FROM products where productid=" + request.params.id;
  mysql.query(command, (err, rows) => {
    if (err) {
      response.send("error while fetching data" + err);
    }
    response.send("Record deleted of id=" + request.params.id);
  });
};
