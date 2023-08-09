import { Schema , model } from 'mongoose';

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, select: false },
    role: { type: String, enum: ['adm','usr'] }
});

export const User = model('User',UserSchema);