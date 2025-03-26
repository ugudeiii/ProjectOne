"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../contoller/product.controller");
const router = (0, express_1.Router)();
router.get('/products', product_controller_1.getProductListController);
router.post('/products', product_controller_1.addProductController);
exports.default = router;
