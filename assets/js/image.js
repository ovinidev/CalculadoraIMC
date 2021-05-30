function change(colorImg, color, text){
  document.querySelector(".image").src="./assets/images/" + colorImg + "_imc.svg";
  document.querySelector("#output").style.color = color;
  document.querySelector("#output").textContent = text;
  document.querySelector(".result").style.transition = "easy 1s";
}
