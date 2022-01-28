import mongoose from 'mongoose';
import { IUserDoc, IUserModel } from '../interfaces/models/User';

const userSchema = new mongoose.Schema(
  {
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'restaurant',
      // required: true,
    },
    role: {
      type: [String],
      enum: [
        'App Admin',
        'Owner',
        'Inventory Manager',
        'Vendors',
        'Waiter',
        'kitchen Order Manager',
        'Bar Order Manager',
        'Cashier',
        'Accountant',
        'Members',
      ],
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUserDoc, IUserModel>('user', userSchema);

export { User };
