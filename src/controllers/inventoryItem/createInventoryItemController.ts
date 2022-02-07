import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { ICreateInventoryItemRequestBody } from '../../interfaces/requests/InventoryItem';
import { InventoryItem } from '../../models/InventoryItem';
import { RestockHistory } from '../../models/RestockHistory';
import { createInventoryItemValidator } from '../../utils/validators/inventoryItemValidator';

const createInventoryItemController = async (
  req: Request<{}, {}, ICreateInventoryItemRequestBody>,
  res: Response
) => {
  try {
    //1. validate request body
    await createInventoryItemValidator(req.body);
    //2. check if the item name already exists and return error if it does
    const item = await InventoryItem.findOne({ itemName: req.body.itemName });
    if (item) {
      return res.status(400).json({
        message: 'Item already exists',
      });
    }

    //3. if the item name does not exist, create the item

    let newItem = await InventoryItem.create(req.body);

    //4. return the item
    res.status(201).json({ item: newItem });
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { createInventoryItemController };
