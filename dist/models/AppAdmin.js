"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppAdmin = void 0;
var mongoose_1 = require("mongoose");
var appAdminSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    mobileNumber: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true });
var AppAdmin = (0, mongoose_1.model)('appAdmin', appAdminSchema);
exports.AppAdmin = AppAdmin;
