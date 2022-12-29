import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
        // await User.remove({}); => If I want to clean all users DB uncomment this code, rerun the app and comment again
        const createdUsers = await User.insertMany(data.users);
        res.send({ createdUsers });
    })
);

export default userRouter;