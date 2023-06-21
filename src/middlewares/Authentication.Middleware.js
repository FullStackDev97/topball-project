import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;

export const checkToken = (req,res,next)=>{
    const authHeader =  req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    
    if(token == null) return res.sendStatus(401);

    try {
        jwt.verify(token,process.env.SECRET_KEY);
        console.log('auth success');
        next();
    } catch (error) {
        console.log('auth failed : '+error);
        throw error;
    }
    
}