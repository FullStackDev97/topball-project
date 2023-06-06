import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Division = connection.define('Division',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true 
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    reward:{
        type:DataTypes.ENUM('bronze','silver','gold','diamand','special'),
        allowNull:false
    },
    for_title:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    for_promotion:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    to_stay_up:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

export default Division;