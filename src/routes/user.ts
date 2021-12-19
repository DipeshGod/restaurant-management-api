import { Router } from 'express';
import { getUserController } from '../controllers/user/getUserController';
const router = Router();

router.get('/', getUserController);

export { router as userRouter };
