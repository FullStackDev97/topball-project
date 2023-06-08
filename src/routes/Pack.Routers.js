import * as PackController from "../controllers/Pack.Controller.js"
import express from 'express';

const packRouter = express.Router();


packRouter.get('/',async (req,res)=>{
    await PackController.getAllPacks(req,res);
});

packRouter.get('/find',async (req,res)=>{
    await PackController.getPack(req,res);
});

export default packRouter;