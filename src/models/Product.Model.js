import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection";

const Product = connection.define('Produit',{
    id_Produit:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nom:{
        type:DataTypes.STRING,
        allowNull:false
    },
    reference:{
        type:DataTypes.STRING,
        allowNull:false
    },
    prix:{
        type:DataTypes.DOUBLE,
        allowNull:false
    }
});