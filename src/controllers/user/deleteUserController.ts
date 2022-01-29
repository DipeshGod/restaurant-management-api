import { Request, Response } from 'express';
import { User } from '../../models/User';

const deleteUserController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    //extract usertoBeDeleted id form req param
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ msg: 'please provide valid id parameter' });
    }

    //get the restaurant objectId from the user
    const restroObjectId = req.user.restroObjectId;

    //check if user is already on the database
    const user = await User.findOneAndDelete({
      id: id,
      restaurant: restroObjectId,
    });

    //if no user
    if (!user) {
      return res.status(400).json({ msg: 'User doesnt exists' });
    }

    res.status(200).json({ msg: 'User deleted successfully' });
  } catch (err: any) {
    res.status(400).json({ err });
  }
};

export { deleteUserController };
