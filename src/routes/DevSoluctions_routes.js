import { render } from 'ejs';
import {Router}from 'express';
import {login,getLogIn} from '../controllers/DevSolutions_controller.js'


const router = Router();

//mi index
router.get('/',getLogIn);

//post
router.post('/data',login);

router.get('/mapa',(req,res)=>{
    res.render('mapa');
    
})
export default router; 
