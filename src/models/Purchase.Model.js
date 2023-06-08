import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Order = connection.define('Purchase',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    date_Purchased:{
        type:DataTypes.DATE,
        allowNull:false
    },
    id_Adress:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    id_User:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

});

export default Order;