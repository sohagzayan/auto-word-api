const express = require("express");
const router = express.Router();
const controller = require("../Controllers/product.controller");

router.get("/product", controller.getAllProduct);
router.post("/product", controller.addNewProduct);
router.get("/product/:id", controller.getSingleProduct);
router.delete("/product/:id", controller.deleteProduct);

module.exports = router;
