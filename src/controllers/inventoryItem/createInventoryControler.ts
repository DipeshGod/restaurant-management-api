import { Request, Response } from 'express';
import { ICreateInventoryRequestBody } from '../../interfaces/requests/Inventory';
import { Inventory } from '../../models/Inventory';
import { InventoryCategory } from '../../models/InventoryCategory';

const createInventoryController = async (
  req: Request<{}, {}, ICreateInventoryRequestBody>,
  res: Response
) => {
  try {
    //add inventory category model
    const inventoryCategory = await InventoryCategory.findOne({
      name: req.body.inventoryCategory,
    });
    if (!inventoryCategory) {
      const category = new InventoryCategory({
        name: req.body.inventoryCategory,
      });
      await category.save();
    }

    //create new inventory model
    const inventory = new Inventory({
      inventoryCategory: inventoryCategory!._id,
      itemName: req.body.itemName,
      quantity: req.body.quantity,
      measurementUnit: req.body.measurementUnit,
      amount: req.body.quantity * req.body.unitRate,
      unitRate: req.body.unitRate,
    });

    await inventory.save();
    res.json({ msg: 'Inventory created successfully', inventory });
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { createInventoryController };
