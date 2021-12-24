import mongoose from 'mongoose';

export interface IRestockHistory {
  inventoryItem: string;
  inventoryCategory: string;
  quantity: number;
  unitRate: number;
}

export interface IRestockHistoryDoc extends mongoose.Document {
  inventoryItem: string;
  inventoryCategory: string;
  quantity: number;
  unitRate: number;
}

export interface IRestockHistoryModel
  extends mongoose.Model<IRestockHistoryDoc> {}
