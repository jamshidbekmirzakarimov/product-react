import express from 'express';
import { checkLogin, createUser, getUsers } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get('/getall', getUsers)
userRouter.post('/register', createUser)
userRouter.post('/login', checkLogin)

export default userRouter;