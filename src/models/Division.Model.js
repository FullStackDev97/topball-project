import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Division = connection.define('division',{
    id_Division:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true 
    },
    nom:{
        type:DataTypes.STRING,
        allowNull:false
    },
    point_titre:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    point_promotion:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    point_relegation:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    recompense:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

export default Division;