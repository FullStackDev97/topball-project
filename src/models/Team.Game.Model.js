import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Team_Game = connection.define('Team_Game',{
    id_Team:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    id_Team:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    }
});

export default Team_Game;