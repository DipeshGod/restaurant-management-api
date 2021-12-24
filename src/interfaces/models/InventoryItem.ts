import mongoose from 'mongoose';

export interface IInventoryItem {
  inventoryCategory: string;
  itemName: string;
  quantity: number;
  measurementUnit: string;
  amount: number;
  unitRate: number;
}

export interface IInventoryItemDoc extends mongoose.Document {
  inventoryCategory: string;
  itemName: string;
  quantity: number;
  measurementUnit: string;
  amount: number;
  unitRate: number;
}

export interface IInventoryItemModel
  extends mongoose.Model<IInventoryItemDoc> {}
