// Realizar operaciones con dos números. Pedir al usuario que ingrese dos números
// diferentes y mayores a cero. Para ambos números, calcular lo siguiente: (1.5 Puntos)
// ● Suma
// ● Resta
// ● División
// ● Multiplicación
// ● Módulo

//Datos de entrada
// Se crean dos variables pidiendole al usuario sus valores
const num1 = Number(prompt("Ingrese el 1er numero, debe ser diferente y mayor que 0: "));
const num2 = parseInt(prompt("Ingrese el 2do numero, debe ser diferente y mayor que 0: "));

//Proceso de datos
// Se suman ambas variables y el resultado se guarda en una nueva
const suma = num1 + num2;

// Se restan ambas variables y el resultado se guarda en una nueva
const resta = num1 - num2;

// Se dividen ambas variables y el resultado se guarda en una nueva
const division = num1 / num2;

// Se multiplican ambas variables y el resultado se guarda en una nueva
const multiplicacion = num1 * num2;

// Se calcula el modulo entre ambas variables y el resultado se guarda en una nueva
const modulo = num1 % num2;

//Salida de datos
// Se muestra el resultado en el html del navegador
document.write(`-Valor de la suma: ${suma} `);
document.write(`-Valor de la resta: ${resta} `);
document.write(`-Valor de la division: ${division} `);
document.write(`-Valor de la multiplicacion: ${multiplicacion} `);
document.write(`-Valor del modulo: ${modulo}`);

