var $btn = document.querySelector("#btn");

$btn.addEventListener("click", pegavalor);

function pegavalor(){
  if(validation() === true){
    var $altura = document.querySelector("#altura").value;
    var $peso = document.querySelector("#peso").value;
  
    $altura = parseFloat($altura);
    $peso = parseFloat($peso);
  
    const indice = imc_calc($altura, $peso);

    document.querySelector("#output").textContent = imc_resultado(indice);
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
    return "Muito abaixo do peso";

  if(indice >= 17 && indice <= 18.44) 
    return "Abaixo do peso";

  if(indice >= 18.5 && indice <= 24.99) 
    return "Peso normal";

  if(indice >= 25 && indice <= 29.99) 
    return "Acima do peso";

  if(indice >= 30 && indice <= 34.99) 
    return "Obesidade Grau I";

  if(indice >= 35 && indice <= 40) 
    return "Obesidade Grau II";

  if(indice > 40) 
    return "Obesidade Grau III";

}

function validation(){
  const $altura = document.querySelector("#altura").value;
  const $peso = document.querySelector("#peso").value;

  if(!$altura || !$peso){
    return false;
  }else{
    return true;
  }
}




