import express from 'express';
import * as userControl from '../controllers/User.Controller.js'



const router = express.Router();

router.get('/',async (req,res)=>{
    const users = await userControl.getAllUsers(req,res);
});

router.post('/create',async (req,res)=>{
    const user = await userControl.newUser(req,res);
});

router.post('/update',async (req,res)=>{
    const user = await userControl.updateUser(req,res);
});

router.post('/delete',async (req,res)=>{
    const user = await userControl.deleteUser(req,res);
});

export default router;
