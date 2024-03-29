"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestockHistory = void 0;
var mongoose_1 = require("mongoose");
var restockHistorySchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    inventoryItem: {
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: 'inventoryItem',
        required: true,
    },
    paidTotal: {
        type: Boolean,
        required: true,
    },
    vendor: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    cashRemaining: {
        type: Number,
        required: true,
    },
    cashPaid: {
        type: Number,
        required: true,
    },
    billImage: {
        type: String,
        required: false,
        default: '',
    },
}, { timestamps: true });
var RestockHistory = (0, mongoose_1.model)('restockHistory', restockHistorySchema);
exports.RestockHistory = RestockHistory;
