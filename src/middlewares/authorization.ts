import { NextFunction, Response, Request } from 'express';
import { User } from '../models/User';

const isAppAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.user;

  const user = await User.findById(id);

  if (user?.role.includes('appAdmin')) {
    next();
  } else {
    return res.status(401).json({
      msg: 'Your are not owner authorize to access this api',
    });
  }
};

const isOwner = async (req: Request, res: Response, next: NextFunction) => {
  const { role } = req.user;

  if (role.includes('owner')) {
    next();
  } else {
    return res.status(401).json({
      msg: 'Your are not owner authorize to access this api',
    });
  }
};

const isInventoryManager = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { role } = req.user;

  if (role.includes('inventoryManager') || role.includes('owner')) {
    next();
  } else {
    return res.status(401).json({
      msg: 'Your are not authorize to access this page',
    });
  }
};

export { isOwner, isInventoryManager, isAppAdmin };
