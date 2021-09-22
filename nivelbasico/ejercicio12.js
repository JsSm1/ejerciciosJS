/*condicionales - Switch
Funciona similar a las condicionales if/else, ya que la condicional switch 
solo se puede validar una sola condición entre varios case y es utilizada cuando no 
necesitamos comparar igualar o negar una condicion u otra
*/

let nombre = prompt("ingresa un nombre");
let edad = prompt("ingresa un numero par hasta 10");

switch (edad) {
    case "2":
        alert("perfecto si es número par");
        break;
    case "4":
        alert("perfecto si es número par");
        break;

    case "6":
        alert("perfecto si es número par");
        break;

    case "8":
        alert("perfecto si es número par");
        break;

    case "10":
        alert("perfecto si es número par");
        break;

    default:
        alert("no es un numero par");
        break;
}