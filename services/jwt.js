'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = '6N84hVG2U';
 
exports.createToken = function(user){
    var payload = { 
        user:user.usuario,
        password:user.password,
        role:user.rol,
        usuario:user.usuarioLogueado,
        idUsuario:user.IdUsuarioLog,
        idSocio: user.IdSocio,
        iat:moment().unix(),
        exp:moment().add(30,'days').unix
    };
    return jwt.encode(payload,secret);
} 