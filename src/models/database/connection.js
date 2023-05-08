import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

export const connection  = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PWD,{
    host:process.env.DB_HOST,
    dialect:'mysql',
    define: {
        freezeTableName: true,
        timestamps: false
      }
});

