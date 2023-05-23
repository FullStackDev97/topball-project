import express from 'express';
import * as userController from '../controllers/User.Controller.js'



const userRouter = express.Router();

userRouter.get('/',async (req,res)=>{
    const users = await userController.getAllUsers(req,res);
});

userRouter.get('/teams',async (req,res)=>{
    const users = await userController.getUserTeams(req,res);
});

userRouter.get('/orders',async (req,res)=>{
    const users = await userController.getUserOrders(req,res);
});

userRouter.get('/games',async (req,res)=>{
    const users = await userController.getUserGames(req,res);
});

userRouter.post('/create',async (req,res)=>{
    const user = await userController.newUser(req,res);
});

userRouter.post('/update',async (req,res)=>{
    const user = await userController.updateUser(req,res);
});

userRouter.post('/delete',async (req,res)=>{
    const user = await userController.deleteUser(req,res);
});

export default userRouter;
