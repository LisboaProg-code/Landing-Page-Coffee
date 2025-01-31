let darkmode = document.getElementById("dark")

let dark = false

function mode(){
    
    const light = document.getElementById("colortheme")

    dark = !dark
    light.href = dark ? "darkmode4.css" : "style4.css"; // Trocar o arquivo CSS
    
}