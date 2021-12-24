import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { ICreateInventoryItemRequestBody } from '../../interfaces/requests/InventoryItem';
import { InventoryItem } from '../../models/InventoryItem';

const createInventoryItemController = async (
  req: Request<{}, {}, ICreateInventoryItemRequestBody>,
  res: Response
) => {
  try {
    //1. validate request body
    //2. check if the item name already exists and return error if it does
    const item = await InventoryItem.findOne({ itemName: req.body.itemName });
    if (item) {
      return res.status(400).json({
        message: 'Item already exists',
      });
    }
    //(perform operation 3 and 4 as transaction)
    const session = await mongoose.startSession();
    //3. if the item name does not exist, create the item
    await session.withTransaction(() => {
      return InventoryItem.create(req.body);
    });
    //4. after creating the inventory item, also create restock history document for the item
    await session.withTransaction(() => {
      throw new Error('fake error for simulation');
    });
    session.endSession();
    //4. return the item
    res.send({});
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { createInventoryItemController };
