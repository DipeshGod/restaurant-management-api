import mongoose from 'mongoose';
import { IInventoryCategoryDoc, IInventoryCategoryModel } from '../interfaces/models/InventoryCategory';

const inventoryCategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        }

    },
    {
        timestamps: true,
    }
);

const InventoryCategory = mongoose.model<IInventoryCategoryDoc, IInventoryCategoryModel>('inventoryCategory', inventoryCategorySchema);

export { InventoryCategory };
