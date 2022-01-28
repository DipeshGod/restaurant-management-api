"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var restaurantSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    //for geo json
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
    features: {
        type: [String],
        required: true,
        enum: [
            'User Management',
            'Inventory Management',
            'Order Management',
            'Billing',
            'Financial Accounting',
            'Reporting And Analytics',
            'Online Ordering',
        ],
    },
    contactNumber: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
var Restaurant = mongoose_1.default.model('restaurant', restaurantSchema);
exports.Restaurant = Restaurant;
