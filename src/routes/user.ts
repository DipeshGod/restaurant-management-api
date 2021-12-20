import { Router } from 'express';
import { createUserController } from '../controllers/user/createUserController';
import { getUserController } from '../controllers/user/getUserController';
import { authentication } from '../middlewares/authenticate';

const router = Router();

router.get('/', authentication, getUserController);
router.post('/', createUserController);

export { router as userRouter };
