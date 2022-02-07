import { Request, Response } from 'express';
import { IRestockInventoryItemRequestBody } from '../../interfaces/requests/InventoryItem';

const restockInventoryItemController = async (
  req: Request<{}, {}, IRestockInventoryItemRequestBody>,
  res: Response
) => {
  try {
    //1. validate request body

    res.status(201).json({});
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { restockInventoryItemController };
