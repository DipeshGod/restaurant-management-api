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
    amount: {
      type: Number,
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
