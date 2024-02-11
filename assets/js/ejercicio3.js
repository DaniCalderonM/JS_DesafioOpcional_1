// Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que
// la transforme a grados Kelvin y Fahrenheit.
// Se debe considerar la siguiente información respecto a la equivalencia de las escalas
// de temperatura:
// ● 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos
// es 0 °C + 273.15 = 273.15 K
// ● 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos
// es (0 °C × 9/5) + 32 = 32 °F

//Datos de entrada
// Se crea la variable pidiendole al usuario su valor
const celcius = Number(prompt("Ingrese la Tº en grados Celcius"));

//Proceso de datos
// Se calcula mediante la formula los grados kelvin y se guarda en una variable
const kelvin = celcius + 273.15;

// Se calcula mediante la formula los grados fahrenheit y se guarda en una variable
const fahrenheit = (celcius * 9/5) + 32;


//Salida de datos
// Se muestra el resultado en el html del navegador
document.write(`-La Temperatura ${celcius}º Celcius en grados Kelvin es de: ${kelvin} `);
document.write(`-La Temperatura ${celcius}º Celcius en grados Fahrenheit es de: ${fahrenheit} `);