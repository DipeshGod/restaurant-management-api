"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuCategory = void 0;
var joi_1 = require("joi");
var mongoose_1 = require("mongoose");
var menuCategorySchema = new mongoose_1.Schema({
    name: {
        type: joi_1.string,
        required: true
    },
    description: {
        type: joi_1.string
    },
    restaurant: {
        required: true,
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'restaurant'
    }
}, { timestamps: true });
var MenuCategory = (0, mongoose_1.model)('menuCategory', menuCategorySchema);
exports.MenuCategory = MenuCategory;
