import { Sequelize, DataTypes } from 'sequelize';
import { connection } from './database/connection.js';

const Player = connection.define('Player',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    position:{
        type:DataTypes.ENUM('PG', 'SG', 'SF', 'PF', 'C'),
        allowNull:false
    },
    quality:{
        type:DataTypes.ENUM('bronze','silver','gold','diamand','special'),
        allowNull:false
    },
    product_ref:{
        type:DataTypes.DOUBLE,
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