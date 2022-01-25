import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../../models/User';
import { createUserValidator } from '../../utils/validators/userValidator';
import { ICreateUserRequestBody } from '../../interfaces/requests/User';

const encryptPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

const createRestaurantOwnerController = async (
  req: Request<{}, {}, ICreateUserRequestBody>,
  res: Response
) => {
  try {
    //validate the request data
    await createUserValidator(req.body);

    //check if user is already on the database
    const user = await User.findOne({ name: req.body.name });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    //if not, create the user
    const encryptedPassword = await encryptPassword(req.body.password);
    const newUser = new User({
      restaurant: req.body.restaurant,
      name: req.body.name,
      password: encryptedPassword,
      role: req.body.role,
      salary: req.body.salary | 0,
    });

    await newUser.save();

    res.status(201).json({ msg: 'User created successfully', user: newUser });
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { createRestaurantOwnerController };
