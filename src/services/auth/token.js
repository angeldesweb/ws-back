import { encode , decode } from 'jwt-simple';
import dayjs from 'dayjs';
import {} from 'dotenv/config';

const secret = process.env.SECRET;

export const createToken = (user) => {
    const payload = {
        iat: dayjs(),
        exp: dayjs().add(1,'hour'),
        sub: user._id,
        role: user.role
    }

    return encode(payload,secret);
}

export const decodeToken = (token) => decode(token,secret);