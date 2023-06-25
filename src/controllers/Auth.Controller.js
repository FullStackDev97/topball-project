import * as  UserManager from '../model.managers/User.Model.Manager.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;



export const login = async (req,res)=>{
    
    const { email, password } = req.body;
    
    try {
        const user =  await UserManager.findUserByEmail(email);
        if (user.user != null) {
            const result = await bcrypt.compare(password,user.user.password);
            
            if (result) {
                const {user_id,email,user_name,role,adress_id,division_id,profil_pic} = user.user;
                const token = sign({ headers:{email: user.user.email,user_name: user.user.user_name, role:user.user.role },data: [
                    {
                        u_id: user_id,
                    },
                ],}, process.env.SECRET_KEY);
                res.header('Authorization',`Bearer ${token}`);
                
                
                res.status(200).json({status: 200,
                    logged: true,
                    token,
                    message: 'Sign in successfull',
                    user_id,
                    email,
                    user_name,
                    role,
                    adress_id,
                    division_id,
                    profil_pic});
            }else{
                res.send('echec mdp erroné')
            }
        }else{
            res.send("email ne correspond a aucun utilisateur créé un compte");
        }
    } catch (error) {
        console.log(error)
        res.send(error);
    }
}

export const signup = async (req,res)=>{
    const { last_name,
        first_name,
        user_name,
        email,
        date_birth } = req.body;
        const role = 'baller';

        
    
        const emailCheck =  await UserManager.findUserByEmail(email);
        const userNameCheck =  await UserManager.findUserByUserName(req.body.user_name);
        if (!emailCheck.exists  && !userNameCheck.exists) {

            const password =  await bcrypt.hash(req.body.password,10);

            
            const n_token = sign({ email: email,user_name: user_name }, process.env.SECRET_KEY);
            try {
                const user =await UserManager.createUser({last_name,
                    first_name,
                    user_name,
                    email,
                    password,
                    date_birth,
                    role});

                //console.log(user.user_id);    
                const user_id = user.user_id;
                res.status(200).json({status: 200,
                    logged: true,
                    n_token,
                    message: 'Sign up successfull',
                    user_id,
                    email,
                    user_name,
                    role});

            } catch (error) {
                console.log(error);
                res.status(400).json("error couldn't create")
            }
                
                
            
        }else{
            res.send("user existe deja")
        }
    
}