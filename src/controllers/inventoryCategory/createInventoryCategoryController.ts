import { Request, Response } from 'express';
import { ICreateInventoryCategoryRequestBody } from '../../interfaces/requests/InventoryCategory';
import { InventoryCategory } from '../../models/InventoryCategory';
import { User } from '../../models/User';
import { createInventoryCategoryValidator } from '../../utils/validators/inventoryCategoryValidator';

const createInventoryCategoryController = async (
  req: Request<{}, {}, ICreateInventoryCategoryRequestBody>,
  res: Response
) => {
  try {
    //validate request data
    await createInventoryCategoryValidator(req.body);

    //find restaurant objectId from user to associate inventoryCategory with restaurant
    const restroObjectId = req.user.restroObjectId;

    //create new inventoryCategory
    const inventoryCategory = new InventoryCategory({
      restaurant: restroObjectId,
      name: req.body.name,
    });
    await inventoryCategory.save();
    res.status(201).json({
      msg: 'Inventory category created successfully',
      inventoryCategory,
    });
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { createInventoryCategoryController };
