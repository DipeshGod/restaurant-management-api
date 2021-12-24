"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constantsRouter = void 0;
var express_1 = require("express");
var authenticate_1 = require("../middlewares/authenticate");
var authorization_1 = require("../middlewares/authorization");
var constants_1 = require("../constants");
var router = (0, express_1.Router)();
exports.constantsRouter = router;
router.get('/user', [authenticate_1.authentication, authorization_1.isOwner], function (req, res) {
    return res.json({ roles: constants_1.roles });
});
