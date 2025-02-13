const btnTopo = document.getElementById('top');

    // Exibe o botão quando o usuário rolar 300px ou mais
    window.onscroll = function() {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTopo.classList.add('show');
      } else {
        btnTopo.classList.remove('show');
      }
    };

    // Quando o botão é clicado, rola até o topo
    btnTopo.onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

/* --botao-- */

let darkmode = document.getElementById("dark")

let dark = false

function mode(){
    
    const light = document.getElementById("colortheme")

    dark = !dark
    light.href = dark ? "darkmode3.css" : "style3.css"; // Trocar o arquivo CSS
    
}

/* menu cafe*/


function mudarconteudo(cafe) {
  const imagem = document.getElementById("imagemc");
  const titulo = document.getElementById("titulo");
  const subtitulo = document.getElementById("subtitulo");
  const fundomenu1 = document.getElementById("fundo1");
  const fundomenu2 = document.getElementById("fundo2");
  const fundomenu3 = document.getElementById("fundo3");
  const fundomenu4 = document.getElementById("fundo4");
  const menu = document.getElementById("menuzaogrid");
  let cafe1 = document.getElementById("cafe1menu");
  let cafe2 = document.getElementById("cafe2menu");
  let cafe3 = document.getElementById("cafe3menu");
  let cafe4 = document.getElementById("cafe4menu");

  switch (cafe) {
      case 1:
          imagem.src = "imgs/imagem_cafe_definitivo_1.png"
          titulo.textContent = "Espresso";
          subtitulo.textContent = "Short & intense - $19.50";

          if (dark == false){
            fundomenu1.style.backgroundColor = "white";
            fundomenu2.style.backgroundColor = "#dfdfdf";
            fundomenu3.style.backgroundColor = "#dfdfdf";
            fundomenu4.style.backgroundColor = "#dfdfdf";  
          }

          else{
            fundomenu1.style.backgroundColor = "#372922";
            fundomenu2.style.backgroundColor = "#231a16";
            fundomenu3.style.backgroundColor = "#231a16";
            fundomenu4.style.backgroundColor = "#231a16";
          }
          menu.style.gridTemplateColumns = "31% 23% 23% 23%";
          break;
      case 2:
          imagem.src = "imgs/imagem_cafe_definitivo_2.1.png";
          titulo.textContent = "Latte";
          subtitulo.textContent = "Creamy & smooth - $24.00";
          if (dark == false){
            fundomenu1.style.backgroundColor = "#dfdfdf";
            fundomenu2.style.backgroundColor = "white";
            fundomenu3.style.backgroundColor = "#dfdfdf";
            fundomenu4.style.backgroundColor = "#dfdfdf";  
          }

          else{
            fundomenu1.style.backgroundColor = "#231a16";
            fundomenu2.style.backgroundColor = "#372922";
            fundomenu3.style.backgroundColor = "#231a16";
            fundomenu4.style.backgroundColor = "#231a16";
          }
          menu.style.gridTemplateColumns = "23% 31% 23% 23%";
          break;
      case 3:
          imagem.src = "imgs/imagem_cafe_definitivo_3.1.png"
          titulo.textContent = "Cappuccino";
          subtitulo.textContent = "Rich & foamy - $22.50";
          if (dark == false){
            fundomenu1.style.backgroundColor = "#dfdfdf";
            fundomenu2.style.backgroundColor = "#dfdfdf";
            fundomenu3.style.backgroundColor = "white";
            fundomenu4.style.backgroundColor = "#dfdfdf";  
          }

          else{
            fundomenu1.style.backgroundColor = "#231a16";
            fundomenu2.style.backgroundColor = "#231a16";
            fundomenu3.style.backgroundColor = "#372922";
            fundomenu4.style.backgroundColor = "#231a16";
          }
          menu.style.gridTemplateColumns = "23% 23% 31% 23%";
          break;
      case 4:
          imagem.src = "imgs/imagem_cafe_definitivo_4.1.png"
          titulo.textContent = "Mocha";
          subtitulo.textContent = "Chocolate & coffee - $26.00";
          if (dark == false){
            fundomenu1.style.backgroundColor = "#dfdfdf";
            fundomenu2.style.backgroundColor = "#dfdfdf";
            fundomenu3.style.backgroundColor = "#dfdfdf";
            fundomenu4.style.backgroundColor = "white";  
          }

          else{
            fundomenu1.style.backgroundColor = "#231a16";
            fundomenu2.style.backgroundColor = "#231a16";
            fundomenu3.style.backgroundColor = "#231a16";
            fundomenu4.style.backgroundColor = "#372922";
          }
          menu.style.gridTemplateColumns = "23% 23% 23% 31%";
          break;
      default:
          imagem.style.backgroundImage = "url(imgs/cafe3_medio_pag3.png)";
          imagem.style.backgroundSize = "50%"
          titulo.textContent = "Espresso";
          subtitulo.textContent = "Short & Intense - $19.50";
          if (dark == false){
            fundomenu1.style.backgroundColor = "white";
            fundomenu2.style.backgroundColor = "#dfdfdf";
            fundomenu3.style.backgroundColor = "#dfdfdf";
            fundomenu4.style.backgroundColor = "#dfdfdf";  
          }

          else{
            fundomenu1.style.backgroundColor = "#372922";
            fundomenu2.style.backgroundColor = "#231a16";
            fundomenu3.style.backgroundColor = "#231a16";
            fundomenu4.style.backgroundColor = "#231a16";
          }
          menu.style.gridTemplateColumns = "31% 23% 23% 23%";
  }

}

document.addEventListener("DOMContentLoaded", function () {
  let imagemultimo = document.getElementById("imagemfinal");

  const mediaquery = window.matchMedia("(max-width: 1024px)");

  function atualizarImagem(e) {
    if (e.matches) {
      // Largura menor ou igual a 768px
      imagemultimo.src = "imgs/cafe28_pag3.png";
    } else {
      // Largura maior que 768px
      imagemultimo.src = "imgs/cafe9-pq.jpg";
    }
  }

  atualizarImagem(mediaquery);

  mediaquery.addEventListener("change", atualizarImagem);
});
