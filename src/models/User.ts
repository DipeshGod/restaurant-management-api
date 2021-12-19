import mongoose from 'mongoose';
import { IUserDoc, IUserModel } from '../interfaces/models/User';

const userSchema = new mongoose.Schema({
  role: {
    type: [String],
    enum: [
      'owner',
      'inventoryManager',
      'vendors',
      'waiter',
      'kitchenOrderManager',
      'barOrderManager',
      'cashier',
      'accountant',
      'members',
    ],
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

const User = mongoose.model<IUserDoc, IUserModel>('user', userSchema);

export { User };
