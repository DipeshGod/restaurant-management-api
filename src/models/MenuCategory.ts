import { string } from "joi";
import { Schema, model } from "mongoose";
import { IMenuCategoryDoc, IMenuCategoryModel } from "../interfaces/models/MenuCategory";

const menuCategorySchema = new Schema({
    name: {
        type: string,
        required: true
    },
    description: {
        type: string
    },
    restaurant: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'restaurant'
    }
}, { timestamps: true })

const MenuCategory = model<IMenuCategoryDoc, IMenuCategoryModel>('menuCategory', menuCategorySchema);

export { MenuCategory }