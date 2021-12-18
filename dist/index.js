"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var user_1 = require("./routes/user");
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
// Body parser
app.use(express_1.default.json());
//routes
app.get('/', function (req, res) {
    res.send('Hello Restaurant management api');
});
app.use('/api/user', user_1.userRouter);
var PORT = process.env.PORT || 5000;
var server = app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
// Handle unhandled promise rejections
process.on('unhandledRejection', function (err, promise) {
    console.log("Error: ".concat(err.message));
    // Close server & exit process
    server.close(function () { return process.exit(1); });
});
