"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
var express_1 = require("express");
var loginController_1 = require("../controllers/auth/loginController");
var router = (0, express_1.Router)();
exports.authRouter = router;
router.post('/login', loginController_1.loginController);
