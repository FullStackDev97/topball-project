import Game from "../models/Game.Model.js";
//import Team_Game from "../models/Team.Game.Model.js";
import {Op} from "sequelize";


export const findAllGames =  async ()=>{
    try {
        const all_games = await Game.findAll();
        return all_games;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const findAllGamesbyUserId =  async (user_id)=>{
    try {
        const team_games = await Game.findAll({where:{[Op.or]: [{winner:user_id},{loser:user_id}]}});
        return team_games;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const findAllGamesWonbyUserId =  async (user_id)=>{
    try {
        const team_games = await Game.findAll({where:{winner:user_id}});
        return team_games;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const findAllGamesLostbyUserId =  async (user_id)=>{
    try {
        const team_games = await Game.findAll({where:{loser:user_id}});
        return team_games;
    } catch (error) {
        console.log(error);
        return error;
    }
};



export const findGameById =  async (game_id)=>{
    try {
        const the_Game = await Game.findByPk(game_id);
        return the_Game;
    } catch (error) {
        console.log(error);
        return error;
    }

}

export const createGame = async (newGame,usersGame)=>{
    try {
        const p1 = Game.create(newGame); 
        const p2 = User_Game.create(usersGame);
        await Promise.all([p1,p2]);
        console.log("partie crée dans la bdd");
    } catch (error) {
        console.log("impossible de créé la partie");
        return error;
    }
}

// export const updateAdress = async (adress_id,newInfos)=>{
//     try {
//         const updatedAdress = await Adress.update(newInfos,{where:{id_Adresses:adress_id}});
//         return updatedAdress;
//     } catch (error) {
//         console.log(error);
//         return error;
//     }
// }

export const deleteGame = async (game_id)=>{
    try {
        await Game.destroy({where:{id_Rencontre:game_id}});
        console.log("adresse supprimer avec success");
        return "adresse supprimer avec success";
    } catch (error) {
        console.log("impossible de supprimer la Commande");
        return error;
       
    }
}