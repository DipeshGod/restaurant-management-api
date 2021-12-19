"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var user_1 = require("./routes/user");
var mongoose_1 = __importDefault(require("mongoose"));
var auth_1 = require("./routes/auth");
var apiDoc_1 = require("./routes/apiDoc");
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
// Body parser
app.use(express_1.default.json());
//api docs
app.get('/', apiDoc_1.apiDocRouter);
//routes
app.use('/api/user', user_1.userRouter);
app.use('/api/auth', auth_1.authRouter);
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
