import { Schema, model } from 'mongoose';

import {
  IRestockHistoryDoc,
  IRestockHistoryModel,
} from '../interfaces/models/RestockHistory';

const restockHistorySchema = new Schema(
  {
    inventoryCategory: {
      type: Schema.Types.ObjectId,
      ref: 'inventoryCategory',
      required: true,
    },
    inventoryItem: {
      type: [Schema.Types.ObjectId],
      ref: 'inventoryItem',
      required: true,
    },
    vendor: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    cashRemaining: {
      type: Number,
      required: true,
    },
    cashPaid: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const RestockHistory = model<IRestockHistoryDoc, IRestockHistoryModel>(
  'restockHistory',
  restockHistorySchema
);

export { RestockHistory };
