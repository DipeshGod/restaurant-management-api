import { Router } from 'express';
import { authentication } from '../middlewares/authenticate';
import { isInventoryManager, isOwner } from '../middlewares/authorization';
import { getInventoryController } from '../controllers/inventoryItem/getInventoryController';
import { createInventoryController } from '../controllers/inventoryItem/createInventoryControler';
import { getInventoryByCategoryController } from '../controllers/inventoryItem/getInventoryByCategoryController';

const router = Router();

router.get('/', [authentication, isInventoryManager], getInventoryController);
router.post(
  '/',
  [authentication, isInventoryManager],
  createInventoryController
);
router.get(
  '/:inventoryCategory',
  [authentication, isInventoryManager],
  getInventoryByCategoryController
);

export { router as inventoryRouter };
