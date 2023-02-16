const express = require("express");
const router = express.Router();
const productscontroller = require("../controllers/productscontroller");

router.get("/api/products", (request, response) => {
  productscontroller.GetAllProducts(request, response);
});

router.get("/api/products/:id", (request, response) => {
  productscontroller.GetById(request, response);
});

router.post("/api/products/insert", (request, response) => {
  productscontroller.InsertProduct(request, response);
});

router.put("/api/products/update/:id", (request, response) => {
  productscontroller.UpdateProduct(request, response);
});

router.delete("/api/products/delete/:id", (request, response) => {
  productscontroller.DeleteById(request, response);
});

module.exports = router;


