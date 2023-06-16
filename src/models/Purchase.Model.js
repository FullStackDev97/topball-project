import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Order = connection.define('purchase',{
    purchase_id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    date_Purchased:{
        type:DataTypes.DATE,
        allowNull:false
    },
    adress_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

});

export default Order;