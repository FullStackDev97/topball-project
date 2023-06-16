import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Team_Game = connection.define('team_game',{
    game_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    team_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    }
});

export default Team_Game;