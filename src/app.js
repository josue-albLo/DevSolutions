import express from "express"
import config from './config.js'
import paisRoute from './routes/DevSoluctions_routes.mjs'

const app = express();

/// settings para configurar el pueto 
app.set('port', config.port_server)
//mortor de plantllas
app.set('view engine','ejs');
app.set('views',__dirname,'/views');


// middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/source',express.static(__dirname+'/public'));

app.use(paisRoute);

export default app;