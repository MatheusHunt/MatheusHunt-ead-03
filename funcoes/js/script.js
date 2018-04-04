
function media(num1,num2){
  var aux_media = (num1 + num2) / 2;
  console.log("A Média dos números " + num1 + " e " + num2 + " é :" +aux_media);
  
}

aux_1 = parseFloat(prompt("Digite o primeiro número: "));
aux_2 =parseFloat(prompt("Digite o segundo número : "));
media(aux_1,aux_2);


function escreveNumerosAte(aux_ini, aux_qtde){
  for(var i=aux_ini; i < aux_qtde; i++){

    console.log("Sequência de números: " + i);
    
    }
}
aux_numinicial = parseFloat(prompt("Digite o número inicial: "));
aux_numqtde = parseFloat(prompt("Digite a quantidade :"));
escreveNumerosAte(aux_numinicial,aux_numqtde);


function divisiveisPor(numero,divisor){
  if ((numero % divisor) === 0){
    console.log(numero + " é divisível por : " + divisor);
  }
  else{
    console.log(numero + " não é divisível por : " + divisor);
  }
}

   aux_numero = parseFloat(prompt("Digite o número: "));
   aux_divisor = parseFloat(prompt("Digite o número divisor :"));
   divisiveisPor(aux_numero,aux_divisor);
  

  function maiorMenor (num1, num2){
    if (num1 > num2){
      console.log(num1 + " é maior que: " + num2);
    }
    else{
      console.log(num2 + " é maior que: " + num1);
    }
  }

  aux_num1 = parseFloat(prompt("Digite o primeiro número: "));
  aux_num2 = parseFloat(prompt("Digite o segundo número: "));
  maiorMenor(aux_num1,aux_num2);