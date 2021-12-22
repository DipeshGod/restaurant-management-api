import { Request, Response } from 'express';
import { ICreateInventoryRequestBody } from '../../interfaces/requests/Inventory';
import { Inventory } from '../../models/Inventory';
import { InventoryCategory } from '../../models/InventoryCategory';

const createInventoryController = async (req: Request<{}, {}, ICreateInventoryRequestBody>, res: Response) => {
    try {
        //add inventory category
        const inventoryCategory = await InventoryCategory.find({ name: req.body.inventoryCategory });

        console.log('inventory category', inventoryCategory.length);
        if (inventoryCategory.length === 0) {
            const category = new InventoryCategory({
                name: req.body.inventoryCategory
            })
            await category.save();
        }

        //create new inventory
        const inventory = new Inventory({
            inventoryCategory: req.body.inventoryCategory,
            itemName: req.body.itemName,
            quantity: req.body.quantity,
            measurementUnit: req.body.measurementUnit,
            amount: req.body.quantity * req.body.unitRate,
            unitRate: req.body.unitRate
        })

        await inventory.save();
        res.json({ msg: 'Inventory created successfully', inventory });
    } catch (err: any) {
        res.status(400).json({ err });
    }
}

export { createInventoryController };