import dotenv from 'dotenv';
import  program  from '../../process.js';

const enviroment = program.opts().mode;
console.log("Modo Opt: ", program.opts().mode);

dotenv.config({
   path: enviroment === "production" ? "./src/config/.env.production" : "./src/config/.env.development"
})      

export default {
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL,
    // adminName: process.env.ADMIN_NAME,
    // adminPassword: process.env.ADMIN_PASSWORD
}