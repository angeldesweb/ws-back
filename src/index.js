import { http } from './http';
import {} from 'dotenv/config';
import './services/mongo'

const port = process.env.PORT;

http.listen(port);
http.on('listening', () => console.log(`Server running at port: ${port}`));
http.on('error', error => console.log(`Server failed with error: ${error}`));