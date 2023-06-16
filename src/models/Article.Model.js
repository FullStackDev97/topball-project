import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection.js";

const Article = connection.define('article',{
    article_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    subject:{
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
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

export default Article;