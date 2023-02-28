const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
let request = require( 'request' ).defaults({rejectUnauthorized:false});

const os = require("os")
class MainController{
    
    
    
    //Combos para insertar la direccion del cliente.
    //#region Combos para ver los pedidos
    async ComboDepartamento(req,res){   
        try {
                const request = await prisma.$queryRawUnsafe(`usp_obtener_comboDepartamento`) 
                if (request != []) {
                    return res.status(200).send({request})
                } else {
                    return res.status(404).send({message:'No se ha podido obtener alguna respuesta de la base de datos'})
                }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor '+error })
        }
    }
    async ComboMunicipio(req, res) {
        const IdDepartamento = req.params.id;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_comboMunicipio '${IdDepartamento}'`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async ComboZona(req, res) {
        const IdMunicipio = req.params.id;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_comboZona '${IdMunicipio}'`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async ComboColonia(req, res) {
        const IdZona = req.params.id;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_comboColonia '${IdZona}'`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async ComboCliente(req, res) {
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_comboCliente`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async ComboTipoCuentaBancaria(req,res){
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_comboTipoCuentaBancaria`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async ComboBanco(req,res){
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_comboBanco`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async ComboTipoProducto(req,res){
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_comboTipoProducto`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async ComboTipoPago(req,res){
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_comboTipoPago`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async ComboMunicipioDireccion(req,res){
        const IdZona = req.params.id; 
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_comboMunicipioDireccion '${IdZona}'`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async ComboSocioCliente(req,res){
        const IdCliente = req.params.id; 
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_comboSocioCliente '${IdCliente}'`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
        
    }
    async ComboTipoTelefono(req,res){
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_comboTipoTelefono`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }

    }
    async ComboTipoCorreo(req,res){
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_comboTipoCorreo`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    //#endregion   
    //#region funcion para agregar los datos del socio
    async AgregarCliente(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        const NombreContacto   = params.NombreContacto;
        const NombreEmpresa	 = params.NombreEmpresa;  	 
        const RazonSocial		 = params.RazonSocial    
        const DescripcionNit	 = params.DescripcionNit    
        const IdUsuario		 = params.IdUsuario
        const PuestoContacto	 = params.PuestoContacto     
        const TelefonoContacto = params.TelefonoContacto   	
        const TelefonoEmpresa	 = params.TelefonoEmpresa     
        const CorreoContacto	 = params.CorreoContacto    
        const DireccionEmpresa = params.DireccionEmpresa   	 
        const IdDepartamento	 = params.IdDepartamento     
        const IdZona			 = params.IdZona     
        const IdColonia		 = params.IdColonia    	 
        const IdTipoCuenta	 = params.IdTipoCuenta   	
        const IdBanco			 = params.IdBanco     
        const NumeroCuenta	 = params.NumeroCuenta    	 
        
        try {
            const request = await prisma.$queryRawUnsafe(`execute sp_agregar_cliente_serbaco '${NombreContacto}','${NombreEmpresa}','${RazonSocial}','${DescripcionNit}','${IdUsuario}','${PuestoContacto}','${TelefonoContacto}','${TelefonoEmpresa}','${CorreoContacto}','${DireccionEmpresa}','${IdDepartamento}','${IdZona}','${IdColonia}','${IdTipoCuenta}','${IdBanco}','${NumeroCuenta}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha creado exitosamente el cliente'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
        
    }
    async AgregarDatosSocio(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;

        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_crear_socio '${params.DescripcionNit}','${params.IdentificacionDPI}','${params.Nombres}','${params.Apellidos}','${params.NombreSocio}','${params.TipoPersona}','${params.RazonSocial}','${params.IdUsuario}'`)
            if (request != []) {
                const IdSocio = request[0].IdSocio
                return res.status(200).send({message:'Se ha creado exitosamente al socio',IdSocio})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async AgregarDireccionSocio(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        // const IdDireccion;

        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_crear_direccion '${params.IdSocio}','${params.IdContacto}','${params.Direccion}','${params.IdDepartamento}','${params.IdMunicipio}','${params.IdZona}','${params.IdColonia}','${params.IdTipoDireccion}','${params.ReferenciaDireccion}','${params.IdUsuario}','${params.Predeterminado}'`)
            if (request != []) {
                const  IdDireccion = request[0].IdDireccion
                return res.status(200).send({message:'Se ha creado exitosamente la direccion del socio',IdDireccion})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
     
    }
    async AgregarContactoSocio(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;

        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_crear_contacto '${params.IdSocio}','${params.IdTipoContacto}','${params.Nombre}',
            '${params.Puesto}','${params.IdUsuario}','${params.Predeterminado}'`)
            if (request != []) {
                const IdContacto = request[0].IdContacto
                return res.status(200).send({message:'Se ha creado exitosamente el contacto del socio',IdContacto})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async AgregarTelefonos(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        // const IdTelefono;

        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_crear_telefono '${params.Opcion}','${params.IdSocio}','${params.IdContacto}',
            '${params.Telefono}','${params.IdTipoTelefono}','${params.IdUsuario}','${params.Predeterminado}'`)
            if (request != []) {
                const IdTelefono = request[0].IdTelefono
                return res.status(200).send({message:'Se ha creado exitosamente el telefono',IdTelefono})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async AgregarCuentaBancaria(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;

        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_crear_cuenta_bancaria '${params.IdSocio}','${params.IdBanco}','${params.IdTipoCuentabancaria}',
            '${params.NumeroCuenta}','${params.NombreCuenta}','${params.IdUsuario}','${params.Predeterminado}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha creado exitosamente el numero de cuenta'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async AgregarCorreos(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_crear_email '${params.Opcion}','${params.IdSocio}','${params.IdContacto}',
            '${params.Email}','${params.IdTipoEmail}','${params.IdUsuario}','${params.Predeterminado}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha creado exitosamente el correo'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async ObtenerSocios(req, res){
        // PARAMETROS DE ENTRADA
        try {
            const request = await prisma.$queryRawUnsafe(`usp_obtener_socio`) 
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({message:'No se ha podido obtener alguna respuesta de la base de datos'})
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor '+error })
        }
    }
    async ObtenerParametrosSocio(req, res){
        // PARAMETROS DE ENTRADA
        const IdSocio = req.params.id
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_datos_socio '${IdSocio}'`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async ObtenerContactosSocio(req, res){
        // PARAMETROS DE ENTRADA
        const IdSocio = req.params.id
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_colaboradores '${IdSocio}'`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    //#endregion
    //#region funciones para listar los listado seleccionados
    async ListarDireccionesSocio(req, res){
        // PARAMETROS DE ENTRADA
        const IdSocio = req.params.id
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_direccion_socio '${IdSocio}'`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async ListarContactosSocio(req, res){
        // PARAMETROS DE ENTRADA
        const IdSocio = req.params.id
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_contacto_socio '${IdSocio}'`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async ListarDatosFinancieros(req, res){
        // PARAMETROS DE ENTRADA
        const IdSocio = req.params.id
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_datos_financieros_socio '${IdSocio}'`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async ObtenerTelefonoSocio(req, res){
        // PARAMETROS DE ENTRADA
        const IdSocio = req.params.id
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_telefonoSocio '${IdSocio}'`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    //#endregion
    //Funciones para visualizar los datos de las tablas
    //#region funciones para combos de los clientes
    async ObtenerClienteCombo(req, res){
        // PARAMETROS DE ENTRADA
        const IdSocio = req.params.id
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_clientesSocio '${IdSocio}'`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async ObtenerDireccionClientes(req, res){
        // PARAMETROS DE ENTRADA
        const IdCliente = req.params.id
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_direccion_cliente '${IdCliente}'`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async AgregarPedido(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        // const IdPedido;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_crear_pedido '${params.IdMoneda}','${params.IdDireccionRecepcion}','${params.IdDireccionEntrega}',
            '${params.IdTelefono}','${params.IdFormaPago}','${params.IdCuentaBancaria}','${params.FechaHoraEntrega}','${params.SolicitudCobro}',
            '${params.MontoCobro}','${params.Observaciones}','${params.Especificaciones}','${params.IdUsuario}','${params.IdTipoPedido}',
            '${params.HoraAntesDe}','${params.HoraDespuesDe}'`)
            if (request != []) {
                const IdPedido = request[0].IdPedido
                return res.status(200).send({message:'Se ha creado exitosamente el pedido',IdPedido})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async ObtenerFormaPago(req, res){
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_formaPago`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }    
    }
    async ObtenerTipoPedido(req, res){
        // PARAMETROS DE ENTRADA 
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_tipoPedido`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        } 
    }
    async ListadoPedidos(req, res){
        const IdSocio = req.params.id
        
        try {
            const request = await prisma.$queryRawUnsafe(`execute obtener_listado_pedidos '${IdSocio}'`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    //#endregion
    //#region agregar comboBox de las direcciones
    async AgregarDatosMunicipio(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        // const IdMunicipio;

        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_crear_municipio '${params.Id}','${params.Descripcion}'`)
            if (request != []) {
                const IdMunicipio = request[0].IdMunicipio
                return res.status(200).send({message:'Se ha creado exitosamente',IdMunicipio})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async AgregarDatosZona(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        //  IdZona;

        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_crear_zona '${params.Id}','${params.Descripcion}'`)
            if (request != []) {
                const IdZona = request[0].IdZona
                return res.status(200).send({message:'Se ha creado exitosamente',IdZona})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }
    async AgregarDatosColonia(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        // const IdColonia;

        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_crear_colonia '${params.Id}','${params.Descripcion}'`)
            if (request != []) {
                const IdColonia = request[0].IdColonia
                return res.status(200).send({message:'Se ha creado exitosamente',IdColonia})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }
    //#endregion
    //#region edicion de los datos principales del socio
    async EditarDatosSocio(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`usp_editar_socio '${params.Apellidos}','${params.DPI}','${params.DescripcionNit}','${params.IdSocio}','${params.IdTipoIdentificacion}','${params.IdTipoIdentificacionDPI}','${params.IdUsuario}','${params.NombreSocio}','${params.Nombres}','${params.RazonSocial}','${params.Telefono}','${params.TipoPersona}','${params.TipoTelefono}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha actualizado correctamento los datos del socio'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        } 
    }
    async EditarDatosFinancieros(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_editar_datosFinancieros '${params.IdNumeroCuenta}','${params.IdBanco}','${params.Banco}',
            '${params.TipoCuentaBancaria}','${params.TipoCuenta}','${params.NumeroCuenta}','${params.NombreCuenta}','${params.IdUsuario}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha actualizado correctamento los datos financieros del socio'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        } 
    }
    async ObtenerDatosFinancierosId(req,res){
         // PARAMETROS DE ENTRADA
         const IdCuentaBancaria = req.params.id
         try {
            const request = await prisma.$queryRawUnsafe(`execute obtener_datoFinanciero_id '${IdCuentaBancaria}'`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async ObtenerDatosContactoId(req,res){
        // PARAMETROS DE ENTRADA
        const IdContacto = req.params.id
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_DatosContacto '${IdContacto}'`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async EditarDatosContacto(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_editar_contactoSocio '${params.IdContacto}','${params.Nombre}','${params.Puesto}',
            '${params.Telefono}','${params.IdTipoTelefono}','${params.IdTipoEmail}','${params.Email}','${params.IdTipoContacto}',
            '${params.IdUsuario}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha actualizado correctamento los datos del contacto del socio'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        } 
    }
    async ObtenerDireccionSocioId(req,res){
        // PARAMETROS DE ENTRADA
        const IdDireccion = req.params.id

        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_DireccionSocio_Id '${IdDireccion}'`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
   }
    async EditarDireccionSocio(req, res) {
        // PARAMETROS DE ENTRADA
        const params = req.body;

        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_editar_direccionSocio '${params.IdDireccion}','${params.Direccion}','${params.IdDepartamento}',
            '${params.Departamento}','${params.IdZona}','${params.Zona}','${params.IdColonia}','${params.Colonia}',
            '${params.IdMunicipio}','${params.Municipio}','${params.ReferenciaDireccion}','${params.IdUsuario}'`)
            if (request != []) {
                return res.status(200).send({ message: 'Se ha actualizado correctamento los datos de las direcciones del socio' })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }     
    }
    //#endregion
    //#region creacion de abm de clientes cf
    async CrearCuenta(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_crear_cuentaLogueada '${params.IdSocio}','${params.Usuarios}','${params.Password}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha creado exitosamente la cuenta del socio'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        } 
    }
    async ObtenerSociosId(req, res){
        // PARAMETROS DE ENTRADA
        const IdSocio = req.params.id
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_socioId '${IdSocio}'`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async  EditarDatosPedidosSocio(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_editar_pedidoSocio '${params.opcion}','${params.Socio}','${params.IdDireccionRecepcion}',
            '${params.DireccionRecepcion}','${params.IdDepartamentoRecepcion}','${params.IdZonaRecepcion}','${params.IdColoniaRecepcion}','${params.IdMunicipioRecepcion}',
            '${params.ReferenciaDireccionRecepcion}','${params.IdUsuario}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha actualizado correctamento los datos del pedido'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }     
        
    }
    async  EditarDatosPedidosClienteCF(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_editar_ClienteCF '${params.IdDireccionRecepcion}','${params.IdUsuario}','${params.Nombre}',
            '${params.DireccionRecepcion}','${params.IdDepartamentoRecepcion}','${params.IdZonaRecepcion}','${params.IdColoniaRecepcion}','${params.IdMunicipioRecepcion}',
            '${params.ReferenciaDireccionRecepcion}'`)
            if (request != []) {
                return res.status(200).send({message:'No se ha podido actualizar los datos del pedido'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }     
    }
    async  EditarDatosPedidosContacto(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_editar_ClientePedido '${params.IdDireccionEntrega}','${params.IdUsuario}','${params.Nombre}',
            '${params.Telefono}','${params.DireccionEntrega}','${params.IdDepartamentoEntrega}','${params.IdZonaEntrega}','${params.IdColoniaEntrega}',
            '${params.IdMunicipioEntrega}','${params.ReferenciaDireccionEntrega}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha actualizado correctamento los datos del pedido del cliente'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }     
    }
    async  EditarDatosPedido(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_editar_datos_pedido '${params.IdPedido}','${params.IdMoneda}','${params.IdFormaPago}',
            '${params.IdCuentaBancaria}','${params.FechaHoraEntrega}','${params.SolicitudCobro}','${params.Observaciones}','${params.Especificaciones}',
            '${params.IdTipoPedido}','${params.IdDireccionRecepcion}','${params.IdUsuario}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha actualizado correctamento los datos del pedido'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }      
    }
    //#endregion
    //#region Obtener los datos del cliente CF
    async obtenerDatosClienteCF(req,res){
        // PARAMETROS DE ENTRADA
        const IdDireccion = req.params.id
        try {
            const request = await prisma.$queryRawUnsafe(`execute sp_obtenerDatosClienteCF`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async obtenerDatosDireccionClienteCF(req,res){
        // PARAMETROS DE ENTRADA
        const IdDireccion = req.params.id
        try {
            const request = await prisma.$queryRawUnsafe(`execute sp_obtenerDatosDireccionClienteCF '${IdDireccion}'`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async obtenerHistorialEstado(req,res){
        // PARAMETROS DE ENTRADA
        const IdPedido = req.params.id
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_pedidoEstado '${IdPedido}'`)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async listarEstado(req,res){
        // PARAMETROS DE ENTRADA
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_estado `)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async CambioEstadoPedido(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_crear_historialEstado_pedido '${params.IdPedido}','${params.IdEstado}','${params.Observacion}'`)
            if (request != []) {
                return res.status(200).send({message:'Se cambio el estado exitosamente'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }
    async fechaHoraEntrega(req,res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_calcular_fechaEntrega`)
            if (request != []) {
                const fecha = request[0].FechaHoraEntrega
                const horaAntes = request[0].HoraAntesDe
                const horaDespues = request[0].HoraDespuesDe
                return res.status(200).send({fecha,horaAntes,horaDespues})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   

    }
    //#endregion
    //#region gestorDomiciliar
    async AgregarDomiciliar(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_crear_domiciliar '${params.Nombres}','${params.Apellidos}','${params.IdUsuario}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha creado exitosamente el domiciliar'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }  
    }
    async ObtenerDomiciliar (req, res){
        // PARAMETROS DE ENTRADA 
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_domiciliar `)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async AsignacionDomiciliar(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_asignacion_domiciliar '${params.IdPedido}','${params.IdDomiciliarRecepcion}','${params.IdDomiciliarEntrega}','${params.IdUsuario}','${params.Opcion}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha creado exitosamente la asignacion del domiciliar al pedido'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }  
    }    
    async ObtenerListadoDomiciliar(req, res){
        // PARAMETROS DE ENTRADA 
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_Listadodomiciliar `)
            if (request != []) {
                return res.status(200).send({ request })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
    }
    async ObtenerDomiciliarSeleccionado(req, res){
        // PARAMETROS DE ENTRADA
        const IdDomiciliar = req.params.id
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_domiciliarSeleccionado '${IdDomiciliar}'`)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }        
    }
    async EditarDomiciliar(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_editar_domiciliar '${params.IdDomiciliar}','${params.Nombres}','${params.Apellidos}','${params.IdUsuario}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha editado exitosamente el domiciliar'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }  
    }
    async EdicionAsignacionDomiciliar(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_editar_asignacionDomiciliar '${params.IdPedido}','${params.IdDomiciliarRecepcion}','${params.IdDomiciliarEntrega}','${params.IdUsuario}','${params.Opcion}'`)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }  
    }
    async ObtenerDomiciliarSeleccionadoPedido(req, res){
        // PARAMETROS DE ENTRADA
        const IdPedido = req.params.id
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_pedidoDomiciliar '${IdPedido}'`)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ request: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ request: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }    
    }
    async DeBajaDomiciliar(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_eliminar_domiciliar '${params.IdDomiciliar}','${params.IdUsuarioModificacion}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha dado de baja el domiciliar'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }  
    }
    //#endregion 
    //#region filtros para los pedidos
    async filtroFecha(req, res){
        // PARAMETROS DE ENTRADA
        const fechaCreacion = req.params.id
        const idSocio = req.params.idSocio
        
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtenerPedido_filtradoFecha '${fechaCreacion}','${idSocio}'`)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }  
    }
    async filtroRangoFecha(req, res){
        // PARAMETROS DE ENTRADA
        const fechaCreacionDe = req.params.fechaDesde
        const fechaCreacionDesde = req.params.fechaHasta
        const idSocio = req.params.idSocio
        
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtenerPedido_RangoFiltradoFecha '${fechaCreacionDe}','${fechaCreacionDesde}','${idSocio}'`)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        } 
    }
    async filtroEstado(req, res){
        // PARAMETROS DE ENTRADA
        const IdEstado = req.params.IdEstado
        const idSocio = req.params.idSocio
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_pedidos_estado '${IdEstado}','${idSocio}'`)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }  
    }
    async filtroDomiciliar(req, res){
        // PARAMETROS DE ENTRADA
        const IdDomiciliarRecepcion = req.params.IdDomiciliarRecepcion
        const IdDomiciliarEntrega = req.params.IdDomiciliarEntrega
        const opcion = req.params.opcion

        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_pedidos_domiciliar '${IdDomiciliarRecepcion}','${IdDomiciliarEntrega}','${opcion}'`)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        } 
    }
    async filtroSocio(req, res){
        // PARAMETROS DE ENTRADA
        const IdSocio = req.params.IdSocio

        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtenerPedido_filtroSocio '${IdSocio}'`)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }  
    }
    async busquedaPedido(req, res){
        // PARAMETROS DE ENTRADA
        const IdSocio = req.params.IdSocio
        const IdPedido = req.params.IdPedido

        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtenerPedido_busquedaPedidoId '${IdSocio}','${IdPedido}'`)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }  
    }
    //#endregion
    //#region concepto de pago
    async ComboConceptoPago(req,res){
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_conceptoPago`)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }  
    }    
    async AgregarDetallePago(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_crear_DetalleImportePedido '${params.IdPedido}','${params.IdConceptoPago}','${params.IdFormaPago}',
            '${params.IdMoneda}','${params.MontoCobro}','${params.IdUsuarioRegistro}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha creado exitosamente el detalle del pago'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }  
    }
    async obtenerDetallePedido(req, res){
        // PARAMETROS DE ENTRADA
        const IdPedido = req.params.IdPedido
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_detallePedido '${IdPedido}'`)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }  
    }
    //#endregion
    //#region carga masiva y liquidaciones
    async AgregarContactoMasivo(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_crear_contactoMasivo '${params.Telefono}','${params.IdSocio}','${params.Nombre}',
            '${params.IdUsuario}'`)
            if (request != []) {
                const IdContactoOutput = request[0].IdContactoOutput
                const IdTelefonoOutput = request[0].IdTelefonoOutput
                return res.status(200).send({message:'Se ha creado exitosamente el contacto masivo',IdContactoOutput,IdTelefonoOutput})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }
    async AgregarDireccionMasivo(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_crear_direccionMasivo '${params.Municipio}','${params.Zona}','${params.Colonia}',
            '${params.Telefono}','${params.IdSocio}','${params.Nombre}','${params.IdUsuario}'`)
            if (request != []) {
                const IdMunicipioOutput = request[0].IdMunicipioOutput
                const IdZonaOutput = request[0].IdZonaOutput
                const IdColoniaOutput = request[0].IdColoniaOutput
                const IdContactoOutput = request[0].IdContactoOutput
                const IdTelefonoOutput = request[0].IdTelefonoOutput
                return res.status(200).send({message:'Se ha creado exitosamente la direccion masiva',IdMunicipioOutput,IdZonaOutput,IdColoniaOutput,IdContactoOutput,IdTelefonoOutput})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }  
    }
    async ListadoPagoLiquidaciones(req, res){
        // PARAMETROS DE ENTRADA
        const fechaCreacionDe = req.params.fechaDesde
        
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtenerListaPedidos '${fechaCreacionDe}'`)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        } 
    }
    async AgregarLiquidaciones(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_liquidaciones '${params.Liquidacion}','${params.Observacion}','${params.IdDetalleImportePedido}',
            '${params.UsuarioRegistro}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha creado exitosamente la liquidacion'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }
    //#endregion
    //#region edicion detalle importe de pago 
    async EdicionDetalleImportePago(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_editar_detalleImportePedido '${params.IdDetalleImportePedido}','${params.MontoCobro}','${params.IdConceptoPago}','${params.IdFormaPago}','${params.IdUsuarioModificacion}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha creado exitosamente la edicion del detalle importe de pago'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   

    }
    async IdDetalleImportePedido(req, res){
        // PARAMETROS DE ENTRADA
        const IdDetalleImportePagos = req.params.IdDetalleImportePago
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_IdDetallePedido '${IdDetalleImportePagos}'`)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }
    async EdicionMontoCobroPedido(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_editar_montoPedido '${params.IdPedido}','${params.IdUsuarioModificacion}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha realizado exitosamente la edicion del monto de cobro'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }

    //#endregion
    //#region reporteria serbaco
    async ReporteSocio(req,res){
        try {
            const request = await prisma.$queryRawUnsafe(`execute sp_rp_reporteSocio`)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }
    async ReporteSocioConsumidorFinal(req,res){
        try {
            const request = await prisma.$queryRawUnsafe(`execute sp_rp_reporteSocioClienteCF`)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }
    async tablaReporteria(req,res){
        try {
            const request = await prisma.$queryRawUnsafe(`execute sp_tabla_reporteria`)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }
    //#endregion
    //#region mensajeria tigo
    async InformacionTigo(req,res){
        try {
            const request = await prisma.$queryRawUnsafe(`execute sp_informacionAPI`)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }
    async InformacionSocioMensajeria(req,res){  
        const IdPedido = req.params.IdPedido
        
        try {
            const request = await prisma.$queryRawUnsafe(`execute sp_informacion_socio_mensajeria '${IdPedido}'`)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }

    async DatosApiTigo(req, res) {
        var params = req.body;

            request.post(
            {
                headers: { "content-type": "application/json" },
                auth: {
                'user': "admin",
                'pass': "xApNcMf4Xgkha",
                'sendImmediately': false
        
                },
                url: "http://192.168.8.46:8081/api/send_sms",
                body: JSON.stringify({
                    text:params.Text,
                    port: [31],
                    param: [
                        {
                        number:params.Telefono,
                        text_param:["bj"],
                        user_id:1
                        }
                    ]
                }),
            },
            (err, response, bodys) => {
                const respuesta = JSON.parse(bodys);
                console.log(respuesta);
                if (respuesta.error != null) {
                const request = respuesta
                return res.status(200).send({ request });
                } else {
                const request = respuesta;
                return res.status(200).send({ request });
                }
            }
            );
        
    }

    // async envioMensajes(req, res){
    //     for (let index = 0; index < jsonMensajeria.length; index++) {
    //         console.log(jsonMensajeria[index].Telefono);
    //             request.post(
    //                 {
    //                   headers: { "content-type": "application/json" },
    //                   auth: {
    //                     'user': "admin",
    //                     'pass': "xApNcMf4Xgkha",
    //                     'sendImmediately': false
                    
    //                   },
    //                   url: "http://192.168.8.46:8081/api/send_sms",
    //                   body: JSON.stringify({
    //                       text:jsonMensajeria[index].Text,
    //                       port: [31],
    //                       param: [
    //                           {
    //                             number:jsonMensajeria[index].Telefono.toString(),
    //                             text_param:["bj"],
    //                             user_id:1
    //                           }
    //                       ]
    //                   }),
    //                 },
    //                 (err, response, bodys) => {
                      
    //                     console.log(bodys);
    //                 }
    //               );
    //     } 
    // }


    // async DatosApiTigo(req, res) {
    //     var params = req.body;
    
    //     var agent = new https.Agent({
    //       host: "192.168.8.46",
    //       path: '/',
    //       rejectUnauthorized: false,
    //       secureProtocol: 'TLSv1_method',
    //       port: '8080',
    //       strictSSL: false,
    //     });
    
    
    //     request.post(
    //       {
    //         headers: { "content-type": "application/json" },
    //         digestAuth: {
    //           Username: "admin",
    //           Password: "xApNcMf4Xgkha",
    //         },
    //         url: "https://192.168.8.46:8080/api/send_sms",
    //         agent:agent,
    //         body: JSON.stringify({
    //             text:params.Text,
    //             port: [31],
    //             param: [
    //                 {
    //                   number:params.Telefono,
    //                   text_param:["bj"],
    //                   user_id:1
    //                 }
    //             ]
    //         }),
    //       },
    //       (err, response, bodys) => {
    //         const respuesta = JSON.parse(err);
    //         console.log(respuesta);
    //         // if (respuesta.error != null) {
    //         //   const request = respuesta.error.description;
    //         //   return res.status(200).send({ request });
    //         // } else {
    //         //   const request = respuesta.status;
    //         //   return res.status(200).send({ request });
    //         // }
    //       }
    //     );
    //   }

 
    //#endregion
    //#region tarifado 
    async CrearSector(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_crear_sector '${params.Descripcion}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha creado exitosamente el sector'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }
    async CrearRuta(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_crear_ruta '${params.IdSector}','${params.IdMunicipio}','${params.IdZona}','${params.IdUsuarioRegistro}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha creado exitosamente la ruta'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }
    async CrearRutaTarifa(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_crear_rutaTarifa '${params.IdSectorOrigen}','${params.IdSectorDestino}','${params.Monto}','${params.IdUsuarioRegistro}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha creado exitosamente la tarifa de la ruta'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }
    async EditarSector(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_editar_sector '${params.Descripcion}','${params.IdSector}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha editado exitosamente el sector'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }
    async EditarRuta(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_editar_ruta '${params.IdRuta}','${params.IdSector}','${params.IdMunicipio}','${params.IdZona}',
            '${params.IdUsuarioRegistro}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha editado exitosamente la ruta'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }
    async EditarRutaTarifa(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_editar_rutaTarifa '${params.IdRutaSector}','${params.IdSectorOrigen}','${params.IdSectorDestino}','${params.Monto}',
            '${params.IdUsuarioRegistro}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha editado exitosamente la tarifa de la ruta'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }     
    }
    async EliminacionRuta(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_eliminacion_ruta '${params.IdRuta}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha dado de baja la ruta'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }
    async ObtenerSector(req,res){
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_sector `)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }
    async ObtenerRuta(req,res){
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_Ruta`)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }
    async ObtenerRutaTarifa(req,res){
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_Tarifa`)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }
    async ObtenerTarifaRuta(req,res){
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_RutaTarifa`)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }
    async ObtenerMontoTarifa(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_obtener_monto '${params.IdMunicipioOrigen}','${params.IdZonaOrigen}','${params.IdMunicipioDestino}','${params.IdZonaDestino}'`)
            if (request != []) {
                return res.status(200).send({request})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }

    async CrearTarifaPedido(req, res){
        // PARAMETROS DE ENTRADA
        const params = req.body;
        
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_crear_TarifaPedido '${params.IdSectorOrigen}','${params.IdSectorDestino}','${params.Monto}','${params.IdPedido}',
            '${params.IdUsuarioRegistro}'`)
            if (request != []) {
                return res.status(200).send({message:'Se ha creado exitosamente la tarifa del pedido'})
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }   
    }
    //#endregion
}



const controller= new MainController();
module.exports = controller;