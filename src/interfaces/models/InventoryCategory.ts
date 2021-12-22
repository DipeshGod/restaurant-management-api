import mongoose from 'mongoose';

export interface IInventoryCategory {
  name: string;
}

export interface IInventoryCategoryDoc extends mongoose.Document {
  name: string;
}

export interface IInventoryCategoryModel
  extends mongoose.Model<IInventoryCategoryDoc> {}
