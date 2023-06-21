import { Sequelize, DataTypes } from 'sequelize';
import { connection } from './database/connection.js';
import Order from './Purchase.Model.js';
import Team from './Team.Model.js';

const Utilisateur = connection.define('_user',{
    user_id : {
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
        type:DataTypes.TEXT,
        allowNull: true
    },
    date_birth: {
        type:DataTypes.DATE,
        allowNull: false
    },
    profil_pic: {
        type:DataTypes.DATE,
        allowNull: true
    },
    role: {
        type:DataTypes.ENUM('admin','baller'),
        allowNull: false
    },
    division_id: {
        type:DataTypes.INTEGER,
        allowNull: true
    },
    adress_id: {
        type:DataTypes.INTEGER,
        allowNull: true
    }
});

Utilisateur.hasMany(Order);
Utilisateur.hasMany(Team);

export default Utilisateur;