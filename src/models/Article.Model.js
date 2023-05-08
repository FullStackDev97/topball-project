import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection";

const Article = connection.define('article',{
    id_Article:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    titre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    sujet:{
        type:DataTypes.STRING,
        allowNull:false
    },
    contenu:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    date_publication:{
        type:DataTypes.DATE,
        allowNull:false
    },
    id_Utilisateur:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

export default Article;