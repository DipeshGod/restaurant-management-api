"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var express_rate_limit_1 = __importDefault(require("express-rate-limit"));
var mongoose_1 = __importDefault(require("mongoose"));
var restaurant_1 = require("./routes/restaurant");
var user_1 = require("./routes/user");
var auth_1 = require("./routes/auth");
var inventoryCategory_1 = require("./routes/inventoryCategory");
var inventoryItem_1 = require("./routes/inventoryItem");
var constants_1 = require("./routes/constants");
var admin_1 = require("./routes/admin");
//load environment variables
dotenv_1.default.config();
//initialize express
var app = (0, express_1.default)();
//cors middleware
app.use((0, cors_1.default)());
// allow static files from public folder
app.use(express_1.default.static('public'));
// Body parser
app.use(express_1.default.json());
//api docs
app.get('/docs', function (req, res) { return res.render('/docs.html'); });
//routes
//rate limit middleware
var limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 1000,
});
app.use('/api/', limiter);
app.use('/api/constants', constants_1.constantsRouter);
app.use('/api/restaurant', restaurant_1.restaurantRouter);
app.use('/api/user', user_1.userRouter);
app.use('/api/auth', auth_1.authRouter);
app.use('/api/inventory_category', inventoryCategory_1.inventoryCategoryRouter);
app.use('/api/inventory_item', inventoryItem_1.inventoryItemRouter);
app.use('/api/admin', admin_1.adminRouter);
var PORT = process.env.PORT || 5000;
var server;
//mongdb connection
mongoose_1.default.connect(process.env.ATLAS_URI, {}, function () {
    server = app.listen(PORT, function () {
        console.log("Server running on port ".concat(PORT));
    });
});
// Handle unhandled promise rejections
process.on('unhandledRejection', function (err, promise) {
    console.log("Error: ".concat(err.message));
    // Close server & exit process
    server.close(function () { return process.exit(1); });
});
