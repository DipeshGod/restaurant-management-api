"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryCategory = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var inventoryCategorySchema = new mongoose_1.default.Schema({
    restaurant: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'restaurant',
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true,
});
var InventoryCategory = mongoose_1.default.model('inventoryCategory', inventoryCategorySchema);
exports.InventoryCategory = InventoryCategory;
