import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Adress = connection.define('adress',{
    adress_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    country:{
        type:DataTypes.STRING,
        allowNull:false
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false
    },
    postal_code:{
        type:DataTypes.STRING,
        allowNull:false
    },
    road:{
        type:DataTypes.STRING,
        allowNull:false
    },
    nb:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    
});


export default Adress;