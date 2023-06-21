import Utilisateur from "../models/User.Model.js";



export const findAllUsers= async ()=>{
    try {
        const the_users = await Utilisateur.findAll();
        console.log('les utilisateurs trouvés dans la Bdd');
        return the_users;
    } catch (error) {
        console.log("echec ! impossible de d'afficher les utilisateurs")
        console.log('#########################################')
        console.log(error);
    }
    
}

export const createUser = async (user)=>{
    const {user_name,last_name,first_name,role,date_birth,email,password} = user;
    try {
        const user = await Utilisateur.create({last_name:last_name,first_name:first_name,user_name:user_name,email:email,password:password,date_birth:date_birth,role:role});
        console.log('utilisateur créé dans la Bdd')
        return user;
    } catch (error) {
        
        console.log("echec ! impossible de créé l'utilisateur")
        console.log('#########################################')
        console.log(error);
        return false
    }
    
}

export const findUserById = async (u_id)=>{
    try {
        const the_user = await Utilisateur.findByPk(u_id);
        console.log('utilisateur trouvé dans la Bdd');
        //console.log(the_user);
        return the_user;
    } catch (error) {
        console.log("echec ! impossible de trouvé l'utilisateur")
        console.log('#########################################')
        console.log(error);
    }
    
}

export const findUserByEmail = async (email)=>{
    try {
        const the_user = await Utilisateur.findOne({ where: { email: email } });
        //console.log('utilisateur trouvé dans la Bdd');
        //console.log(the_user);
        if (the_user != null) {
            return {user:the_user,exists:true};
        }
        return {user:the_user,exists:false};
    } catch (error) {
        console.log("echec ! impossible de trouvé l'utilisateur")
        console.log('#########################################')
        console.log(error);
        return {user:the_user,exists:false};
    }
    
}

export const findUserByUserName = async (user_name)=>{
    try {
        const the_user = await Utilisateur.findOne({ where: { user_name: user_name } });
        //console.log('utilisateur trouvé dans la Bdd');
        if (the_user != null) {
            return {user:the_user,exists:true};
        }
        return {user:the_user,exists:false};
    } catch (error) {
        console.log("echec ! impossible de trouvé l'utilisateur")
        console.log('#########################################')
        console.log(error);
        return {user:the_user,exists:false};
    }
    
}


export const updateUserById = async (u_id,data)=>{
    try {
        const the_user = await Utilisateur.update(data,{where:{user_id:u_id}});
        console.log('utilisateur trouvé dans la Bdd');
        console.log(the_user);
        //return user;
    } catch (error) {
        console.log("echec ! impossible de mettre à jour l'utilisateur")
        console.log('#########################################')
        console.log(error);
    }
    
}

export const deleteUserById = async (u_id)=>{
    try {
        const the_user = await Utilisateur.update({where:{user_id:u_id}});
        console.log('utilisateur supprimé dans la Bdd');
        console.log(the_user);
        //return user;
    } catch (error) {
        console.log("echec ! impossible de supprimer l'utilisateur")
        console.log('#########################################')
        console.log(error);
    }
    
}