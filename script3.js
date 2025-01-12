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
          imagem.style.backgroundImage = "url(imgs/cafe_medio_pag3.png)";
          titulo.textContent = "Espresso";
          subtitulo.textContent = "Short & intense - $19.50";
          fundomenu1.style.backgroundColor = "white";
          fundomenu2.style.backgroundColor = "#dfdfdf";
          fundomenu3.style.backgroundColor = "#dfdfdf";
          fundomenu4.style.backgroundColor = "#dfdfdf";
          menu.style.gridTemplateColumns = "31% 23% 23% 23%";
          cafe1.style.backgroundPosition = "45% -45%"
          break;
      case 2:
          imagem.style.backgroundImage = "url(imgs/cafe2_medio_pag3.png)";
          titulo.textContent = "Latte";
          subtitulo.textContent = "Creamy & smooth - $24.00";
          fundomenu1.style.backgroundColor = "#dfdfdf";
          fundomenu2.style.backgroundColor = "white";
          fundomenu3.style.backgroundColor = "#dfdfdf";
          fundomenu4.style.backgroundColor = "#dfdfdf";
          menu.style.gridTemplateColumns = "23% 31% 23% 23%";
          cafe1.style.backgroundSize = "250%"
          cafe1.style.backgroundPosition = "50% -55%"
          cafe2.style.backgroundSize = "160%"
          cafe2.style.backgroundPosition = "50% 60%"
          break;
      case 3:
          imagem.style.backgroundImage = "url(imgs/cafe3_medio_pag3.png)";
          titulo.textContent = "Cappuccino";
          subtitulo.textContent = "Rich & foamy - $22.50";
          fundomenu1.style.backgroundColor = "#dfdfdf";
          fundomenu2.style.backgroundColor = "#dfdfdf";
          fundomenu3.style.backgroundColor = "white";
          fundomenu4.style.backgroundColor = "#dfdfdf";
          menu.style.gridTemplateColumns = "23% 23% 31% 23%";
          cafe1.style.backgroundSize = "250%"
          cafe1.style.backgroundPosition = "50% -55%"
          cafe3.style.backgroundSize = "110%"
          cafe3.style.backgroundPosition = "50% 80%"
          break;
      case 4:
          imagem.style.backgroundImage = "url(imgs/cafe4_medio_pag3.png)";
          titulo.textContent = "Mocha";
          subtitulo.textContent = "Chocolate & coffee - $26.00";
          fundomenu1.style.backgroundColor = "#dfdfdf";
          fundomenu2.style.backgroundColor = "#dfdfdf";
          fundomenu3.style.backgroundColor = "#dfdfdf";
          fundomenu4.style.backgroundColor = "white";
          menu.style.gridTemplateColumns = "23% 23% 23% 31%";
          cafe1.style.backgroundSize = "250%"
          cafe1.style.backgroundPosition = "50% -55%"
          cafe4.style.backgroundSize = "145%"
          cafe4.style.backgroundPosition = "40% 57%"
          break;
      default:
          imagem.style.backgroundImage = "url(imgs/cafe_medio_pag3.png)";
          titulo.textContent = "Espresso";
          subtitulo.textContent = "Short & Intense - $19.50";
          fundomenu1.style.backgroundColor = "white";
          fundomenu2.style.backgroundColor = "#dfdfdf";
          fundomenu3.style.backgroundColor = "#dfdfdf";
          fundomenu4.style.backgroundColor = "#dfdfdf";
          menu.style.gridTemplateColumns = "31% 23% 23% 23%";
          cafe1.style.backgroundPosition = "45% -850%"
  }

}
