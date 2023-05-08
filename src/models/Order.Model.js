import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Order = connection.define('commande',{
    id_Commande:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    date_confirmation:{
        type:DataTypes.DATE,
        allowNull:false
    },
    id_Adresses:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    id_Utilisateur:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

});

export default Order;