import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Pack = connection.define('pack',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    quality:{
        type:DataTypes.ENUM('bronze','silver','gold','diamand','special'),
        allowNull:false
    },
    price:{
        type:DataTypes.DOUBLE,
        allowNull:false
    }
});