import * as CharacterRepo from "../model.managers/Player.Model.Manager.js"


export const getAllCharacters = async (req,res)=>{
    try {
        const allCharacters = await CharacterRepo.findAllCharacters();
        res.send(allCharacters);
    } catch (error) {
        res.send(error);
    }
};

export const getAllCharactersbyPosition = async (req,res)=>{
    try {
        const allCharacters = await CharacterRepo.findAllCharactersbyPosition(req.body.position);
        res.send(allCharacters);
    } catch (error) {
        res.send(error);
    }
};

export const getAllCharactersbyQuality = async (req,res)=>{
    try {
        const allCharacters = await CharacterRepo.findAllCharactersbyQuality(req.body.quality);
        res.send(allCharacters);
    } catch (error) {
        res.send(error);
    }
};

export const getCharacterById = async (req,res)=>{
    try {
        const allCharacters = await CharacterRepo.findCharacterById(req.body.character_id);
        res.send(allCharacters);
    } catch (error) {
        res.send(error);
    }
};

export const newCharacter = async (req,res)=>{
    try {
        const allCharacters = await CharacterRepo.createCharacter(req.body);
        res.send(allCharacters);
    } catch (error) {
        res.send(error);
    }
}

export const updateCharacter = async (req,res)=>{
    try {
        const updatedcharacter = await CharacterRepo.modifyCharacter(req.body.character_id,req.body);
        res.send(updatedcharacter);
    } catch (error) {
        res.send(error);
    }
}

export const dropCharacter = async (req,res)=>{
    try {
        const dropedcharacter = await CharacterRepo.deleteCharacter(req.body.character_id);
        res.send(dropedcharacter);
    } catch (error) {
        res.send(error);
    }
}