import express from 'express';
import * as teamController from "../controllers/Team.Controller.js";

const teamRouter = express.Router();

teamRouter.get('/',async (req,res)=>{
    const perso_equipe = await teamController.getAllChararactersByTeamId(req,res);
});

export default teamRouter;