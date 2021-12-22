import { NextFunction, Response, Request } from 'express';
import { User } from '../models/User';

const isOwner = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.user._id;

  const user = await User.findById(id);

  if (user?.role.includes('owner')) {
    next();
  } else {
    return res.status(401).json({
      msg: 'Your are not owner authorize to access this page',
    });
  }
};

const isInventoryManager = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.user._id;

  const user = await User.findById(id);

  if (user?.role.includes('inventoryManager')) {
    next();
  } else {
    return res.status(401).json({
      msg: 'Your are not authorize to access this page',
    });
  }
};

export { isOwner, isInventoryManager };
