import { User } from "../models";
import { checkPassword, hashPassword } from "../services/auth/passwords";
import { createToken } from "../services/auth/token";
import { crudHandler } from "../services/mongo/handler";

export const signup = async (req,res,next) => {
    try {
        let { username, password, role } = req.body;
        password = await hashPassword(password);
        const user = await crudHandler(User).create({username,password,role});
        const token = createToken(user);
        return res.status(200).send({success: true, token , user })
    } catch (error) {
        next(error);
    }
}

export const signIn = async (req,res,next) => {
    try {
        let data = await User.findOne({username:req.body.username}).select('password');
        if(!data) return res.status(401).send({success:false,message:'Usuario y/o contraseña, inválidos'});
        
        let isValidPassword = await checkPassword(req.body.password,data.password);
        if(!isValidPassword) return res.status(401).send({success:false,message:'Usuario y/o contraseña, inválidos'});

        const user = await crudHandler(User).findById(data._id);
        const token = createToken(user);

        return res.status(200).send({success: true, token , user});
    } catch (error) {
        next(error);    
    }
}