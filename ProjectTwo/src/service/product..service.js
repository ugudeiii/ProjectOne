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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductService = exports.getProductListService = void 0;
const database_1 = __importDefault(require("../database"));
const getProductListService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield database_1.default.product.findMany();
    return result;
});
exports.getProductListService = getProductListService;
const addProductService = (name, price, color, Image, stock) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield database_1.default.product.create({
        data: {
            name: name,
            price: price,
            color: color,
            Image: Image,
            Stock: stock
        }
    });
    return result;
});
exports.addProductService = addProductService;
