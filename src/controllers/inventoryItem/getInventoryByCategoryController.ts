import { Request, Response } from 'express';
import { Inventory } from '../../models/Inventory';

const getInventoryByCategoryController = async (
  req: Request,
  res: Response
) => {
  try {
    const inventories = await Inventory.findById({
      inventoryCategory: req.params.inventoryCategory,
    });
    res.json({ inventories });
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { getInventoryByCategoryController };
