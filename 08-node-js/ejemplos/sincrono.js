const fs = require("fs");

//leer un archivo
const archivo = fs.readFileSync("index.html", "utf-8")
console.log("1er paso");
fs.renameSync("index.html", "vista.html")
console.log("2do paso");
fs.appendFileSync("vista.html", "<h1>Información adicional</h1>")
console.log("3er paso");    
fs.writeFileSync("vista.html", "<h1>el clima de hoy será soleado</h1>")
console.log("4to paso");
fs.unlinkSync("vista.html")
console.log("5to paso, se ha eliminado archivo");