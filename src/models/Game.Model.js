import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Game = connection.define('game',{
    game_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    winner:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    loser:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    winner_points:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    loser_points:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    id_Division:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

export default Game;