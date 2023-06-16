import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Pack_Purchase = connection.define('pack_purchase',{
    pack_product_ref:{
        type:DataTypes.STRING,
        primaryKey:true,
        allowNull:false
    },
    purchase_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    quantity:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
});

export default Pack_Purchase;