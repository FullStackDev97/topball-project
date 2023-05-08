import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection";

const Adress = connection.define('adresse',{
    id_Adresse:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    cp:{
        type:DataTypes.STRING,
        allowNull:false
    },
    ville:{
        type:DataTypes.STRING,
        allowNull:false
    },
    voie:{
        type:DataTypes.STRING,
        allowNull:false
    },
    numero:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    departement:{
        type:DataTypes.STRING,
        allowNull:true
    },
    region:{
        type:DataTypes.STRING,
        allowNull:true
    }
});


export default Adress;