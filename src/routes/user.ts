import { Router } from 'express';
import { getUserController } from '../controllers/user/getUserController';
import { User } from '../models/User';

const router = Router();

router.get('/', getUserController);

export { router as userRouter };
