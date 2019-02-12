// Uso de Let y Const
//var nombre = "Ricardo Tapia";
//var edad = 23;
/*var PERSONAJE = {
  nombre: nombre,
  edad: edad
};*/
// Respuesta
var nombre = "Ricardo Tapida";
var edad = 23;
var PERSONAJES = {
    nombre: nombre,
    edad: edad
};
console.log(nombre, edad);
console.log(PERSONAJES);
function superMision(dc) {
    console.log("El nombre de batman es: " + dc.nombre);
}
;
var batman = {
    nombre: "Bruno Díaz"
    //artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
};
superMision(batman);
// Convertir esta funcion a una funcion de flecha
/*function resultadoDoble( a, b ){
  return (a + b) * 2
}*/
//Respuesta
var resultadoDoble = function (a, b) { return (a + b) * 2; };
console.log(resultadoDoble);
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, poder, arma) {
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + poder;
    }
}
;
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
