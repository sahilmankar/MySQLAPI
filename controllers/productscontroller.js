var Product = require("../DAL/productdal");

exports.GetAllProducts = (request, response) => {
  Product.GetAll(request, response);
};

exports.InsertProduct = (request, response) => {
  Product.InsertProduct(request, response);
};

exports.GetById = (request, response) => {
  Product.GetById(request, response);
};

exports.UpdateProduct = (request, response) => {
  Product.UpdateProduct(request, response);
};

exports.DeleteById = (request, response) => {
  Product.DeleteById(request, response);
};
