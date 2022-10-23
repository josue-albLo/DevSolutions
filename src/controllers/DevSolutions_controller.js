
import database from '../database'

//Rendiriza a index
export const getLogIn = (req,res)=>{
    res.render('./views/index',{
        msgError:''
    });
};

const consulta1 = async ()=>{
    const pool = await database.connection;
    const result = await pool.request().query(database.query.dataUser);
    console.log(result.recordset);
}

//Datos solo hechos para prueva p.DPI ='1032646012364' AND p.FechaNacimiento = '2000-03-05';`;

//rendiriza a home | index
export const login = async (req,res)=>{
    const dpi = req.body.user;
    const bth = req.body.password;
    console.log(bth)
    try{
        const pool = await database.connection;
        const resultLg = await pool.request().query(database.query.parmsLogin(dpi,bth));
        if(resultLg){
            const id = resultLg.recordset[0].IdPersona;
            const resultData = await pool.request().query(database.query.dataUser(id));
            console.log(resultData.recordset);
            const birtd = `${resultData.recordset[0].birthday}`;
            const subBirthday = birtd.substring(4,15);
            console.log(birtd);
            console.log(subBirthday);
            res.render('./views/home',{
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
            res.render('./views/index',{
                msgError:'Datos no encontrados en base de datos'
            });
        }
        
    }catch(error){
        console.error(error);
        res.render('./views/index',{
            msgError:'Datos no encontrados en base de datos'
        });
    }
    
    
}

