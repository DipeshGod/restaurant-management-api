import { Request, Response } from 'express';
import { ICreateInventoryCategoryRequestBody } from '../../interfaces/requests/InventoryCategory';
import { InventoryCategory } from '../../models/InventoryCategory';
import { createInventoryCategoryValidator } from '../../utils/inventoryCategoryValidator';

const createInventoryCategoryController = async (
  req: Request<{}, {}, ICreateInventoryCategoryRequestBody>,
  res: Response
) => {
  try {
    //validate request data
    await createInventoryCategoryValidator(req.body);

    //create new inventory category
    const inventoryCategory = new InventoryCategory({
      name: req.body.name,
    });
    await inventoryCategory.save();
    res.json({
      msg: 'Inventory category created successfully',
      inventoryCategory,
    });
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { createInventoryCategoryController };
