//funcion prompt al igual que alert se utiliza cuando el usuario ingresa datos del teclado
prompt("Ingresa tu nombre");

//alert("wellcome to Tesla Band");
//prompt("Escribe el nombre");
//ventana de alerta que solicita confirmación //ejercicio 4
//confirm("¿quieres salir de la pagina?");
//ejercicio 5 
//variables // var es una palabra reservada que sirve para solo ser utilizada para el lenguaje

//scope  global
//asignar un valor 
//var nombre = "pepe";
//se pueden remplazar de esta manera 
//nombre= "pipo";
//se usa solo para que funcione en un bloque de codigo
//y en cso de remplazar debe ser dentro del mismo es mas usado y recomendado  
//por que es seguro a la hora de que mis datos no puedan ser remplazados libremente en todo el código
//algo que var si se podria remplazar en cualquier parte de mi código
//controlamos donde se puede cambiar y donde no
//console.log(nombre);
// ejercicio6
//let nombre = "prps";
//nombre = "pepita";

//console.log(nombre);

//ejercicio7 const: Es esa variable que se usa en datos que no cambian/ no se puede remplazar el valor
//

//const nombre = "pepa"

// ejercicio8 tipos de datos
// variables primitivas
let nombre = "pepa"; //string
let edad = 25; //entero/int
let sueldo = 25.5;// float
let hijos= false;//bolean
let cedula =123547778; //deben estar en string pesa menos un string a un int 
let celular ="12345678";//string 
//camelcase
let fechadeRegistro = new Date();//saca la fecha completa 
//la fecha real en el momento

console.log("hola " + 
nombre +
" tu edad es: " +
edad +
"tu sueldo es: " +
sueldo +
"tienes hijos: " +
hijos+ fechadeRegistro);
