const express = require('express');
const controller = require('../controller/LoginController');
const controllerPedido = require('../controller/PedidoController')
const sheet = require('../controller/spreedsheet');
const optacheck = require('../controller/OptacheckController')
const imagen = require('../controller/ArchivosController')
const controllerPDF = require('../controller/PDFSerbaco')
const router = express();

//#region Controlador del LOGIN 
//Controlador del LOGIN
router.post('/login',controller.login);
router.get('/navbar/:id',controller.navBarFather);
router.get('/navbarSon/:id',controller.navBarSon);
//#endregion
//#region Controlador de los comboBox, pedidos
//Controlador de los comboBox, pedidos
router.get('/comboDepartamento',controllerPedido.ComboDepartamento);
router.get('/comboMunicipio/:id',controllerPedido.ComboMunicipio);
router.get('/comboZona/:id',controllerPedido.ComboZona);
router.get('/comboColonia/:id',controllerPedido.ComboColonia);
router.get('/comboCliente',controllerPedido.ComboCliente);
router.get('/ComboTipoCuentaBancaria',controllerPedido.ComboTipoCuentaBancaria);
router.get('/ComboTipoProducto',controllerPedido.ComboTipoProducto);
router.get('/ComboBanco',controllerPedido.ComboBanco);
router.get('/ComboTipoPago',controllerPedido.ComboTipoPago);
router.get('/ComboMunicipioDireccion/:id',controllerPedido.ComboMunicipioDireccion);
router.get('/ComboSocioCliente/:id',controllerPedido.ComboSocioCliente);
//#endregion
//#region ABM de los socios
//ABM de los socios
router.post('/agregarCliente',controllerPedido.AgregarCliente);
router.post('/AgregarDatosSocio',controllerPedido.AgregarDatosSocio);
router.get('/ObtenerSocios',controllerPedido.ObtenerSocios)
router.post('/AgregarDireccionSocio',controllerPedido.AgregarDireccionSocio);
router.get('/ObtenerParametrosSocio/:id',controllerPedido.ObtenerParametrosSocio);
router.post('/AgregarContactoSocio',controllerPedido.AgregarContactoSocio);
router.post('/AgregarTelefonos',controllerPedido.AgregarTelefonos);
router.post('/AgregarCuentaBancaria',controllerPedido.AgregarCuentaBancaria);
router.post('/AgregarCorreos',controllerPedido.AgregarCorreos);
router.get('/ObtenerContactosSocio/:id',controllerPedido.ObtenerContactosSocio);
router.get('/ComboTipoTelefono',controllerPedido.ComboTipoTelefono);
router.get('/ComboTipoCorreo',controllerPedido.ComboTipoCorreo);
//#endregion
//#region Listar la informacion de los socios
//Listar la informacion de los socios
router.get('/ListarDireccionesSocio/:id',controllerPedido.ListarDireccionesSocio);
router.get('/ListarContactosSocio/:id',controllerPedido.ListarContactosSocio);
router.get('/ListarDatosFinancieros/:id',controllerPedido.ListarDatosFinancieros);
router.get('/ObtenerTelefonoSocio/:id',controllerPedido.ObtenerTelefonoSocio);
//#endregion
//#region apis para consumir para obtener la informacion de los pedidos
//apis para consumir para obtener la informacion de los pedidos 
router.get('/ObtenerClienteCombo/:id',controllerPedido.ObtenerClienteCombo);
router.get('/ObtenerDireccionClientes/:id',controllerPedido.ObtenerDireccionClientes);
router.post('/AgregarPedido',controllerPedido.AgregarPedido);
router.get('/ObtenerFormaPago',controllerPedido.ObtenerFormaPago);
router.get('/ObtenerTipoPedido',controllerPedido.ObtenerTipoPedido);
router.get('/ListadoPedidos/:id',controllerPedido.ListadoPedidos);

router.post('/AgregarDatosMunicipio',controllerPedido.AgregarDatosMunicipio);
router.post('/AgregarDatosZona',controllerPedido.AgregarDatosZona);
router.post('/AgregarDatosColonia',controllerPedido.AgregarDatosColonia);
//#endregion
//#region Actualizacion de  datos de los socios seleccionados
//Actualizacion de  datos de los socios seleccionados
router.post('/EditarDatosSocio',controllerPedido.EditarDatosSocio);
router.get('/ObtenerDatosFinancierosId/:id',controllerPedido.ObtenerDatosFinancierosId);
router.post('/EditarDatosFinancieros',controllerPedido.EditarDatosFinancieros);
router.get('/ObtenerDatosContactoId/:id',controllerPedido.ObtenerDatosContactoId);
router.post('/EditarDatosContacto',controllerPedido.EditarDatosContacto);
router.get('/ObtenerDireccionSocioId/:id',controllerPedido.ObtenerDireccionSocioId);
router.post('/EditarDireccionSocio',controllerPedido.EditarDireccionSocio);
router.post('/CrearCuenta',controllerPedido.CrearCuenta);
router.get('/ObtenerSociosId/:id',controllerPedido.ObtenerSociosId);
router.post('/EditarDatosPedidosSocio',controllerPedido.EditarDatosPedidosSocio);
router.post('/EditarDatosPedidosContacto',controllerPedido.EditarDatosPedidosContacto);
router.post('/EditarDatosPedido',controllerPedido.EditarDatosPedido);
//#endregion
//#region Creacion de los datos de los clientes  CF
//Creacion de los datos de los clientes CF
router.get('/obtenerDatosClienteCF',controllerPedido.obtenerDatosClienteCF);
router.get('/obtenerDatosDireccionClienteCF/:id',controllerPedido.obtenerDatosDireccionClienteCF);
router.get('/obtenerHistorialEstado/:id',controllerPedido.obtenerHistorialEstado);
router.get('/listarEstado',controllerPedido.listarEstado);
router.post('/CambioEstadoPedido',controllerPedido.CambioEstadoPedido);
router.get('/fechaHoraEntrega',controllerPedido.fechaHoraEntrega);
router.post('/EditarDatosPedidosClienteCF',controllerPedido.EditarDatosPedidosClienteCF);
//#endregion
//#region Creacion de los domiciliares
//Creacion de los domiciliares
router.post('/AgregarDomiciliar',controllerPedido.AgregarDomiciliar);
router.get('/ObtenerDomiciliar',controllerPedido.ObtenerDomiciliar);
router.post('/AsignacionDomiciliar',controllerPedido.AsignacionDomiciliar);
router.get('/ObtenerListadoDomiciliar',controllerPedido.ObtenerListadoDomiciliar);
router.get('/ObtenerDomiciliarSeleccionado/:id',controllerPedido.ObtenerDomiciliarSeleccionado);
router.post('/EditarDomiciliar',controllerPedido.EditarDomiciliar);
router.get('/ObtenerDomiciliarSeleccionadoPedido/:id',controllerPedido.ObtenerDomiciliarSeleccionadoPedido);
router.post('/EdicionAsignacionDomiciliar',controllerPedido.EdicionAsignacionDomiciliar);
router.post('/DeBajaDomiciliar',controllerPedido.DeBajaDomiciliar);
//#endregion
//#region Filtros para los pedidos
//Filtros para los pedidos
router.get('/filtroFecha/:id/:idSocio',controllerPedido.filtroFecha);
router.get('/filtroRangoFecha/:fechaDesde/:fechaHasta/:idSocio',controllerPedido.filtroRangoFecha);
router.get('/filtroEstado/:IdEstado/:idSocio',controllerPedido.filtroEstado);
router.get('/filtroDomiciliar/:IdDomiciliarRecepcion/:IdDomiciliarEntrega/:opcion',controllerPedido.filtroDomiciliar);
router.get('/filtroSocio/:IdSocio',controllerPedido.filtroSocio);
router.get('/busquedaPedido/:IdSocio/:IdPedido',controllerPedido.busquedaPedido);
//#endregion
//#region concepto de pago
//concepto de pago
router.get('/ComboConceptoPago',controllerPedido.ComboConceptoPago);
router.post('/AgregarDetallePago',controllerPedido.AgregarDetallePago);
router.get('/obtenerDetallePedido/:IdPedido',controllerPedido.obtenerDetallePedido);
router.post('/AgregarContactoMasivo',controllerPedido.AgregarContactoMasivo);
router.post('/AgregarDireccionMasivo',controllerPedido.AgregarDireccionMasivo);
router.get('/ListadoPagoLiquidaciones/:fechaDesde',controllerPedido.ListadoPagoLiquidaciones);
router.post('/AgregarLiquidaciones',controllerPedido.AgregarLiquidaciones);

router.post('/EdicionDetalleImportePago',controllerPedido.EdicionDetalleImportePago);
router.get('/IdDetalleImportePedido/:IdDetalleImportePago',controllerPedido.IdDetalleImportePedido);
router.post('/EdicionMontoCobroPedido',controllerPedido.EdicionMontoCobroPedido);
//#endregion
//#region Reporteria serbaco
//Reporteria serbaco
router.get('/ReporteSocio',controllerPedido.ReporteSocio);
router.get('/ReporteSocioConsumidorFinal',controllerPedido.ReporteSocioConsumidorFinal);
router.get('/TablaReporteria',controllerPedido.tablaReporteria);
//#endregion
//#region Mensajeria TIGO
//Mensajeria TIGO
router.post('/DatosApiTigo',controllerPedido.DatosApiTigo);
router.get('/InformacionTigo',controllerPedido.InformacionTigo);
router.get('/InformacionSocioMensajeria/:IdPedido',controllerPedido.InformacionSocioMensajeria);
//#endregion
//#region Tarifas SERBACO
//Tarifas SERBACO
router.post('/CrearSector',controllerPedido.CrearSector);
router.post('/CrearRuta',controllerPedido.CrearRuta);
router.post('/CrearRutaTarifa',controllerPedido.CrearRutaTarifa);
router.post('/EditarSector',controllerPedido.EditarSector);
router.post('/EditarRuta',controllerPedido.EditarRuta);
router.post('/EditarRutaTarifa',controllerPedido.EditarRutaTarifa);
router.post('/EliminacionRuta',controllerPedido.EliminacionRuta);
router.get('/ObtenerSector',controllerPedido.ObtenerSector);
router.get('/ObtenerRuta',controllerPedido.ObtenerRuta);
router.get('/ObtenerRutaTarifa',controllerPedido.ObtenerRutaTarifa);
router.get('/ObtenerTarifaRuta',controllerPedido.ObtenerTarifaRuta);
router.post('/ObtenerMontoTarifa',controllerPedido.ObtenerMontoTarifa);
router.post('/CrearTarifaPedido',controllerPedido.CrearTarifaPedido);
//#endregion
//#region Google Sheets
//Google Sheets
router.get('/SpreadSheet2',sheet.ListadoPedidoSocio);
//#endregion
//#region Optacheck
router.post('/optacheck/misionEntrega',optacheck.CreacionMisionesApiOptacheckEntrega);
router.post('/optacheck/misionRecepcion',optacheck.CreacionMisionesApiOptacheckRecepcion);
router.get('/optacheck/eliminarMision/:IdMision',optacheck.EliminarMisionApiOptacheck);
router.post('/optacheck/misionRespuestaEntrega',optacheck.envioMisionesRespuesta);

router.post('/envioCorreo/:IdPedido',optacheck.EnvioCorreo);
router.get('/CambioEstado',optacheck.CambioEstado);
//#endregion
//#region PDF
router.get('/fichaPDF/:IdPedido',controllerPDF.fichaPDF);
//#endregion
module.exports = router;