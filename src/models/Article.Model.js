import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Article = connection.define('Article',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    titre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    subjet:{
        type:DataTypes.STRING,
        allowNull:false
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    date_published:{
        type:DataTypes.DATE,
        allowNull:false
    },
    id_User:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

export default Article;