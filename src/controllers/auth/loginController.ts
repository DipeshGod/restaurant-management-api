import { Request, Response } from 'express';
import { IUser } from '../../interfaces/models/User';
import { User } from '../../models/User';

const loginController = async (req: Request<{}, {}, IUser>, res: Response) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (!req.body.name || !req.body.password) {
      return res.status(400).json({
        message: 'Please provide valid name and password',
      });
    }
    if (!user) {
      return res.status(401).json({ msg: 'Invalid Credentials' });
    }
    if (user.password !== req.body.password) {
      return res.status(401).json({ msg: 'Invalid Credentials' });
    }
    res.json({ msg: 'login successfull' });
  } catch (err) {
    console.log('Error in loginController: ', err);
  }
};

export { loginController };
