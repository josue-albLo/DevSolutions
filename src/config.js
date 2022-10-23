import {config} from 'dotenv'
import path from 'path'
config();

const pathStt = path.resolve(__dirname,'public');
const pathWiews = path.resolve(__dirname,'views');

//Configuracion de puerto 
export default{
    port_server: Number(process.env.PORT_SERVER) || 4000,
    port_database: Number(process.env.PORT_DATABASE),
    server: process.env.SERVER,
    database: process.env.DATABASE,
    user:process.env.USER,
    password: process.env.PASSWORD,
    pathStatic:  pathStt,
    pathWiews

}
