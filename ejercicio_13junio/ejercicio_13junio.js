//13/jun/2016

//Ejercicio #1
/*Crear una función que tome los números de un arreglo entregado 
como parámetro y devuelva la suma de los elementos.

Probar con [1,2,3,4,5,6], el resultado debería ser 21, 
pero debe funcionar cualquier arreglo, si uno de los 
elementos no es un número deber ser ignorado.*/

/*
function suma_arreglo(arr){
	
	return arr.reduce(function(t,e){
		return t += isNaN(e) ? 0 : e;
	}, 0);
}

var mi_arreglo = [1, 2, 3, "a", 4, 5, 6];
console.log(suma_arreglo(mi_arreglo));
*/

//Ejercicio #2
/*Se está buscando una página que al hacer click en un div este cambie 
de color, el problema es que no queremos que esto pase cuando se haga 
click en las cosas que estan dentro del div, arreglar el código.*/

/*
$("#evento").click(function(){
	var color = "rgb("+ (parseInt(255*Math.random())+ "," + parseInt(255*Math.random()) + "," + parseInt(255*Math.random()));
	$(this).css("background-color", color);
});

$("#evento").on("click", "*", function(event) {
	event.stopPropagation();
})

$("p").click(function(event){
	event.stopPropagation();
});

$("#evento").append("<input type = 'button' value = 'soy un botón'/>");
*/

//Ejercicio #3

var personas = [];

$("BUTTON").click(function(){
	var nombre = $("#Nombre").val();
	var apellido = $("#Apellido").val();
	var apellido = $("#Email").val();
	var genero = $("#Genero").val();

	if ($("#Nombre").val() != "" && $("#Apellido").val() != "" && $("#Email").val() != "" && $("#Genero").val() != ""){
  	// Es correcto
  	var persona_nueva = new Persona($("#Nombre").val(), $("#Apellido").val(), $("#Email").val(), $("#Genero").val());
  	personas.push(persona_nueva);
  }else{
    alert("Asegurate de llenar todos los campos!");
  }
});

function Persona(nombre,apellido,email,genero){
	this.nombre = nombre;
	this.apellido = apellido;
	this.email = email;
	this.genero = genero;
}