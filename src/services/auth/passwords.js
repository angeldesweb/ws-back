import { genSalt , hash , compare } from 'bcryptjs';

export const hashPassword = async (password) => {
    console.log({password})
    const salt = await genSalt(10);
    return await hash(password,salt);
}

export const checkPassword = async (password,hash) => await compare(password,hash);