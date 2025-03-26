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
exports.SignInService = exports.SignUpService = exports.getUserListService = void 0;
const database_1 = __importDefault(require("../database"));
const getUserListService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield database_1.default.user.findMany();
    return result;
});
exports.getUserListService = getUserListService;
const SignUpService = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield database_1.default.user.create({
        data: {
            username: username,
            password: password
        }
    });
    return result;
});
exports.SignUpService = SignUpService;
const SignInService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield database_1.default.user.findUnique({
        where: {
            username: data.username,
            password: data.password
        }
    });
    return result;
});
exports.SignInService = SignInService;
