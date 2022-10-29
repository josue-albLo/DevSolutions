
import {config} from 'dotenv'

config();



//Configuracion de puerto 
export default{
    port_server: Number(process.env.PORT_SERVER) || 4000,
    port_database: Number(process.env.PORT_DATABASE),
    server: String(process.env.SERVER),
    database: String(process.env.DATABASE),
    user:String(process.env.USER),
    password: String(process.env.PASSWORD)

}
