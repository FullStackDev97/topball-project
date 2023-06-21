import express from 'express';
import * as userController from '../controllers/User.Controller.js'
import * as auth from '../controllers/Auth.Controller.js'
import bodyParser from 'body-parser';



const userRouter = express.Router();

userRouter.get('/',async (req,res)=>{
    const users = await userController.getAllUsers(req,res);
});

userRouter.post('/login',bodyParser.json(),async (req,res)=>{
    //console.log(req.body);
    const users = await auth.login(req,res);
});

userRouter.get('/find',async (req,res)=>{
    const users = await userController.getUserById(req,res);
});

userRouter.get('/teams',bodyParser.json(),async (req,res)=>{
    console.log(req.body.user_id);
    //const users = await userController.getUserTeams(req,res);
});

userRouter.get('/orders',async (req,res)=>{
    const users = await userController.getUserOrders(req,res);
});

userRouter.get('/games',async (req,res)=>{
    const users = await userController.getUserGames(req,res);
});

userRouter.get('/games/won',async (req,res)=>{
    const users = await userController.getUserGamesWon(req,res);
});

userRouter.get('/games/lost',async (req,res)=>{
    const users = await userController.getUserGamesLost(req,res);
});

userRouter.post('/signup',bodyParser.json(),async (req,res)=>{
    const user = await auth.signup(req,res);
});

userRouter.post('/update',async (req,res)=>{
    const user = await userController.updateUser(req,res);
});

userRouter.post('/delete',async (req,res)=>{
    const user = await userController.deleteUser(req,res);
});

export default userRouter;
