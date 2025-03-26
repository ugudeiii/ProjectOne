"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../contoller/user.controller");
const router = (0, express_1.Router)();
router.get('/users', user_controller_1.getUserListController);
router.post('/signup', user_controller_1.SignUpController);
router.post('/signin', user_controller_1.SignInController);
exports.default = router;
