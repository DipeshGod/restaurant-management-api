import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../../models/User';

const encryptPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

const createUserController = async (req: Request, res: Response) => {
  try {
    if (!req.body.name || !req.body.password || !req.body.role) {
      return res.status(400).json({
        msg: 'Please provide valid name, password and role',
      });
    }
    const user = await User.findOne({ name: req.body.name });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const encryptedPassword = await encryptPassword(req.body.password);
    const newUser = new User({
      name: req.body.name,
      password: encryptedPassword,
      role: req.body.role,
    });

    await newUser.save();

    res.json({ msg: 'User created successfully', user: newUser });
  } catch (err) {
    console.log('Error in createUserController: ', err);
  }
};

export { createUserController };
