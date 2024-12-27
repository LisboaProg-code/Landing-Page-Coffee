// Seleção de elementos
const apresentacao = document.getElementById('apresentacao');
const circles = document.querySelectorAll('.circle');
const text = document.getElementById('title')

// Array de imagens na ordem desejada
const imagens = [
    'imgs/cafe2.jpg',    // 1ª imagem
    'imgs/cafe4.jpg',    // 2ª imagem
    'imgs/cafe14.jpg',   // 3ª imagem
    'imgs/cafe15.jpg'    // 4ª imagem
];

const posicoes = [
    'center',                // Posição para img2
    'top 60% left 50%',      // Posição para img4
    'bottom 70%',          // Posição para img14
    'top 30% left 25%'       // Posição para img15
];

const texto = [
    'Elite Coffee Brands',
    'Hot and tasty coffee',
    'Dedicated coffee fans',
    'Celebrate coffee brands'
]

// Array correspondente às bolinhas (ordem fixa)
const bolinhas = [
    document.getElementById('circle_top'),            // 1ª bolinha
    document.getElementById('circle_middle'),         // 2ª bolinha
    document.getElementById('circle_middle_bottom'),  // 3ª bolinha
    document.getElementById('circle_bottom')          // 4ª bolinha
];



let indice = 0; // Índice inicial

// Atualiza a imagem de fundo e ativa a bolinha correspondente
function atualizarImagem() {
    apresentacao.style.backgroundImage = `url(${imagens[indice]})`;
    apresentacao.style.backgroundSize = 'cover';
    apresentacao.style.backgroundPosition = posicoes[indice];
    text.innerText = texto[indice]


    // Atualiza as bolinhas
    bolinhas.forEach((bolinha, i) => {
        bolinha.classList.toggle('active', i === indice);
    });
}

// Navega para a próxima imagem
function proximo() {
    indice = (indice + 1) % imagens.length; // Avança na ordem
    atualizarImagem();
}

// Navega para a imagem anterior
function anterior() {
    indice = (indice - 1 + imagens.length) % imagens.length; // Retrocede na ordem
    atualizarImagem();
}

// Adiciona eventos aos botões
document.getElementById('next').addEventListener('click', proximo);
document.getElementById('anterior').addEventListener('click', anterior);

// Inicializa com a primeira imagem
atualizarImagem();


/* -------------------------- */

let perfil = document.getElementById('foto')
let nome = document.getElementById('nomeperfil')

const feedback = [
    'imgs/homem1.jpg',
    'imgs/homem2.jpg',
    'imgs/homem3.jpg',
    'imgs/homem4.jpg'
]

const nomes = [
    'Dennis Wilson',
    'Roy Linderson',
    'Tommy Sakura',
    'Mike Tyson'
]

function atualizarImagemFeedback(){
    perfil.style.backgroundImage = `url(${feedback[indice]})`;
    perfil.style.backgroundSize = 'cover';
    perfil.style.backgroundPosition = 'center';

    nome.innerText = nomes[indice]
    
}

function next() {
    indice = (indice + 1) % feedback.length; // Avança na ordem
    atualizarImagemFeedback();
}

function previous(){
    indice = (indice - 1 + feedback.length) % feedback.length; // Retrocede na ordem
    atualizarImagemFeedback();
}


document.getElementById('right').addEventListener('click', next);
document.getElementById('left').addEventListener('click', previous);

atualizarImagemFeedback()