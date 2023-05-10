import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Team_Character = connection.define('equipe_personnage',{
    id_Equipe:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    id_Personnage:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    }
});

export default Team_Character;