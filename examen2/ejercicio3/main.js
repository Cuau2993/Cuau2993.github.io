
function Telefono(numero,marca,color,contador){
	this.numero = numero;
	this.marca = marca;
	this.color = color;
	this.contador = 0;
	this.marcar = function(otro_telefono){
		otro_telefono.contador = otro_telefono.contador + 1;
		console.log(this.numero, "marca a", otro_telefono.numero);
		console.log(otro_telefono.contador);
	};
};



var cel1 = new Telefono(8116927287,"Android","negro",0);

var cel2 = new Telefono(8183106629,"Fijo","blanco",0);

console.log(cel1);
console.log(cel2);

cel1.marcar(cel2);
cel1.marcar(cel2);