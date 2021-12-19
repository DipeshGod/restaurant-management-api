import { Router } from 'express';
import { createUserController } from '../controllers/user/createUserController';
import { getUserController } from '../controllers/user/getUserController';
const router = Router();

router.get('/', getUserController);
router.post('/', createUserController);

export { router as userRouter };
