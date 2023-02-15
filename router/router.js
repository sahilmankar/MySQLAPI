const express = require("express");
const router = express.Router();
const productscontroller = require("../controllers/productscontroller");

router.get("/api/getall", (request, response) => {
  productscontroller.GetAllProducts(request, response);
});

router.get("/api/getall/:id", (request, response) => {
  productscontroller.GetById(request, response);
});

router.post("/api/getall", (request, response) => {
  productscontroller.InsertProduct(request, response);
});

router.put("/api/getall/:id", (request, response) => {
  productscontroller.UpdateProduct(request, response);
});

router.delete("/api/getall/:id", (request, response) => {
  productscontroller.DeleteById(request, response);
});

module.exports = router;


