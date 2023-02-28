const {GoogleSpreadsheet} = require('google-spreadsheet');
const credenciales = require('../json/GoogleSheets-07fbdf8a7b11.json');
var Request = require('request');
const schedule = require('node-schedule')
var elementosDB = 0;
let datos = []
let datosOrdenados = []
let googleId = '1tExojumn89M73PKhHpK_2P49zUyDi3_y5XTzZa56EAc';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

async function accederGoogleSheets() {
    const documento = new GoogleSpreadsheet(googleId);
            await documento.useServiceAccountAuth(credenciales);
            await documento.loadInfo();

            const sheet = documento.sheetsByIndex[0];
            const registros = await sheet.getRows();

            return registros;
}
async function AgregarDatosSheets() {
    let resultado = 0
    cont = 0
    let elemntosSheet = 0
    const documento = new GoogleSpreadsheet(googleId);
        //Consumir el servicio y enviar las credenciales
        await documento.useServiceAccountAuth(credenciales);
        //Leer la informacion del documento
        await documento.loadInfo();
        const sheet = documento.sheetsByIndex[0];
        const rows = await sheet.getRows();
        elemntosSheet = rows.length
        let day = dateFormat(new Date(),"dd/mm/yyyy");
        
        let cont3 = 0;
        for (let i = 0; i < elemntosSheet; i++) {
            if (rows[i].FechaHoraEntrega == day) {
                cont3 += 1
            }
        }

        if(elementosDB == 0){
            resultado = 0
        }else{
            resultado = elementosDB-cont3;
        }
        

        if (resultado < 0) {
            let day = dateFormat(new Date(),"dd/mm/yyyy");
            datos.sort((a, b) =>  a.IdPedido - b.IdPedido  )
            let r = rows.filter(
                (x) => x.FechaHoraEntrega == day
            );

            for (let i = 0; i < r.length; i++) {
                if (r[i].IdPedido == datos[i].IdPedido) {
                    console.log('todo es igual',);
                }
                else{ 
                    await r[i].delete();
                    break;
                }          
            }
        }
        else{
            if(resultado == 0){

                let day = dateFormat(new Date(),"dd/mm/yyyy");
                let IdPedido;

                datos.sort((a, b) =>  a.IdPedido - b.IdPedido  )
                IdPedido = rows.filter(
                    (x) => x.FechaHoraEntrega == day 
                );

                
                for (let i = 0; i < elementosDB; i++) {
                    IdPedido[i].MontoCobro = datos[i].MontoCobro;
                    IdPedido[i].Estado = datos[i].Estado;
                    IdPedido[i].DomiliciarRecepcion = datos[i].DomiciliarRecepcion;
                    IdPedido[i].DomiliciarEntrega = datos[i].DomiciliarEntrega;
                    IdPedido[i].DireccionEntrega = datos[i].DireccionEntrega;
                    await IdPedido[i].save();
                
                }
            }
            else{
                if(datos == []){
                    console.log('los datos estan vacios');
                }else{
                    datosOrdenados = []
                    for (let index = 0; index < resultado; index++) {
                        
                        datosOrdenados.push({
                            IdPedido:datos[index].IdPedido,
                            Socio:datos[index].Socio,
                            Correo:datos[index].Correo,
                            Correo_2: datos[index].Correo_2,
                            Correo_3: datos[index].Correo_3,
                            Cliente:datos[index].Cliente,
                            SolicitudCobro:datos[index].SolicitudCobro,
                            Moneda:datos[index].Moneda,
                            MontoCobro:datos[index].MontoCobro,
                            CobroDeProducto:datos[index].CobroDeProducto,
                            CobroDeMensajeria:datos[index].CobroDeMensajeria,
                            TipoPedido:datos[index].TipoPedido,
                            MunicipioRecepcion:datos[index].MunicipioRecepcion,
                            MunicipioEntrega:datos[index].MunicipioEntrega,
                            FechaHoraEntrega:datos[index].FechaHoraEntrega,
                            Estado:datos[index].Estado,
                            DomiliciarRecepcion:datos[index].DomiciliarRecepcion,
                            DomiliciarEntrega:datos[index].DomiciliarEntrega,
                            DireccionEntrega:datos[index].DireccionEntrega,
                            Observaciones: datos[index].Observaciones
                        })
                    }
                    datosOrdenados.sort((a, b) => a.IdPedido - b.IdPedido)                
                    for (let index = 0; index < datosOrdenados.length; index++) {
                        await sheet.addRow({
                            IdPedido:datosOrdenados[index].IdPedido,
                            Socio:datosOrdenados[index].Socio,
                            Correo:datosOrdenados[index].Correo,
                            Correo_2: datosOrdenados[index].Correo_2,
                            Correo_3: datosOrdenados[index].Correo_3,
                            Cliente:datosOrdenados[index].Cliente,
                            SolicitudCobro:datosOrdenados[index].SolicitudCobro,
                            Moneda:datosOrdenados[index].Moneda,
                            MontoCobro:datosOrdenados[index].MontoCobro,
                            CobroDeProducto:datosOrdenados[index].CobroDeProducto,
                            CobroDeMensajeria:datosOrdenados[index].CobroDeMensajeria,
                            TipoPedido:datosOrdenados[index].TipoPedido,
                            MunicipioRecepcion:datosOrdenados[index].MunicipioRecepcion,
                            MunicipioEntrega:datosOrdenados[index].MunicipioEntrega,
                            FechaHoraEntrega:datosOrdenados[index].FechaHoraEntrega,
                            Estado:datosOrdenados[index].Estado,
                            DomiliciarRecepcion:datosOrdenados[index].DomiliciarRecepcion,
                            DomiliciarEntrega:datosOrdenados[index].DomiliciarEntrega,
                            DireccionEntrega:datosOrdenados[index].DireccionEntrega,
                            Observaciones: datosOrdenados[index].Observaciones})
                    }

                }
            
            }
        }

}
const guardarDatos =  async (req,res)=>{
    //#region parametros
        let now = new Date();
        //Parametro para buscar la hoja de excel por ID
        const documento = new GoogleSpreadsheet(googleId);
        //Consumir el servicio y enviar las credenciales
        await documento.useServiceAccountAuth(credenciales);
        //Leer la informacion del documento
        await documento.loadInfo();
    //#endregion

    //#region obtener los datos de la hoja excel
        const sheet = documento.sheetsByIndex[0];
        const rows = await sheet.getRows();
        let datosEstado = [];
        let day = dateFormat(new Date(),"dd/mm/yyyy");

        if(rows.length == 0){
            console.log('No hay datos que setear');
        }else{
            rows.forEach(element => {   
                let fechaEntrega = element.FechaHoraEntrega.substr(0,10)
                if(fechaEntrega == day && (element.Estado == 'PROCESO FINALIZADO' || element.Estado == 'RECHAZADA/CANCELADA' || element.Estado == 'ENTREGADO')){
                    datosEstado.push({
                        IdPedido: element.IdPedido
                        ,Estado: element.Estado
                    })
                }
            });

            console.log(datosEstado);
            //#region obtener resultado proceso almacenado
        for (let index = 0; index < datosEstado.length; index++) {
            
            try {
                const request = await prisma.$queryRawUnsafe(`execute usp_crear_cambioEstadoSheet '${datosEstado[index].IdPedido}'
                '${datosEstado[index].Estado}'`)
                if (request != []) {
                    request.forEach(element => {
                        if(element.Estado == 'El pedido ya fue finalizado' || element.Estado == 'El pedido ya fue rechazado' || element.Estado == 'EL PEDIDO FUE RECHAZADO'
                        || element.Estado == 'El pedido ya fue entregado al cliente' || element.Estado == 'El pedido se encuentra en ruta'){
                        }
                        else{
                            console.log(element.IdPedido, element.Cliente, element.Telefono);
                            let mensaje = 'SERBACO: te informamos que el pedido ' + element.IdPedido + ' ya fue entregado a ' + element.Cliente
                            //#region envio de mensaje de texto
                            Request.post({
                                "headers" : {"content-type":"application/json"
                                ,"Authorization":'Basic YW5TbkRXeFgxWG9mOVlCQUxTdXVKYjJ6cUtLeWxrcjU6alRYQWFaYjBkRGJib1VUSw=='},
                                "authorization":
                                    {
                                        "Username" : 'anSnDWxX1Xof9YBALSuuJb2zqKKylkr5',
                                        "Password" :  'jTXAaZb0dDbboUTK'
                                    },
                                "url" : "https://prod.api.tigo.com/oauth/client_credential/accesstoken?grant_type=client_credentials",
                            }, (err,response,body) =>{
                                let bodyToken = JSON.parse(body)
                                let access_token = bodyToken.access_token
                        
                                Request.post({
                                    "headers": {
                                        "content-type": "application/json",
                                        "Authorization": " Bearer " + access_token,
                                        "APIKey": '0hGUTYjwfQcITApq613Nd4IsxpQDI5Ko',
                                        "APISecret": 'GdDqLBXfpuHS5a26NpFpuE843y5eN7mmu3pWhqHEOTfl77WJQWQPhCba'
                                    },
                                    "url": "https://prod.api.tigo.com/v1/tigo/b2b/gt/comcorp/messages/organizations/5d9f5f2cf6128200011fd161",
                                    "body": JSON.stringify({
                                        "protocol":"sms",
                                        "shortcodeId": 'RECAGUA',
                                        "shortcodeType": "pretty_code",
                                        "msisdn":'502'+element.Telefono,
                                        "priority": 0,
                                        "body":mensaje
                        
                                    })
                                }, (err, response, bodys) => {
                                    let respuesta = JSON.parse(bodys)
                                    if(respuesta.error !=null){
                                        let request = respuesta.error.description
                                        console.log('error',request);
                                    }else{
                                        let request = respuesta.status
                                        console.log(request);
                                    }
                        
                                })
                               
                            })
                            //#endregion
                        }
                        
                    });
                    
                } else {
                    return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
                }
    
            } catch (error) {
                return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
            }  

            
        }
    //#endregion
        }
        

    //#endregion
   
    
}
//Obtener los pedidos que se han creados en una fecha en especifico
const ListadoPedidos = async (req, res)=>{
    // PARAMETROS DE ENTRADA
    try {
        const request = await prisma.$queryRawUnsafe(`execute obtener_listado_pedidos_sinFecha `)
        if (request != []) {
                datos = []
                request.forEach(element => {
                    // let fechaEntrega = element.FechaHoraEntrega.substr(0,10)
                    let day = dateFormat(new Date(),"dd/mm/yyyy");
                    // if(fechaEntrega == day ){
                        datos.push({
                            IdPedido:element.IdPedido
                            ,Socio:element.Socio
                            ,Correo:element.Correo
                            ,Correo_2: element.Correo_2
                            ,Correo_3: element.Correo_3
                            ,Cliente:element.Cliente
                            ,SolicitudCobro:element.SolicitudCobro
                            ,Moneda:element.Moneda
                            ,MontoCobro:element.MontoCobro
                            ,CobroDeProducto:element.CobroDeProducto
                            ,CobroDeMensajeria:element.CobroDeMensajeria
                            ,TipoPedido:element.TipoPedido
                            ,MunicipioRecepcion:element.MunicipioRecepcion
                            ,MunicipioEntrega: element.MunicipioEntrega
                            ,FechaHoraEntrega: element.FechaHoraEntrega
                            ,Estado: element.Estado
                            ,DomiciliarRecepcion:element.DomiliciarRecepcion
                            ,DomiciliarEntrega:element.DomiliciarEntrega
                            ,DireccionEntrega:element.DireccionEntrega
                            ,Observaciones:element.Observaciones})
                            elementosDB = request.length
                    // }
         

                });
                AgregarDatosSheets();
        } else {
            return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
        }

    } catch (error) {
        return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
    }   
}

//#region realizar la limpieza de la hoja
async function ElminarDatosSheet() {
    let resultado = 0
    cont = 0
    let elemntosSheet = 0
    const documento = new GoogleSpreadsheet(googleId);
        //Consumir el servicio y enviar las credenciales
        await documento.useServiceAccountAuth(credenciales);
        //Leer la informacion del documento
        await documento.loadInfo();
        const sheet = documento.sheetsByIndex[0];
        const rows = await sheet.getRows();
        elemntosSheet = rows.length
        console.log(elemntosSheet);
        // metodo para limpiar
        if(elemntosSheet == 0){
            console.log('ya no se puede hacer nada');
        }else{
            for (let index = 0; index < elemntosSheet; index++) {
                await rows[index].delete();
            }
            
        }
}
//#endregion

// const job2 = schedule.scheduleJob('*/1 7-23 * * *',function (){
//     ListadoPedidos();    
// })

// const job= schedule.scheduleJob('*/1 7-18 * * *',function () {   
//     guardarDatos();    
// })

// const job3 = schedule.scheduleJob('*/1 19-23 * * *',function (){
//     ElminarDatosSheet();
// })

// accederGoogleSheets();

module.exports = {
    accederGoogleSheets: accederGoogleSheets,
    guardarDatos:guardarDatos,
    ListadoPedidoSocio: ListadoPedidos
}

