var numero = parseInt(prompt("Insira um número"));

function restar(numero){
   return numero % 9;
}

var restoDiv = restar(numero);
document.write("O resto de "+numero+" divididos por 9 é: "+restoDiv);