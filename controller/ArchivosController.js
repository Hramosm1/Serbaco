'use strict'
const multer = require('multer')
var path = require("path")

function subirImagen(req, res){

  //if(req.files){
    //console.log(req.params.body);
       var file_path = req.files.image.path;
       console.log(file_path);

      // var file_split = file_path.split('\\');
      // console.log(file_split);

      // var file_name = file_split[3];
      // console.log(file_name);

      // var ext_xplit = file_name.split('\.');
      // console.log(ext_xplit);

      // var file_ext = ext_xplit[1];
      // console.log(file_ext);
  //}
  


  // upload.single('image')
  // //res.send('Exitoso')
  // // const storage = multer.diskStorage({
  // //     destination: function (req, file, cb) {
  // //       cb(null, './uploadFile')
  // //     },
  // //     filename: function (req, file, cb) {
  // //       cb(null, `${file.fieldname}-${Date.now()}`)
  // //     }
  // //   })    
    
  // //   const upload = multer({ storage })
}
  module.exports ={ subirImagen};