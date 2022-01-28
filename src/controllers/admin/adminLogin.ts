import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../../models/User';
import * as jwt from 'jsonwebtoken';
import { adminLoginValidator } from '../../utils/validators/authValidator';
import { IAdminLoginRequestBody } from '../../interfaces/requests/Admin';

//function to validate hash to the user input
const validatePassword = async (
  encryptedPassword: string,
  checkString: string
) => {
  return await bcrypt.compare(checkString, encryptedPassword);
};

//function to assign token to the user on successful login
const assignToken = (user: any) => {
  const token = jwt.sign(
    {
      _id: user._id,
      role: user.role,
    },
    process.env.TOKEN_SECRET!
  );
  return token;
};

const adminLoginController = async (
  req: Request<{}, {}, IAdminLoginRequestBody>,
  res: Response
) => {
  try {
    //validate the request data
    await adminLoginValidator(req.body);

    //find user with the given name and role
    const user = await User.findOne({
      name: req.body.name,
      role: ['App Admin'],
    });

    //if user is not found
    if (!user) {
      return res.status(401).json({ msg: 'Invalid Credentials' });
    }

    //validate password against hash
    const isValidPassword = await validatePassword(
      user.password,
      req.body.password
    );
    //if password is not valid
    if (isValidPassword === false) {
      return res.status(401).json({ msg: 'Invalid Credentials' });
    }

    //if all successfull return token
    const token = assignToken(user);
    res.json({ msg: 'Welcome Admin', token: token, user });
  } catch (err) {
    res.status(400).json({ err });
  }
};

export { adminLoginController };
