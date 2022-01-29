import { Router } from 'express';
import { createUserController } from '../controllers/user/createUserController';
import { deleteUserController } from '../controllers/user/deleteUserController';
import { getCurrentUser } from '../controllers/user/getCurrentUser';
import { getUserByRestaurantIdController } from '../controllers/user/getUserByRestaurantIdController';
import { updateUserController } from '../controllers/user/updateUserController';
import { authentication } from '../middlewares/authenticate';
import { isOwner } from '../middlewares/authorization';

const router = Router();

router.get('/currentUser', [authentication], getCurrentUser);
router.post('/', [authentication, isOwner], createUserController);
router.put('/', [authentication, isOwner], updateUserController);
router.get('/', [authentication, isOwner], getUserByRestaurantIdController);
router.delete('/:id', [authentication, isOwner], deleteUserController);

export { router as userRouter };
