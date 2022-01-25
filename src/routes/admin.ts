import { Router } from 'express';
import { createRestaurantOwnerController } from '../controllers/admin/createRestaurantOwnerController';
import { authentication } from '../middlewares/authenticate';
import { isAppAdmin } from '../middlewares/authorization';

const router = Router();

router.post(
  '/restaurantOwner',
  [authentication, isAppAdmin],
  createRestaurantOwnerController
);

export { router as adminRouter };
