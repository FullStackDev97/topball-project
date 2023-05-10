import { Sequelize, DataTypes } from 'sequelize';
import { connection } from './database/connection.js';

const Team = connection.define('equipe',{
    id_Equipe:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom:{
        type:DataTypes.STRING,
        allowNull:false
    },
    id_Utilisateur:{ 
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

export default Team;