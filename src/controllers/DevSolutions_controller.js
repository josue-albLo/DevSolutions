
import database from '../database/index.js'

//Rendiriza a index
export const getLogIn = (req,res)=>{
    res.render('index',{
        msgError:''
    });
};

//Datos solo hechos para prueva p.DPI ='1032646012364' AND p.FechaNacimiento = '2000-03-05';`;

//rendiriza a home | index
export const login = async (req,res)=>{
    const dpi = req.body.user;
    const bth = req.body.password;
    try{
        const pool = await database.connection;
        const resultLg = await pool.request().query(database.query.parmsLogin(dpi,bth));
        console.log(resultLg);
        if(resultLg){
            const id = resultLg.recordset[0].IdPersona;
            const resultData = await pool.request().query(database.query.dataUser(id));
            pool.close();
            console.log(resultData.recordset);
            const birtd = `${resultData.recordset[0].birthday}`;
            const subBirthday = birtd.substring(4,15);
            console.log(birtd);
            console.log(subBirthday);
            res.render('home',{
                name:resultData.recordset[0].name,
                dpi:resultData.recordset[0].dpi,
                birthday:subBirthday,
                address:resultData.recordset[0].address,
                mpio:resultData.recordset[0].mpio,
                depto:resultData.recordset[0].dpto,
                place_votation:resultData.recordset[0].nombreLugar,
                book:resultData.recordset[0].libro,
                table:resultData.recordset[0].mesa,
                line:resultData.recordset[0].linea,
                page:resultData.recordset[0].hoja,
                nDpto:resultData.recordset[0].mpioVotacion
    
    
            });
        }else{
            res.render('index',{
                msgError:'No se encuentra en el padron electoral'
            });
        }
        
    }catch(error){
        console.error(error);
        res.render('index',{
            msgError:'No se encuentra en el padron electoral'
        });
    }
    
    
}
export default {
    login,
    getLogIn
    
}

