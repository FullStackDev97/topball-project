import * as PlayerRepo from "../model.managers/Player.Model.Manager.js"


export const getAllCharacters = async (req,res)=>{
    try {
        const allCharacters = await PlayerRepo.findAllCharacters();
        res.send(allCharacters);
    } catch (error) {
        res.send(error);
    }
};

export const getAllCharactersbyPosition = async (req,res)=>{
    try {
        const allCharacters = await PlayerRepo.findAllCharactersbyPosition(req.body.position);
        res.send(allCharacters);
    } catch (error) {
        res.send(error);
    }
};

export const getAllCharactersbyQuality = async (req,res)=>{
    try {
        const allCharacters = await PlayerRepo.findAllCharactersbyQuality(req.body.quality);
        res.send(allCharacters);
    } catch (error) {
        res.send(error);
    }
};

export const getCharacterById = async (req,res)=>{
    try {
        const allCharacters = await PlayerRepo.findCharacterById(req.body.character_id);
        res.send(allCharacters);
    } catch (error) {
        res.send(error);
    }
};

export const newCharacter = async (req,res)=>{
    try {
        const allCharacters = await PlayerRepo.createCharacter(req.body);
        res.send(allCharacters);
    } catch (error) {
        res.send(error);
    }
}

export const updateCharacter = async (req,res)=>{
    try {
        const updatedcharacter = await PlayerRepo.modifyCharacter(req.body.character_id,req.body);
        res.send(updatedcharacter);
    } catch (error) {
        res.send(error);
    }
}

export const dropCharacter = async (req,res)=>{
    try {
        const dropedcharacter = await PlayerRepo.deleteCharacter(req.body.character_id);
        res.send(dropedcharacter);
    } catch (error) {
        res.send(error);
    }
}