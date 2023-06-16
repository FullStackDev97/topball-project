import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Commentary = connection.define('commentary',{
    commentary_id:{
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
    article_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

export default Commentary;