import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection";

const Order_Product = connection.define('commande_produit',{
    id_Commande:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    id_Produit:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    quantite:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

export default Order_Product;