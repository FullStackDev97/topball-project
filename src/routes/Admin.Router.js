import express from 'express';
import * as userController from '../controllers/User.Controller.js'
import * as auth from '../controllers/Auth.Controller.js'
import bodyParser from 'body-parser';
import { validateLogin,validateSignUp } from '../middlewares/Validation.Middleware.js';
import { isAdmin } from '../middlewares/Authorization.Middleware.js';



const adminRouter = express.Router();

adminRouter.get('/',async (req,res)=>{
    const users = await userController.getAllUsers(req,res);
});

adminRouter.get('/find',async (req,res)=>{
    const users = await userController.getUserById(req,res);
});

adminRouter.post('/update',async (req,res)=>{
    const user = await userController.updateUser(req,res);
});

adminRouter.post('/delete',async (req,res)=>{
    const user = await userController.deleteUser(req,res);
});

export default adminRouter;