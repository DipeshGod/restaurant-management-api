"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var userSchema = new mongoose_1.default.Schema({
    role: {
        type: [String],
        enum: [
            'owner',
            'inventoryManager',
            'vendors',
            'waiter',
            'kitchenOrderManager',
            'barOrderManager',
            'cashier',
            'accountant',
            'members',
        ],
    },
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
});
var User = mongoose_1.default.model('user', userSchema);
exports.User = User;
