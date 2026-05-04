// Juan Felipe Montañez Vanegas 1033101085

let edad = getelementbyId("edad").value;
let tipoDocumento = getelementbyId("tipoDocumento").value;
let numeroDocumento = getelementbyId("numeroDocumento").value;

let salario = getelementbyId("salario").value;
let comisiones = getelementbyId("comisiones").value;
let totalHorasExtra = getelementbyId("totalHorasExtra").value;
let nivelRiesgo = getelementbyId("nivelRiesgo").value;

// Prompts

validarUsuario(edad);

// Variables Para calculos

const salarioMin = 1750905;
const salarioMinIntegralVigente = 22761765;
const subsidioTransporte = 249095;
const UVT = 50.37;
const ingresobasecotizacion = 0.70;

const porcentajeFondoSolidario = 0.01;
const porcentajePension = 0.04;
const porcentajeSalud = 0.04;

const riesgo1 = 0.522;
const riesgo2 = 1.044;
const riesgo3 = 2.436;
const riesgo4 = 4.350;
const riesgo5 = 6.960;

// Niveles de Riesgos Array

const riesgos = [
    {nombre: "riesgo1", valor: 0.522},
    {nombre: "riesgo2", valor: 1.044},
    {nombre: "riesgo3", valor: 2.436},
    {nombre: "riesgo4", valor: 4.350},
    {nombre: "riesgo5", valor: 6.960},
];

function calcularporcentaje (base, porcentaje){
   let resultado = base * porcentaje
   return resultado;
}

let calculoIbc = ingresobasecotizacion * (salario + comisiones + totalHorasExtra);
let calculoSalud = calculoIbc * porcentajeSalud;
let calculoPension = calculoIbc * porcentajePension;

function validarUsuario (edadUsuario) {
console.log("Dentro de la funcion de validar usuario")
if (edad <18) {
    ("No se puede calcular porque es menor de edad");
}

else if (edad >= 18 && edad <= 25) {
    // No se calcula porque es beneficiario
}

else if (edad >= 25 && edad <= 60) {
    // Se calculan las obligaciones
}

edad > 60 ? pension : false;
}