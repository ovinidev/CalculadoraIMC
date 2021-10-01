var switchButton = document.querySelector(".lightDarkMode")
switchButton.addEventListener("click", switchTheme)

let x = 0

function switchTheme(){
    document.querySelector("#moon").classList.toggle("themeOff")
    document.querySelector("#sun").classList.toggle("themeOff")
    document.querySelector(".btn").classList.toggle("lightModeBtn")
    document.querySelector("h1").classList.toggle("titleLight")
    document.querySelector(".imc_menu").classList.toggle("imc_menu_Light")
    document.querySelector("body").classList.toggle("light")


    if(x == 0){
        document.querySelector(".image-bike").src = "./assets/images/undraw_indoor_bike_pwa4-blue.svg"
        x = 1
    }else{
        document.querySelector(".image-bike").src = "./assets/images/undraw_indoor_bike_pwa4.svg"
        x = 0
    }
}