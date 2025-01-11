let conteiner1 = document.getElementById('c1')
let conteiner2 = document.getElementById('c2')
let conteiner3 = document.getElementById('c3')
let conteiner4 = document.getElementById('c4')

function hover(){
    conteiner1.style.display = 'flex'
}

function exit(){
    conteiner1.style.display = 'none'
}

function hover2(){
    conteiner2.style.display = 'flex'
}

function exit2(){
    conteiner2.style.display = 'none'
}

function hover3(){
    conteiner3.style.display = 'flex'
}

function exit3(){
    conteiner3.style.display = 'none'
}

function hover4(){
    conteiner4.style.display = 'flex'
}

function exit4(){
    conteiner4.style.display = 'none'
}

const btnTopo = document.getElementById('top');

    // Exibe o botão quando o usuário rolar 300px ou mais
    window.onscroll = function() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
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
