import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Pack_Purchase = connection.define('Pack_Purchase',{
    id_Pack:{
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

export default Pack_Purchase;