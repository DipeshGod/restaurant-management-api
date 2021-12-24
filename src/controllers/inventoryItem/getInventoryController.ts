import { Request, Response } from 'express';

const getInventoryController = async (req: Request, res: Response) => {
  try {
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { getInventoryController };
