let googleSheet = require('../controller/spreedsheet');

const obtenerVideos = async (req,res) => {
    registros = await googleSheet.accederGoogleSheets();
   
    console.log(registros);
    registros.forEach(element => {
        let params = element._rowNumber
        console.log(params);
        
    });
   
}


module.exports = {
    obtenerVideos: obtenerVideos
}