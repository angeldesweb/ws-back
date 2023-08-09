import { set , connect } from 'mongoose';
import {} from 'dotenv/config';

set('strictQuery', false);

const db = process.env.DB_URI;

connect(db)
.then(() => console.log('Database connected'))
.catch(error => console.log(`Database connection failed with error: ${error}`))
