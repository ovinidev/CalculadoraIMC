var switchButton = document.querySelector(".lightDarkMode")
switchButton.addEventListener("click", switchTheme)

function switchTheme(){
    document.querySelector("#moon").classList.toggle("themeOff")
    document.querySelector("#sun").classList.toggle("themeOff")
    

}