import { Router } from 'express';
import { getAllRestaurantController } from '../controllers/restaurant/getAllRestaurantController';

const router = Router();

router.get('/', getAllRestaurantController);

export { router as restaurantRouter };
