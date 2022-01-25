import mongoose from 'mongoose';

export interface IUser {
  restaurant: string;
  role: [string];
  name: string;
  password: string;
  salary: number;
}

export interface IUserDoc extends mongoose.Document {
  restaurant: string;
  role: [string];
  name: string;
  password: string;
  salary: number;
}

export interface IUserModel extends mongoose.Model<IUserDoc> {}
