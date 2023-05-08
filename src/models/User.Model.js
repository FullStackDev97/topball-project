import { Sequelize, DataTypes } from 'sequelize';
import { connection } from './database/connection.js';
import Order from './Order.Model.js';
import Team from './Team.Model.js';

const Utilisateur = connection.define('utilisateur',{
    id_Utilisateur : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
      },
    prenom: {
        type:DataTypes.STRING,
        allowNull: false
    },
    email: {
        type:DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    date_de_Naissance: {
        type:DataTypes.DATE,
        allowNull: false
    }
    ,
    pseudo: {
        type:DataTypes.STRING,
        allowNull: true,
        unique:true
    },
    u_role: {
        type:DataTypes.ENUM('admin','joueur'),
        allowNull: false
    },
    photo: {
        type:DataTypes.STRING,
        allowNull: true
    },
    mdp: {
        type:DataTypes.TEXT,
        allowNull: true
    },
    id_division: {
        type:DataTypes.INTEGER,
        allowNull: false
    }
});

Utilisateur.hasMany(Order);
Utilisateur.hasMany(Team);

export default Utilisateur;