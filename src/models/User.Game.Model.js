import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const User_Game = connection.define('utilisateur_rencontre',{
    id_Utilisateur:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    id_Rencontre:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    vainqueur:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

export default User_Game;