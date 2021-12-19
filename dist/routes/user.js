"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
var express_1 = require("express");
var getUserController_1 = require("../controllers/user/getUserController");
var router = (0, express_1.Router)();
exports.userRouter = router;
router.get('/', getUserController_1.getUserController);
