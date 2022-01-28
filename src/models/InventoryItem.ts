import { Schema, model } from 'mongoose';
import {
  IInventoryItemDoc,
  IInventoryItemModel,
} from '../interfaces/models/InventoryItem';

const inventoryItemSchema = new Schema(
  {
    inventoryCategory: {
      type: Schema.Types.ObjectId,
      ref: 'inventoryCategory',
      required: true,
    },
    vendor: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    itemName: {
      type: String,
      unique: true,
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
  },
  { timestamps: true }
);

const InventoryItem = model<IInventoryItemDoc, IInventoryItemModel>(
  'inventoryItem',
  inventoryItemSchema
);

export { InventoryItem };
