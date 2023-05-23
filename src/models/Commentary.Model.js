import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Commentary = connection.define('comentaire',{
    id_Commentaire:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    contenu:{
        type:DataTypes.STRING,
        allowNull:false
    },
    date_creation:{
        type:DataTypes.DATE,
        allowNull:false
    },
    id_Utilisateur:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    id_Article:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

export default Commentary;