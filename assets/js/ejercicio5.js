// Crear un programa que solicite al usuario 5 números y realice los cálculos que se piden
// a continuación. (2 Puntos)
// ● La suma de todos los números.
// ● El promedio de los 5 números ingresados.

//Datos de entrada
const num1= Number(prompt("Ingrese el primer número: "));
const num2= Number(prompt("Ingrese el segundo número: "));
const num3= Number(prompt("Ingrese el tercero número: "));
const num4= Number(prompt("Ingrese el cuarto número: "));
const num5= Number(prompt("Ingrese el quinto número: "));
//Proceso de datos
const suma = num1 + num2 + num3 + num4 + num5;
const promedio = suma/5;
//Salida de datos
document.getElementById("respuesta").innerHTML=(` El resultado de la suma de los cinco numeros ingresados es: ${suma}, y el promedio de dichos números es: ${promedio}`);