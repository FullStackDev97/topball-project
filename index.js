import express from "express";
import * as dotenv from "dotenv";
//import {connection} from "./src/models/database/connection.js"
import userRouter from "./src/routes/User.Router.js";
import teamRouter from "./src/routes/Team.Router.js";
import characterRouter from "./src/routes/Character.Router.js";

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));



//const userRoutes = 


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

app.use('/team',teamRouter);

app.use('/character',characterRouter);