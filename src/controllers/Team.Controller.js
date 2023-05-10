import * as TeamRepo from "../repositories/Team.Repository.js";
import * as CharacterRepo from "../repositories/Character.Repository.js"


export const getAllChararactersByTeamId = async (req,res)=>{
    try {
        const allPlayersInTeam = await TeamRepo.findAllCharactersByTeam(1);

        const characterIdList = allPlayersInTeam.map(c =>c.id_Personnage);

        const promises = [];

        for (let i = 0; i < characterIdList.length; i++) {
            promises.push(await CharacterRepo.findCharacterById(characterIdList[i]));
        }

        const characterList = await Promise.all([...promises]);
        console.log(characterList);

        res.send(characterList);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
    
};

export const getAllTeams = async (req,res)=>{
    try {
        teams = await TeamRepo.findAllTeams();
        res.send(teams);
    } catch (error) {
        res.send(error);
    }
};

