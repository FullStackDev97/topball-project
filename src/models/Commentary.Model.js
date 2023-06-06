import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Commentary = connection.define('Comment',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    },
    date_published:{
        type:DataTypes.DATE,
        allowNull:false
    },
    id_Article:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    id_User:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

export default Commentary;