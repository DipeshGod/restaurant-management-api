import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ msg: 'this is user route' });
});

export { router as userRouter };
