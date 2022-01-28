"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var userSchema = new mongoose_1.default.Schema({
    restaurant: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'restaurant',
        // required: true,
    },
    role: {
        type: [String],
        enum: [
            'App Admin',
            'Owner',
            'Inventory Manager',
            'Vendor',
            'Waiter',
            'kitchen Order Manager',
            'Bar Order Manager',
            'Cashier',
            'Accountant',
            'Member',
        ],
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
        default: 0,
    },
}, {
    timestamps: true,
});
var User = mongoose_1.default.model('user', userSchema);
exports.User = User;
