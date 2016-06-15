var	suma = 0;
do {
  var	ingreso	=	prompt("ingresa un número");
  isNaN(ingreso) ? alert("Eso no es un número") : suma = suma + parseInt(ingreso);
}
while	(ingreso !=	"fin");

console.log(suma);