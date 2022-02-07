import mongoose from 'mongoose';

export interface IRestockHistory {
  inventoryItem: [string];
  inventoryCategory: string;
  vendor: string;
  cashRemaining: number;
  cashPaid: number;
}

export interface IRestockHistoryDoc extends mongoose.Document {
  inventoryItem: [string];
  inventoryCategory: string;
  vendor: string;
  cashRemaining: number;
  cashPaid: number;
}

export interface IRestockHistoryModel
  extends mongoose.Model<IRestockHistoryDoc> {}
