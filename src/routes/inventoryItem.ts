import { Router } from 'express';
import { createInventoryItemController } from '../controllers/inventoryItem/createInventoryControler';
import { getInventoryItemByCategoryController } from '../controllers/inventoryItem/getInventoryByCategoryController';
import { authentication } from '../middlewares/authenticate';
import { isInventoryManager } from '../middlewares/authorization';

const router = Router();

router.post(
  '/',
  [authentication, isInventoryManager],
  createInventoryItemController
);

router.get(
  '/',
  [authentication, isInventoryManager],
  getInventoryItemByCategoryController
);

export { router as inventoryItemRouter };
