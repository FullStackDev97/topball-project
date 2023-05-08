import { Sequelize,DataTypes } from "sequelize";
import { connection } from "./database/connection";

const Team_Character = connection.define('equipe_personnage',{
    id_Equipe:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    id_Personnage:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

export default Team_Character;