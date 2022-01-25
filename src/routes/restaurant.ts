import { Router } from 'express';
import { createRestaurantController } from '../controllers/restaurant/createRestaurantController';
import { authentication } from '../middlewares/authenticate';
import {} from '../middlewares/authorization';

const router = Router();

router.post('/', [authentication], createRestaurantController);

export { router as restaurantRouter };
