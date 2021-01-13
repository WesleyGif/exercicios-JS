var nome = prompt('Insira o seu nome: ');
document.write("<h1>Olá Sr."+nome+"</h1>");
var laranjas = prompt('Insira o número de laranjas a  dividir: ');
 var vizinhos = prompt('Insira o número de vizinho a entrar no rateio:');

 function divisao(nLaranja,nVizinho){       
    return Math.floor(laranjas / vizinhos);  
 }

 function sobra(nLaranja,nVizinho){
 
    return laranjas % vizinhos;
 }
 var divisaoExata = divisao(laranjas,vizinhos);
 var sobra = sobra(laranjas,vizinhos);
 document.write("<h2>Valor de laranjas para cada vizinho</h2> A quantidade de laranjas para cada vizinho é (são) de: " + divisaoExata + " Laranjas");
 document.write("<h2>Valor a sobrar para você </h2> Sobram "+sobra+" Laranjas");
