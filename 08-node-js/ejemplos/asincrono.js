// Para llamar a archivos 
const fs = require("fs");
fs.readFile("index.html", "utf-8", (err, contenido) => {
   if (err){
        console.log(err);
   }else{
        console.log(contenido);
   }
});
/*
//para renombrar archivos
fs.rename("index.html", "vista.html", err => {
    if (err){
        throw err;
    }
});
*/
//agregar informacion al final
fs.appendFile("vista.html", "<h1>Información adicional</h1>", err => {
    if (err){
        throw err;
    }
    console.log("Se ha añadido información al final del archivo");
});

//remplazar todo el contenido del archivo
fs.writeFile("vista.html", "<h1>el clima de hoy será soleado</h1>", err => {
    if (err){
        throw err;
    }
    console.log("Se ha reemplazado todo el contenido del archivo");
});

//eliminar un archivo
fs.unlink("vista.html", err => {
    if (err){
        throw err;
    }
    console.log("Se ha eliminado el archivo");
});

//crear un archivo
fs.writeFile("index.html", "<h1>Hola mundo</h1>", err => {
    if (err){
        throw err;
    }
    console.log("Se ha creado el archivo");
});