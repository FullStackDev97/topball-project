import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Pack = connection.define('pack',{
    pack_product_ref:{
        type:DataTypes.STRING,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    quality:{
        type:DataTypes.ENUM('bronze','silver','gold','diamond','special'),
        allowNull:false
    },
    price:{
        type:DataTypes.DOUBLE,
        allowNull:false
    }
});

export default Pack;