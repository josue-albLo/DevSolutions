import {Router}from 'express';
import {login,getLogIn} from '../controllers/DevSolutions_controller.js'


console.log();
const router = Router();

//mi index
router.get('/index',getLogIn);

//post
router.post('/data',login);

export default router; 
