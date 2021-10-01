var switchButton = document.querySelector(".lightDarkMode")
switchButton.addEventListener("click", switchTheme)

function switchTheme(){
    document.querySelector("#moon").classList.toggle("themeOff")
    document.querySelector("#sun").classList.toggle("themeOff")
    document.querySelector(".btn").classList.toggle("lightModeBtn")
    document.querySelector("h1").classList.toggle("titleLight")
    document.querySelector(".imc_menu").classList.toggle("imc_menu_Light")

}