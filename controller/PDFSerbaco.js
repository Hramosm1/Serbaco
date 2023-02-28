const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const { PDFDocument, StandardFonts } = require("pdf-lib");
const { writeFileSync } = require("fs");


class MainController{
  
    
    async fichaPDF(req, res){
       // PARAMETROS DE ENTRADA
       const IdPedido = req.params.IdPedido
       try {
           const request = await prisma.$queryRawUnsafe(`execute obtener_datos_fichaPDF '${IdPedido}'`)
           if (request != []) {
               return res.status(200).send({request})
           } else {
               return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
           }

       } catch (error) {
           return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
       }  
        // const document = await PDFDocument.create();

        // const page = document.addPage([16, 16]);
      
        // const text = "Hello World";
        // const helveticaFont = await document.embedFont(StandardFonts.Helvetica);
        // const textWidth = helveticaFont.widthOfTextAtSize(text, 24);
        // const textHeight = helveticaFont.heightAtSize(24);
      
        // page.drawText(text, {
        //   x: page.getWidth() / 2 - textWidth / 2,
        //   y: page.getHeight() / 2 - textHeight / 2,

        // });

        // writeFileSync("hello.pdf", await document.save());
        // try {
        //     const request = await prisma.$queryRawUnsafe(`execute obtener_datos_fichaPDF '${IdPedido}'`)
        //     if (request != []) {
        //         // this.JsonFichaPDF = request;
        //         // console.log(this.JsonFichaPDF);
        //         return res.status(200).send({ message:request})
        //     } else {
        //         return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
        //     }
    
        // } catch (error) {
        //     return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        // }
        
    }
  
}


const controller= new MainController();
module.exports = controller;