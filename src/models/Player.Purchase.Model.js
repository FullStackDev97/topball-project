import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Player_Purchase = connection.define('Player_Purchase',{
    id_Player:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    id_Purchase:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    quantity:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
});

export default Player_Purchase;