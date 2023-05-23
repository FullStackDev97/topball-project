import Adress from "../models/Adress.Model.js";
import User_Adress from "../models/User.Adress.Model.js";

export const findAllAdressses =  async ()=>{
    try {
        const all_adresses = await Adress.findAll();
        return all_adresses;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const findAllAdressbyUserId =  async (user_id)=>{
    try {
        const user_adresses = await User_Adress.findAll({where:{id_Utilisateur:user_id}});
        return user_adresses;
    } catch (error) {
        console.log(error);
        return error;
    }
};



export const findAdressById =  async (adress_id)=>{
    try {
        const the_Adress = await Adress.findByPk(adress_id);
        return the_Adress;
    } catch (error) {
        console.log(error);
        return error;
    }

}

export const createAdress = async (newAdress)=>{
    try {
        await Adress.create(newAdress); 
        console.log("adresse crée dans la bdd");
    } catch (error) {
        console.log("impossible de créé l'adresse");
        return error;
    }
}

export const updateAdress = async (adress_id,newInfos)=>{
    try {
        const updatedAdress = await Adress.update(newInfos,{where:{id_Adresses:adress_id}});
        return updatedAdress;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteAdress = async (adress_id)=>{
    try {
        await Adress.destroy({where:{id_Adresses:adress_id}});
        console.log("adresse supprimer avec success");
        return "adresse supprimer avec success";
    } catch (error) {
        console.log("impossible de supprimer la Commande");
        return error;
       
    }
}