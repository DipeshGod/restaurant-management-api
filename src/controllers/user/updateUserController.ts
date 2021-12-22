import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../../models/User';
import { updateUserValidator } from '../../utils/userValidator';
import { IUpdateUserRequestBody } from '../../interfaces/requests/User';

const encryptPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

const updateUserController = async (
  req: Request<{}, {}, IUpdateUserRequestBody>,
  res: Response
) => {
  try {
    //validate the request data
    await updateUserValidator(req.body);

    //check if user is already on the database
    let user = await User.findById(req.body.id);

    console.log(user);

    if (!user) {
      res.status(400).json({ msg: 'user doesnt exist' });
    }

    //if user is trying to update password, encrypt it first
    let encryptedPassword: string = '';
    if (req.body.password) {
      encryptedPassword = await encryptPassword(req.body.password);
    }

    //update user
    if (user) {
      user.name = req.body.name || user?.name;
      user.password =
        encryptedPassword.length > 0 ? encryptedPassword : user?.password;
      user.role = req.body?.role || user.role;
      user.salary = req.body?.salary || 0;
    }

    res.json({ msg: 'User updated successfully', user });
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { updateUserController };
