import mongoose from 'mongoose';

export interface IInventory {
  inventoryCategory: string;
  itemName: string;
  quantity: number;
  measurementUnit: [string];
  amount: number;
  unitRate: number;
}

export interface IInventoryDoc extends mongoose.Document {
  inventoryCategory: string;
  itemName: string;
  quantity: number;
  measurementUnit: [string];
  amount: number;
  unitRate: number;
}

export interface IInventoryModel extends mongoose.Model<IInventoryDoc> {}
