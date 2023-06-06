import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Player_Team = connection.define('Player_Team',{
    id_Player:{
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

export default Player_Team;