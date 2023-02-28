const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

var jwt = require('../services/jwt');
var jwtDecode = require('jwt-decode')

class MainController{
    async login(req,res){
        let params = req.body;
        let usuario = params.user;
        let password = params.pass;

        try {
            const request = await prisma.$queryRawUnsafe(`execute sp_login '${usuario}','${password}'`)
            if (request != []) {
                let mensaje2 = request[0].mensajeRespuesta;
                    if(mensaje2 == 'Se ha logeado exitosamente'){
                        let role = request[0].rol
                        let usuarioLogueado = request[0].UserLogueado
                        let idUsuario = request[0].IdUsuarioLog
                        let idSocio = request[0].IdSocio
                        var user = {
                            usuario : usuario,
                            password : password,
                            rol : role,
                            usuarioLogueado : usuarioLogueado,
                            IdUsuarioLog : idUsuario,
                            IdSocio : idSocio
                        }
                        var prueba = jwt.createToken(user)
                        return res.status(200).send({prueba,mensaje2,user})
                    }else{
                        return res.status(200).send({mensaje2})
                    }

            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
        
           
      
    }

    async navBarFather(req,res){
        var idRol = req.params.id;

        const result = await prisma.$queryRawUnsafe(`SELECT 
                            ms.IdMenuSistema
                            ,ms.Descripcion As DescripcionMenu
                            ,tis.IconoNombre 
                            FROM MenuPerfil mp 
                            INNER JOIN MenuSistema ms 
                                ON mp.IdMenuSistema = ms.IdMenuSistema 
                            INNER JOIN TIconoSistema tis
                                ON ms.IdIconoSistema = tis.IdIconoSistema
                                WHERE mp.IdRol = ${idRol}`)
        return res.status(200).send({result})
        
    }

    async navBarSon(req,res){
        var idRol = req.params.id;
        const result = await prisma.$queryRawUnsafe(`SELECT ms.IdMenuSistema
        ,ms.Descripcion As DescripcionSubMenu 
        ,ms.Url As Url
        FROM MenuSistema ms WHERE IdMenuPadre = ${idRol}`)
        return res.status(200).send({result})
    }
}

const controller= new MainController();
module.exports = controller;