// Crear un programa que pida al usuario una cantidad de días y que muestre su
// equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
// resultado debe ser 1 año, 1 semana y 1 día. (3 Puntos)
// Se debe considerar lo siguiente:
// ● 1 año tiene 365 días
// ● 1 semana tiene 7 días
// Se recomienda usar la función Math.floor para obtener la parte entera de un número
// decimal.

//Datos de entrada
//const dias = Number(prompt("Ingrese la cantidad de días: "));
const dias = 890;
//Proceso de datos
//Calculos y comentarios del proceso realizados gracias al profesor
const anios = Math.floor(dias / 365); // el cociente entero de dias/365 da los años
const semanas = Math.floor((dias % 365) / 7); // residuo de dias/365 y despues el cociente entre 7 para semanas
const diasRestantes = (dias % 365) % 7; // residuo de dias/365 y despues residuo entre 7

//Salida de datos
// document.write(`Los ${dias} días ingresados corresponden a: Años: ${anios}  Semanas: ${semanas}  Dias: ${diasRestantes}`);

//NOTA: Para poder ejecutarlo en la terminal con Node hay que escribirlo de la siguiente forma: node assets/js/ejercicio4.js
console.log("Los " + dias + " dias ingresados corresponden a ---> " + `Años: ${anios} Semanas: ${semanas}  Dias: ${diasRestantes}`);