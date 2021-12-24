import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { ILoginRequestBody } from '../../interfaces/requests/Auth';
import { User } from '../../models/User';
import * as jwt from 'jsonwebtoken';
import { loginValidator } from '../../utils/validators/authValidator';

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
    //validate the request data
    await loginValidator(req.body);

    const user = await User.findOne({ name: req.body.name });

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
    res.status(400).json({ err });
  }
};

export { loginController };
