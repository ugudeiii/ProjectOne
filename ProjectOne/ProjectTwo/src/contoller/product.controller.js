"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductController = exports.getProductListController = void 0;
const product__service_1 = require("../service/product..service");
const getProductListController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, product__service_1.getProductListService)();
        res.send(result);
    }
    catch (error) {
        res
            .status(500)
            .send(error);
    }
});
exports.getProductListController = getProductListController;
const addProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, price, color, Image, stock } = req.body;
        if (!name || !price || !color || !Image || !stock) {
            throw new Error("Name, price, color, Image, and stock are required");
        }
        const result = yield (0, product__service_1.addProductService)(name, price, color, Image, stock);
        res.send(result);
    }
    catch (error) {
        res
            .status(500)
            .send(error);
    }
});
exports.addProductController = addProductController;
