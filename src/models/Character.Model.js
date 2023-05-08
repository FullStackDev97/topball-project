import { Sequelize, DataTypes } from 'sequelize';
import { connection } from './database/connection.js';

const Character = connection.define('personnage',{
    id_Personnage:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom:{
        type:DataTypes.STRING,
        allowNull:false
    },
    prenom:{
        type:DataTypes.STRING,
        allowNull:false
    },
    poste:{
        type:DataTypes.ENUM('PG', 'SG', 'SF', 'PF', 'C'),
        allowNull:false
    },
    qualite:{
        type:DataTypes.ENUM('bronze', 'argent', 'or', 'diamand', 'special'),
        allowNull:false
    },
    valeur:{
        type:DataTypes.DOUBLE,
        allowNull:false
    },
    photo:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

export default Character;