import * as CharacterController from "../controllers/Player.Controller.js"
import express from 'express';

const characterRouter = express.Router();


characterRouter.get('/',async (req,res)=>{
    console.log(req.headers);
    await CharacterController.getAllCharacters(req,res);
});

characterRouter.get('/',async (req,res)=>{
    await CharacterController.getCharacterById(req,res);
});

export default characterRouter;