import { Request, Response } from 'express';
import { IRestockInventoryItemRequestBody } from '../../interfaces/requests/InventoryItem';
import { InventoryItem } from '../../models/InventoryItem';
import { createInventoryItemValidator } from '../../utils/validators/inventoryItemValidator';

const restockInventoryItemController = async (
  req: Request<{}, {}, IRestockInventoryItemRequestBody>,
  res: Response
) => {
  try {
    //1. validate request body
    await createInventoryItemValidator(req.body);

    //2. find the item with the given id
    const item = await InventoryItem.findById(req.body.id);

    //3. if the item is not found, return error
    if (!item) {
      return res.status(404).json({
        message: 'Item not found',
      });
    }

    //4. update the item
    item.quantity = req.body.quantity;
    item.unitRate = req.body.unitRate;

    //5. save the item and also create restock history as a transaction
    await item.save();

    //4. return the item
    res.status(201).json({});
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { restockInventoryItemController };
