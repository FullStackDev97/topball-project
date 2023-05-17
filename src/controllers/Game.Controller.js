import * as GameRepo from '../repositories/Game.Repository.js'


export const getAllGames = async (req,res)=>{
    try {
        const allGames = await GameRepo.findAllGames();
        res.send(allGames);
    } catch (error) {
        res.send(error);
    }
}

export const getAllGamesByUser = async (req,res)=>{
    try {
        const allGamesFromUser = await GameRepo.findAllGamesbyUserId(req.body.user_id);
        res.send(allGamesFromUser);
    } catch (error) {
        res.send(error);
    }
}

export const getGameById = async (req,res)=>{
    try {
        const the_Game = await GameRepo.findGameById(req.body.game_id);
        res.send(the_Game);
    } catch (error) {
        res.send(error);
    }
}

export const dropGame = async (req,res)=>{
    try {
        const the_Game = await GameRepo.deleteGame(req.body.game_id);
        res.send(the_Game);
    } catch (error) {
        res.send(error);
    }
}