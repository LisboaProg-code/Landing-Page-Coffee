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
