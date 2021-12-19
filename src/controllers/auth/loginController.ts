import { Request, Response } from 'express';
import { ILoginRequestBody } from '../../interfaces/requests/LoginRequestBody';
import { User } from '../../models/User';

const validatePassword = (encryptedPassword: string, checkString: string) => {};

const loginController = async (
  req: Request<{}, {}, ILoginRequestBody>,
  res: Response
) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (!req.body.name || !req.body.password) {
      return res.status(400).json({
        msg: 'Please provide valid name and password',
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
