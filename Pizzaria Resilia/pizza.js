      var valorProducao = prompt("Insira o custo de produção da pizza: ");
      var valorVenda = prompt("Insira o valor de venda da pizza: ");
      var nomePizza = prompt("O nome da pizza: ");

      function calcularImposto (venda){
         return venda*0.089;
      }


      function lucroLiquido(valor,custo,valorImposto){

         return   (valor - (custo - valorImposto))*-1;
      }
      var imposto = calcularImposto(valorVenda);
      var lucro = lucroLiquido(valorProducao,valorVenda,imposto);
      document.write("Para a pizza " +nomePizza+ " o lucro líquido é de R$ " + lucro.toFixed(2) + " e o imposto é de: R$: " + imposto.toFixed(2));