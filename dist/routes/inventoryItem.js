"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventoryItemRouter = void 0;
var express_1 = require("express");
var createInventoryControler_1 = require("../controllers/inventoryItem/createInventoryControler");
var authenticate_1 = require("../middlewares/authenticate");
var authorization_1 = require("../middlewares/authorization");
var router = (0, express_1.Router)();
exports.inventoryItemRouter = router;
router.post('/', [authenticate_1.authentication, authorization_1.isInventoryManager], createInventoryControler_1.createInventoryItemController);
