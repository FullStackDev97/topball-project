import express from "express";
import * as dotenv from "dotenv";
import {connection} from "./src/models/database/connection.js"
import router from "./src/routes/User.Router.js";

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));



//const userRoutes = 


app.listen(process.env.PORT,()=>{
    console.log('server listening on port '+process.env.PORT);
    try {
        connection.authenticate();
        console.log('connection succeded');
        //findUser(2);
        
    } catch (error) {
        console.log('connection error');
        console.log(error);
    }
})

app.use('/user',router);