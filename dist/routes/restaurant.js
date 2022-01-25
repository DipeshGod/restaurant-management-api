"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantRouter = void 0;
var express_1 = require("express");
var GetAllRestaurantController_1 = require("../controllers/restaurant/GetAllRestaurantController");
var router = (0, express_1.Router)();
exports.restaurantRouter = router;
router.get('/', GetAllRestaurantController_1.getAllRestaurantController);
