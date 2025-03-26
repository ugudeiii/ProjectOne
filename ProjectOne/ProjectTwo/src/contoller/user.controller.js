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
exports.SignInController = exports.SignUpController = exports.getUserListController = void 0;
const user_service_1 = require("../service/user.service");
const getUserListController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, user_service_1.getUserListService)();
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getUserListController = getUserListController;
const SignUpController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            throw new Error("Username and password are required");
        }
        const result = yield (0, user_service_1.SignUpService)(username, password);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.SignUpController = SignUpController;
const SignInController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            throw new Error("Username and password are required");
        }
        const result = yield (0, user_service_1.SignInService)({ username, password });
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.SignInController = SignInController;
