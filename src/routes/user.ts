import { Router } from 'express';
import { createUserController } from '../controllers/user/createUserController';
import { getUserController } from '../controllers/user/getUserController';
import { updateUserController } from '../controllers/user/updateUserController';
import { authentication } from '../middlewares/authenticate';
import { isOwner } from '../middlewares/authorization';

const router = Router();

router.get('/', [authentication, isOwner], getUserController);
router.post('/', [authentication, isOwner], createUserController);
router.put('/', [authentication, isOwner], updateUserController);

export { router as userRouter };
