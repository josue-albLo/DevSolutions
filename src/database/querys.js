const dataUser =(id)=>{
    const cadena = `SELECT p.P_Nombre AS p_nombre,
    p.S_Nombre AS s_nombre,
    p.DPI AS dpi, 
    p.P_Apellido AS p_apellido,
    p.S_Apellido AS s_apellido,
    p.Direccion AS address,
    FechaNacimiento AS birthday,
    mpio.NombreMunicipio AS mpio,
    dto.NombreDepartamento AS dpto,
    pais.NombrePais AS country,
    emp.NoEmpadronamiento,
    lg.NombreLugar AS nombreLugar,
    lg.Latitud AS latitud,
    lg.Longitud AS longitud,
    lb.NoLibro AS libro,
    hj.IdHoja AS hoja,
    ms.NoMesa AS mesa,
    ln.NoLinea AS linea,
    mupi.NombreMunicipio As mpioVotacion,
    dpar.NombreDepartamento AS dparVotacion,
    ps.NombrePais AS paisVotacion
    
    FROM ProcesoElectoral.Persona AS p
    INNER JOIN ProcesoElectoral.Municipio AS mpio ON  mpio.IdMunicipio = p.IdMunicipio
    INNER JOIN ProcesoElectoral.Departamento AS dto ON dto.IdDepartamento = mpio.IdDepartamento
    INNER JOIN ProcesoElectoral.Pais as pais ON pais.IdPais = dto.IdPais
    INNER JOIN ProcesoElectoral.Empadronamiento AS emp ON emp.IdPersona = p.IdPersona
    
    INNER JOIN ProcesoElectoral.Votacion AS vt ON vt.IdPersona = p.IdPersona
    INNER JOIN ProcesoElectoral.Mesa AS ms ON ms.IdMesa = vt.IdMesa
    INNER JOIN ProcesoElectoral.Libro AS lb ON lb.IdLibro= ms.IdLibro
    INNER JOIN ProcesoElectoral.Hoja AS hj ON hj.IdHoja = lb.IdHoja
    INNER JOIN ProcesoElectoral.Linea AS ln ON ln.IdLinea = hj.IdLinea

    INNER JOIN ProcesoElectoral.Lugar AS lg On vt.IdLugar = lg.IdLugar
    INNER JOIN ProcesoElectoral.Municipio AS mupi ON mupi.IdMunicipio = lg.IdMunicipio
    INNER JOIN ProcesoElectoral.Departamento AS dpar ON dpar.IdDepartamento = mupi.IdDepartamento
    INNER JOIN ProcesoElectoral.Pais AS ps ON ps.IdPais = dpar.IdPais
    
    WHERE p.IdPersona = ${id};`;
    return cadena
} 
//WHERE p.DPI ='1032646012364' AND p.FechaNacimiento = '2000-03-05';`;
const parmsLogin =(dpi,bth)=>{
    const cadena = `SELECT p.IdPersona, p.DPI, p.FechaNacimiento FROM ProcesoElectoral.Persona AS p
    WHERE p.DPI = '${dpi}' AND p.FechaNacimiento = '${bth}';`;
    return cadena
}

export const query = {
    dataUser,
    parmsLogin
}
