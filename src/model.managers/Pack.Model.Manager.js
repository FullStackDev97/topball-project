import Pack from "../models/Pack.Model.js";

export const findAllPacks =  async ()=>{
    try {
        const packs = await Pack.findAll();
        return packs;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const findPackById =  async (pack_id)=>{
    try {
        const the_Pack = await Pack.findByPk(pack_id);
        return the_Pack;
    } catch (error) {
        console.log(error);
        return error;
    }

};

export const createPack = async (newPack)=>{
    try {
        await Pack.create(newPack); 
        console.log("produit crée dans la bdd");
    } catch (error) {
        console.log("impossible de créé la produit");
        return error;
    }
};

export const updatePack = async (pack_id,newInfos)=>{
    try {
        const updatedPack = await Pack.update(newInfos,{where:{pack_id:pack_id}});
        return updatedPack;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const deletePack = async (pack_id)=>{
    try {
        await Pack.destroy({where:{pack_id:pack_id}});
        console.log("produit supprimer avec success");
        return "produit supprimer avec success";
    } catch (error) {
        console.log("impossible de supprimer le produit");
        return error;
       
    }
};