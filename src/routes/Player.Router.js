import * as CharacterController from "../controllers/Character.Controller.js"
import express from 'express';

const characterRouter = express.Router();


characterRouter.get('/',async (req,res)=>{
    await CharacterController.getAllCharacters(req,res);
});

export default characterRouter;