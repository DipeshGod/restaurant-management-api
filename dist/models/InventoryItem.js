"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryItem = void 0;
var mongoose_1 = require("mongoose");
var inventoryItemSchema = new mongoose_1.Schema({
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
        type: String,
        required: true,
    },
    unitRate: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
var InventoryItem = (0, mongoose_1.model)('inventoryItem', inventoryItemSchema);
exports.InventoryItem = InventoryItem;
