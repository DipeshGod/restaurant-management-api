import { NextFunction, Response, Request } from 'express';
import { User } from '../models/User';

const isAppAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.user._id;

  const user = await User.findById(id);

  if (user?.role.includes('appAdmin')) {
    next();
  } else {
    return res.status(401).json({
      msg: 'Your are not owner authorize to access this page',
    });
  }
};

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

const isInventoryManager = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.user._id;

  const user = await User.findById(id);

  if (user?.role.includes('inventoryManager') || user?.role.includes('owner')) {
    next();
  } else {
    return res.status(401).json({
      msg: 'Your are not authorize to access this page',
    });
  }
};

export { isOwner, isInventoryManager, isAppAdmin };
