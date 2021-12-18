"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
// Body parser
app.use(express_1.default.json());
var PORT = process.env.PORT || 5000;
var server = app.listen(PORT, function () {
    console.log('api started');
});
app.get('/', function (req, res) { return res.send('API Running u can now start working'); });
// Handle unhandled promise rejections
process.on('unhandledRejection', function (err, promise) {
    console.log("Error: ".concat(err.message));
    // Close server & exit process
    server.close(function () { return process.exit(1); });
});
module.exports = app;
