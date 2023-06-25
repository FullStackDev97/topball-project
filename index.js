import express from "express";
import * as dotenv from "dotenv";
//import {connection} from "./src/models/database/connection.js"
import userRouter from "./src/routes/User.Router.js";
import teamRouter from "./src/routes/Team.Router.js";
import playerRouter from "./src/routes/Player.Router.js";
import packRouter from "./src/routes/Pack.Routers.js"
import { isAdmin,isUser } from "./src/middlewares/Authorization.Middleware.js";

import cors from 'cors';
import { checkToken } from "./src/middlewares/Authentication.Middleware.js";
import adminRouter from "./src/routes/Admin.Router.js";

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));


app.use(
    cors({
        origin: "*",
    })
)



//app.use(checkToken);



app.listen(process.env.PORT,()=>{
    console.log('server listening on port '+process.env.PORT);
    try {
        //connection.authenticate();
        console.log('connection succeded');
        //findUser(2);
        
    } catch (error) {
        console.log('connection error');
        console.log(error);
    }
})

app.get('/',(req,res)=>{
    res.send('hello');
})

app.use('/user',userRouter);
app.use('/admin',isAdmin,adminRouter)

app.use('/team',teamRouter);

app.use('/player',playerRouter);

app.use('/pack',packRouter);