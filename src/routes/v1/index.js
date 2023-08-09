import { Router } from 'express';
import { signIn, signup } from '../../controllers/auth';

export const api = Router();

api.post('/signin',signIn);
api.post('/signup',signup);
