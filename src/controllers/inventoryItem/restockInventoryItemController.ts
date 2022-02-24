import { Request, Response } from 'express';
import { IRestockInventoryItemRequestBody } from '../../interfaces/requests/InventoryItem';
import { restockInventoryItemValidator } from '../../utils/validators/inventoryItemValidator';

const restockInventoryItemController = async (
  req: Request<{}, {}, IRestockInventoryItemRequestBody>,
  res: Response
) => {
  try {
    //1. validate request body
    await restockInventoryItemValidator(req.body);

    //2. update all the inventory items with the latest quantity, unitRate and measurementUnit from the request body
    //2a. inventoryItem is the array of inventory items that needs to be updated
    const { inventoryItem } = req.body;

    //3. after step 2 is completed successfully, create restockHistory document

    res.status(201).json({});
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { restockInventoryItemController };
