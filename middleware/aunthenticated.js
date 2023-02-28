'use strict'
var jwt = require('jwt-simple');
var moment = require('moment');
var secret = '6N84hVG2U';
    
//Creando TOKEN
exports.ensureAuth = function (req,res,next){
    if(!req.headers.authorization){
        return res.status(404).send({message:'la peticion no tiene la cabecera de notificaciones'});     
    }
    var token = req.headers.authorization.replace(/['"]+/g,'');
    try{
        var payload = jwt.decode(token,secret);
        if(payload.exp <= moment().unix())
        return res.status(401).send({message:'eL TOKEN ha expirado'});
    }catch(error){
        return res.status(404).send({message:'El token no es valido'})
    }
    req.user = payload;
    next();
}