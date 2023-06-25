import Joi from 'joi';

export const validateLogin = (req,res,next)=>{
    const loginSchema = Joi.object({

        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','co','fr','free','de'] } }),
    
        password: Joi.string().min(8)
            
    })

    const isValid = loginSchema.validateAsync(req.body);
    if (isValid) {
        next()
    }else{
        res.send("data no valid")
    }
}

export const validateSignUp = (req,res,next)=>{
    const signUpSchema = Joi.object({


        email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','co','fr','free',] } }),

        user_name: Joi.string().required(),

        last_name: Joi.string().required(),

        first_name: Joi.string().required(),

        date_birth: Joi.date().required(),

        password: Joi.string().min(8).required()
            
      
    })

    const isValid = signUpSchema.validateAsync(req.body);
    if (isValid) {
        next()
    }else{
        res.send("data no valid")
    }
}