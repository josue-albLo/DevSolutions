import express from "express"
import config from './config.js'
import {dirname,join} from 'path'
import {fileURLToPath} from 'url'
import routApp from './routes/DevSoluctions_routes.js'

const app = express();

/// settings para configurar el pueto 
app.set('port', config.port_server)

//mortor de plantllas
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set('view engine','ejs');
app.set('views',join(__dirname,'views'));



// middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/source',express.static(join(__dirname,'public')));

app.use(routApp);

export default app;