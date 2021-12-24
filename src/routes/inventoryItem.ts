import { Router } from 'express';
import { createInventoryItemController } from '../controllers/inventoryItem/createInventoryControler';
import { authentication } from '../middlewares/authenticate';
import { isInventoryManager } from '../middlewares/authorization';

const router = Router();

router.post(
  '/',
  [authentication, isInventoryManager],
  createInventoryItemController
);

export { router as inventoryItemRouter };
