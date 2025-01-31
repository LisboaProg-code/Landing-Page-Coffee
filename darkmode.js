/* quando o botao for de dark mode for clicado */

let darkmode = document.getElementById("dark")

let dark = false

function mode(){
    
    const light = document.getElementById("colortheme")

    dark = !dark
    light.href = dark ? "darkmode.css" : "style.css"; // Trocar o arquivo CSS
    
}