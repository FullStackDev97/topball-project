import * as TeamRepo from "../model.managers/Team.Model.Manager.js";
import * as CharacterRepo from "../model.managers/Player.Model.Manager.js"


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

export const findTeamById = async (req,res)=>{
    try {
        team = await TeamRepo.findAllTeams(req.body.team_id);
        res.send(team);
    } catch (error) {
        res.send(error);
    }
};

export const createTeam = async (req,res)=>{
    try {
        await TeamRepo.createTeam(req.body); 
        console.log("equipe crée dans la bdd");
    } catch (error) {
        console.log("impossible de créé le l'equipe");
        return error;
    }
}

export const editTeam = async (req,res)=>{
    try {
        const updatedTeam = await TeamRepo.updateTeam(req.body,req.body.team_id);
        return updatedTeam;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteTeam = async (req,res)=>{
    try {
        await Team.destroy(req.body.team_id);
        console.log("utilisateur supprimer avec success");
        return "utilisateur supprimer avec success";
    } catch (error) {
        console.log("impossible de supprimer le personnage");
        return error;
       
    }
}

