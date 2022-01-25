import { Router } from 'express';
import { getAllRestaurantController } from '../controllers/restaurant/GetAllRestaurantController';
import { authentication } from '../middlewares/authenticate';

const router = Router();

router.get('/', getAllRestaurantController);

export { router as restaurantRouter };
