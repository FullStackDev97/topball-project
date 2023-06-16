import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Division = connection.define('division',{
    division_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true 
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    reward:{
        type:DataTypes.ENUM('bronze','silver','gold','diamond','special'),
        allowNull:false
    },
    points_tittle:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    points_promo:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    points_stay_up:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

export default Division;