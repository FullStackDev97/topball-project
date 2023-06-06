import { Sequelize, DataTypes } from 'sequelize';
import { connection } from './database/connection.js';
import Order from './Purchase.Model.js';
import Team from './Team.Model.js';

const Utilisateur = connection.define('User',{
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    last_name: {
        type:DataTypes.STRING,
        allowNull: false
    },
    user_name: {
        type:DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    email: {
        type:DataTypes.STRING,
        allowNull: true,
        unique:true
    },
    password: {
        type:DataTypes.STRING,
        allowNull: true
    },
    birth_date: {
        type:DataTypes.DATE,
        allowNull: false
    },
    profil_pic: {
        type:DataTypes.DATE,
        allowNull: false
    },
    role: {
        type:DataTypes.ENUM('admin','joueur'),
        allowNull: false
    },
    id_Division: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    id_Adress: {
        type:DataTypes.INTEGER,
        allowNull: false
    }
});

Utilisateur.hasMany(Order);
Utilisateur.hasMany(Team);

export default Utilisateur;