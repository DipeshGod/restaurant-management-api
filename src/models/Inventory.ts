import { number } from 'joi';
import { Schema, model } from 'mongoose';
import { IInventoryDoc, IInventoryModel } from '../interfaces/models/Inventory';

const inventorySchema = new Schema(
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
  },
  { timestamps: true }
);

const Inventory = model<IInventoryDoc, IInventoryModel>(
  'inventory',
  inventorySchema
);

export { Inventory };
