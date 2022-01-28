import mongoose from 'mongoose';

export interface IInventoryItem {
  inventoryCategory: string;
  itemName: string;
  quantity: number;
  measurementUnit: string;
  unitRate: number;
  vendor: string;
}

export interface IInventoryItemDoc extends mongoose.Document {
  inventoryCategory: string;
  itemName: string;
  quantity: number;
  measurementUnit: string;
  unitRate: number;
  vendor: string;
}

export interface IInventoryItemModel
  extends mongoose.Model<IInventoryItemDoc> {}
