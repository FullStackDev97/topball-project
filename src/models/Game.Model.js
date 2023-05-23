import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Game = connection.define('rencontre',{
    id_Rencontre:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    score:{
        type:DataTypes.STRING,
        allowNull:false
    },
    id_Division:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

export default Game;