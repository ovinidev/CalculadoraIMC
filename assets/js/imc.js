var $btn = document.querySelector("#btn");

$btn.addEventListener("click", pegavalor);

function pegavalor(){
  if(validation() === true){
    var $altura = document.querySelector("#altura").value;
    var $peso = document.querySelector("#peso").value;
  
    $altura = parseFloat($altura);
    $peso = parseFloat($peso);
  
    const indice = imc_calc($altura, $peso);

    imc_resultado(indice);
    
  }else{
    alert("Digite os valores em todos os campos");
  }
}


function imc_calc(altura, peso){

  var imc = peso / (altura*altura);

  return imc;
}


function imc_resultado(indice){
  if(indice < 16) return "Não existe um resultado para valores de IMC abaixo de 16.";

  if(indice >= 16 && indice <= 16.99) 
    return change("red", "#f60a0a", "Muito abaixo do peso");

  if(indice >= 17 && indice <= 18.44) 
    return change("yellow", "#e2fa08", "Abaixo do peso");

  if(indice >= 18.5 && indice <= 24.99) 
  return change("green", "#20f00d", "Peso normal");

  if(indice >= 25 && indice <= 29.99) 
    return change("yellow", "#e2fa08", "Acima do peso");

  if(indice >= 30 && indice <= 34.99) 
    return change("red", "#f60a0a", "Obesidade Grau I");

  if(indice >= 35 && indice <= 40) 
    return change("red", "#f60a0a", "Obesidade Grau II");

  if(indice > 40) 
    return change("red", "#f60a0a", "Obesidade Grau III");

}

function validation(){
  const $altura = document.querySelector("#altura").value;
  const $peso = document.querySelector("#peso").value;

  if($altura >= 100){
    alert("Digite a altura em metros");
    return;
  }

  if(!$altura || !$peso){
    return false;
  }else{
    return true;
  }
}




