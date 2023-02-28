const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
let request = require("request");
const https = require("https");
const nodemailer = require("nodemailer");
let json;
class MainController {
  //API para crear las misiones en optacheck
  async CreacionMisionesApiOptacheckEntrega(req, res) {
    let params = req.body;
    request.post(
      {
        headers: {
          Authorization: "Token d452e80e7e641b23e6ba786e6836131893d62a5a",
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
          "x-api-key": "720cedb2a70552d22a906658366f5e0449d14321",
        },

        url: "https://api.optacheck.com/v1.0/workspaces/543fc6d8-bb81-4dd4-91bc-49759abd7cf2/assignments/",
        body: JSON.stringify({
          status: "assigned",
          title: params.correlativo,
          description: params.socio,
          forms: ["75f31708-c9e8-489e-86e1-a4f3f33f9d1d"],
          project: null,
          client: null,
          tags: ["b0d89376-22cf-499a-bb2e-3ff7345e0d4b"],
          data: {
            fields: [
              {
                type: "text",
                title: "Nombre quien recibe",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: true,
                input_type: "text",
                value: params.cliente,
                max_length: 100,
              },
              {
                type: "text",
                title: "Teléfono",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.telefono,
                max_length: 100,
              },
              {
                type: "text",
                title: "Dirección recepción de pedido",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.direccionRecepcion,
                max_length: 100,
              },
              {
                type: "text",
                title: "Datos de entrega de pedido",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.direccionEntrega,
                max_length: 100,
              },
              {
                type: "text",
                title: "Municipio de recepción",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.municipioRecepcion,
                max_length: 100,
              },
              {
                type: "text",
                title: "Municipio de entrega",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.municipioEntrega,
                max_length: 100,
              },
              {
                type: "text",
                title: "Fecha de Entrega",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.fechaEntrega,
                max_length: 100,
              },
              {
                type: "text",
                title: "Recibe Pago",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.recibePago,
                max_length: 100,
              },
              {
                type: "text",
                title: "Concepto de mensajeria",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.conceptoPagoMensajeria,
                max_length: 100,
              },
              {
                type: "text",
                title: "Concepto de pago",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.conceptoPagoProducto,
                max_length: 100,
              },
              {
                type: "text",
                title: "Monto Total",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.montoTotal,
                max_length: 100,
              },
              {
                type: "text",
                title: "Observaciones",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.observacion,
                max_length: 100,
              },
              {
                type: "text",
                title: "Especificaciones",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.especificacion,
                max_length: 100,
              },
            ],
          },
          user_email: params.correo,
        }),
      },
      (err, response, bodys) => {
        const content = JSON.parse(bodys);
        return res.status(200).send({ content });
    }
    );
    
  
    
  }

  async CreacionMisionesApiOptacheckRecepcion(req, res) {
    var params = req.body;

    request.post(
      {
        headers: {
          Authorization: "Token d452e80e7e641b23e6ba786e6836131893d62a5a",
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
          "x-api-key": "720cedb2a70552d22a906658366f5e0449d14321",
        },

        url: "https://api.optacheck.com/v1.0/workspaces/543fc6d8-bb81-4dd4-91bc-49759abd7cf2/assignments/",
        body: JSON.stringify({
          status: "assigned",
          title: params.correlativo,
          description: params.socio,
          forms: ["14a1a7cd-d794-4453-b7e6-03a4e294dbf4"],
          project: null,
          client: null,
          tags: ["b0d89376-22cf-499a-bb2e-3ff7345e0d4b"],
          data: {
            fields: [
              {
                type: "text",
                title: "Nombre quien recibe",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: true,
                input_type: "text",
                value: params.cliente,
                max_length: 100,
              },
              {
                type: "text",
                title: "Teléfono",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.telefono,
                max_length: 100,
              },
              {
                type: "text",
                title: "Dirección recepción de pedido",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.direccionRecepcion,
                max_length: 100,
              },
              {
                type: "text",
                title: "Datos de entrega de pedido",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.direccionEntrega,
                max_length: 100,
              },
              {
                type: "text",
                title: "Municipio de recepción",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.municipioRecepcion,
                max_length: 100,
              },
              {
                type: "text",
                title: "Municipio de entrega",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.municipioEntrega,
                max_length: 100,
              },
              {
                type: "text",
                title: "Fecha de Entrega",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.fechaEntrega,
                max_length: 100,
              },
              {
                type: "text",
                title: "Recibe Pago",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.recibePago,
                max_length: 100,
              },
              {
                type: "text",
                title: "Concepto de mensajeria",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.conceptoPagoMensajeria,
                max_length: 100,
              },
              {
                type: "text",
                title: "Concepto de pago",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.conceptoPagoProducto,
                max_length: 100,
              },
              {
                type: "text",
                title: "Monto Total",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.montoTotal,
                max_length: 100,
              },
              {
                type: "text",
                title: "Observaciones",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.observacion,
                max_length: 100,
              },
              {
                type: "text",
                title: "Especificaciones",
                form: "fdddda64-9d40-4606-a987-9440c5d28e06",
                required: false,
                id: "bfb9c426",
                show: true,
                editable: false,
                input_type: "text",
                value: params.especificacion,
                max_length: 100,
              },
            ],
          },
          user_email: params.correo,
        }),
      },
      (err, response, bodys) => {
        const content = JSON.parse(bodys);
        return res.status(200).send({ content });
      }
    );
  }

  async envioMisionesRespuesta (req,res) {
    let params = req.body
    let jsonOriginal = params.content;
    let jsonParse = JSON.stringify(jsonOriginal);
    try {
      const request =  await prisma.$queryRawUnsafe(`execute usp_crear_datosEstadoOptacheck_log '${jsonParse}'`)
      if (request != []) {
          return res.status(200).send({message:'Mision Grabada Exitosamente'})
      } else {
          return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
      }

  } catch (error) {
      return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
  }  
  }

  //API para el envio de correos por medio de la libreria NODEMAILER
  async EnvioCorreo(req, res) {
    //PARAMETROS DE ENTRADA
    const IdPedido = req.params.IdPedido;

    try{
      const request = await prisma.$queryRawUnsafe(`execute usp_obtener_informacionCorreo '${IdPedido}'`)

        if (request != []) {

           const contentHtml = `
          <h4 style="color: #000; text-align:center">GRACIAS POR UTILIZAR NUESTRO SERVICIO</h4>
          <h1 style="color: #eb6736; text-align:left">SERBACO</h1>
          <div style="border: 1px solid #eeeeee; -moz-border-radius: 7px; -webkit-border-radius: 7px; padding: 10px; background-color:#eeeeee; color:black; font-size:15px">
            <table  align="center"  style="background-color:#fff; heigth:30px" >
              <tr>
                <th>DETALLE DEL PEDIDO DE ENTREGA</th>
              </tr>
              <tr>
                  <td >NUMERO PEDIDO</td>
                  <td>${request[0].IdPedido}</td>
              </tr>
              <tr>
                  <td>SOCIO</td>
                  <td>${request[0].Socio}</td>
              </tr>
              <tr>
                  <td>SOLICITUD COBRO:</td>
                  <td>${request[0].SolicitudCobro}</td>
              </tr>
              <tr>
                  <td>VALOR PRODUCTO</td>
                  <td>${request[0].ValorProducto}</td>
              </tr>
              <tr>
                  <td>VALOR ENVIO</td>
                  <td>${request[0].ValorEnvio}</td>
              </tr>
              <tr>
                <td>MONTO QUE SE RECIBIO</td>
                <td>${request[0].Monto}</td>
              </tr>
              <tr>
              <td>CLIENTE</td>
                <td>${request[0].Cliente}</td>
              </tr>
              <tr>
                <td>NOMBRE DE QUIEN RECIBE</td>
                <td>${request[0].NombreRecibe}</td>
              </tr>
              <tr>
                <td>AGENTE QUIEN ENTREGA</td>
                <td>${request[0].AgenteEntrega}</td>
              </tr>
              <tr>
                <td>FOTO PRODUCTO</td>
                <td>
                  <a href=${request[0].Foto}>VER FOTO</a>.
                </td>
              </tr>
              <tr>
                <td>RECIBIO EL PAGO</td>
                <td>${request[0].RecibioPago}</td>
              </tr>
            </table>
          </div> `
    
          const transporter = nodemailer.createTransport({
            service:'gmail',
            host: "smtp.gmail.com",
            secureConnection: false,
            port: 587,
            tls: {
              ciphers: "SSLv3",
            },
            secure:false,
            auth: {
              user: 'pedidos@serbaco.gt', // generated ethereal user
              pass: 'laskcdnrjkpbpjhy'
            },
            from:'pedidos@serbaco.gt',
           
          })
    
          let info = await transporter.sendMail({
            from: '"SERBACO" <pedidos@serbaco.gt>', // sender address
            to: request[0].Correo, // list of receivers
            subject: "CONSTANCIA DE ENTREGA", // Subject line
            text: "Hello world?", // plain text body
            html: contentHtml, // html body
          });
          
          console.log(info);
          return res.status(200).send({ message: 'Message sent' })

      } else {
          return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
      }
    }catch(error){
      return res.status(404).send({ message: 'Error en el envio de correo '+error })
    }

    // const {numeroPedido, cliente, solicitudCobro, valorProducto, valorEnvio, monto, nombreRecibe, agenteEntrega, fotoProducto, recibioPago} = req.body;

   
    
  }

  //API para eliminar las misiones por medio del id de la mision
  async EliminarMisionApiOptacheck(req, res){
    var IdMision = req.params.IdMision;
    let params = "https://api.optacheck.com/v1.0/workspaces/543fc6d8-bb81-4dd4-91bc-49759abd7cf2/assignments/" + IdMision +"/"

    request.delete(
      {
        headers: {
          Authorization: "Token d452e80e7e641b23e6ba786e6836131893d62a5a",
          "Cache-Control": "no-cache",
          "x-api-key": "720cedb2a70552d22a906658366f5e0449d14321",
        },

        url: params,
      },
      (status) => {
        // const respuesta = JSON.parse(response);
        return res.status(200).send({status})
        // if (respuesta.status == "undefined") {
        //   const request = respuesta;
        //   return res.status(404).send({ request });
        // } else {
        //   const request = respuesta;
        //   return res.status(200).send({ message: "Se ha creado exitosamente la mision" });
        // }
      }
    );
  }

  async CambioEstado(req,res){
    try {
      const request =  await prisma.$queryRawUnsafe(`execute usp_editar_cambioEstadoFinalizado`)
      if (request != []) {
          
          return res.status(200).send({request})
      } else {
          return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
      }

    } catch (error) {
        return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
    }  
  }

}

const controller = new MainController();
module.exports = controller;
