import mongoose from 'mongoose';

export interface IUser {
  role: [string];
  name: string;
  password: string;
}

export interface IUserDoc extends mongoose.Document {
  role: [string];
  name: string;
  password: string;
}

export interface IUserModel extends mongoose.Model<IUserDoc> {}
