var n = prompt("Escribe el tamaño del lado del cuadrado");
var m = n;

for(var r=0;r<n;r=r+1){
	str='';
	for(var c=0;c<m;c=c+1){
		if(c == 0){
			str+='*';
	}else if (c == n){
		str+='*';
	}else if (r == 0){
		str+='*';
	}else if (r == n){
		str+='*';
	}
}
	console.log(str);
}