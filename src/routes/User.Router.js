import express from 'express';
import * as userController from '../controllers/User.Controller.js'
import * as teamController from '../controllers/Team.Controller.js'
import * as auth from '../controllers/Auth.Controller.js'

import bodyParser from 'body-parser';
import { validateLogin, validateSignUp } from '../middlewares/Validation.Middleware.js';
import { isUser } from '../middlewares/Authorization.Middleware.js';



const userRouter = express.Router();


userRouter.post('/login', bodyParser.json(), validateLogin, async (req, res) => {
    const users = await auth.login(req, res);
});

userRouter.get('/teams', bodyParser.json(), async (req, res) => {
    const users = await userController.getUserTeams(req, res);
});

userRouter.post('/team/create', bodyParser.json(), async (req, res) => {
    const team = await teamController.createTeam(req, res);
});

userRouter.get('/orders', async (req, res) => {
    const users = await userController.getUserOrders(req, res);
});

userRouter.get('/games', async (req, res) => {
    const users = await userController.getUserGames(req, res);
});

userRouter.get('/games/won', async (req, res) => {
    const users = await userController.getUserGamesWon(req, res);
});

userRouter.get('/games/lost', async (req, res) => {
    const users = await userController.getUserGamesLost(req, res);
});

userRouter.post('/signup', bodyParser.json(), validateSignUp, async (req, res) => {
    const user = await auth.signup(req, res);
});



export default userRouter;
