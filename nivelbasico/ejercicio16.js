/*let saludo =prompt("ingresa un saludo").toLowerCase();

if (saludo=== "hola " && saludo === "que tal") {

    alert("bien, gracias un gusto saludarte");

} else {
    alert("que mal. primero se saluda0");
}*/

/*DOM Document Objet Model obtener elemento del html
js puede acceder al DOM y modificar la pagina ademas tambien puede modificar los estilos de css eliminar o añadir elementos y atributos 
relacionados con la pagina, tambien reacciona a todos los eventos de la pagina*/

let datos = document.getElementById ("datos");

//funcion
const nombreUsuario = () =>{
    let nombre = prompt("ingresa tu nombre");
    //let numero = "valen";
    let nombre2="valen";

    alert("Tu nombre es: " + nombre);

    //numero = "Mary";
    //console.log(numero);
    
}
nombre2 = "Mary";
console.log(nombre2);
//funcion vacia
//eventos ONCLICK desde JAVASCRIPT
datos.onclick = function () {
    
    nombreUsuario();
}