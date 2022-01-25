import { Router } from 'express';
import { createRestaurantController } from '../controllers/admin/createRestaurantController';
import { createRestaurantOwnerController } from '../controllers/admin/createRestaurantOwnerController';
import { authentication } from '../middlewares/authenticate';
import { isAppAdmin } from '../middlewares/authorization';

const router = Router();

router.post(
  '/restaurant',
  [authentication, isAppAdmin],
  createRestaurantController
);
router.post(
  '/restaurantOwner',
  [authentication, isAppAdmin],
  createRestaurantOwnerController
);

export { router as adminRouter };
