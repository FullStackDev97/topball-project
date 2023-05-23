import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const User_Adress = connection.define('utilisateur_adresse',{
    id_Utilisateur:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    id_Adresses:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

export default User_Adress;