import * as CharacterRepo from "../repositories/Character.Repository.js"


export const getAllCharacters = async (req,res)=>{
    try {
        const allCharacters = await CharacterRepo.findAllCharacters();
        res.send(allCharacters);
    } catch (error) {
        res.send(error);
    }
};