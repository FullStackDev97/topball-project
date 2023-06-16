import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Player_Purchase = connection.define('player_purchase',{
    player_purchase_ref:{
        type:DataTypes.STRING,
        primaryKey:true,
        allowNull:false
    },
    purchase_id:{
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