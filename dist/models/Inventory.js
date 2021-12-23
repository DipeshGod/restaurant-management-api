"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
var mongoose_1 = require("mongoose");
var inventorySchema = new mongoose_1.Schema({
    inventoryCategory: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'inventoryCategory',
        required: true,
    },
    itemName: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    measurementUnit: {
        type: [String],
        required: true,
    },
    amount: {
        type: Number,
    },
    unitRate: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
var Inventory = (0, mongoose_1.model)('inventory', inventorySchema);
exports.Inventory = Inventory;
