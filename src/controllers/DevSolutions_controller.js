
import database from '../database/index.js'
import mp from '../public/js/mapa.js'
let latitud;
let longitud;
//Rendiriza a index
export const getLogIn = (req,res)=>{
    res.render('index',{
        msgError:''
    });
};

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
            // pool.close();
            console.log(resultData.recordset);
            const birtd = `${resultData.recordset[0].birthday}`;
            const subBirthday = birtd.substring(4,15);
            latitud = resultData.recordset[0].latitud;
            longitud = resultData.recordset[0].longitud;
            console.log(birtd);
            console.log(subBirthday);

            res.render('home',{
                name:`${resultData.recordset[0].p_nombre} ${resultData.recordset[0].s_nombre} ${resultData.recordset[0].p_apellido} ${resultData.recordset[0].s_apellido}`,
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
    getLogIn,
}

