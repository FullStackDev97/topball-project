import Character  from "../models/Player.Model.js";

export const findAllCharacters =  async ()=>{
    try {
        const characters = await Character.findAll();
        return characters;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const findAllCharactersbyQuality =  async (qualiteWanted)=>{
    try {
        const characters = await Character.findAll({where:{qualite:qualiteWanted}});
        return characters;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const findAllCharactersbyPosition =  async (positionWanted)=>{
    try {
        const characters = await Character.findAll({where:{poste:positionWanted}});
        return characters;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const findCharacterById =  async (character_id)=>{
    try {
        const the_character = await Character.findByPk(character_id);
        return the_character;
    } catch (error) {
        console.log(error);
        return error;
    }

}

export const createCharacter = async (newCharacter)=>{
    try {
        await Character.create(newCharacter); 
        console.log("personnage crée dans la bdd");
    } catch (error) {
        console.log("impossible de créé le personnage");
        return error;
    }
}

export const modifyCharacter = async (character_id,newInfos)=>{
    try {
        const updatedCharacter = await Character.update(newInfos,{where:{id_Personnage:character_id}});
        return updatedCharacter;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteCharacter = async (character_id)=>{
    try {
        await Character.destroy({where:{id_Personnage:character_id}});
        console.log("utilisateur supprimer avec success");
        return "utilisateur supprimer avec success";
    } catch (error) {
        console.log("impossible de supprimer le personnage");
        return error;
       
    }
}