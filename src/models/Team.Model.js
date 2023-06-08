import { Sequelize, DataTypes } from 'sequelize';
import { connection } from './database/connection.js';

const Team = connection.define('Team',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    country:{
        type:DataTypes.STRING,
        allowNull:false
    },
    id_User:{ 
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

export default Team;