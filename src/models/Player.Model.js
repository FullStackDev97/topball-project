import { Sequelize, DataTypes } from 'sequelize';
import { connection } from './database/connection.js';

const Player = connection.define('player',{
    player_product_ref:{
        type:DataTypes.STRING,
        primaryKey: true,
        allowNull:false
    },
    first_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    _position:{
        type:DataTypes.ENUM('PG', 'SG', 'SF', 'PF', 'C'),
        allowNull:false
    },
    quality:{
        type:DataTypes.ENUM('bronze','silver','gold','diamond','special'),
        allowNull:false
    },
    photo:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    price:{
        type:DataTypes.DOUBLE,
        allowNull:false
    }
});

export default Player;