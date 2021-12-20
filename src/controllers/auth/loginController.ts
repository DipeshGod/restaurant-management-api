import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { ILoginRequestBody } from '../../interfaces/requests/LoginRequestBody';
import { User } from '../../models/User';
import * as jwt from 'jsonwebtoken';

//function to validate hash to the user input
const validatePassword = async (
  encryptedPassword: string,
  checkString: string
) => {
  return await bcrypt.compare(checkString, encryptedPassword);
};

//function to assign token to the user on successful login
const assignToken = (user: any) => {
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET!);
  return token;
};

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

    const isValidPassword = await validatePassword(
      user.password,
      req.body.password
    );

    if (isValidPassword === false) {
      return res.status(401).json({ msg: 'Invalid Credentials' });
    }
    const token = assignToken(user);
    res.json({ msg: 'login successfull', token: token });
  } catch (err) {
    console.log('Error in loginController: ', err);
  }
};

export { loginController };
