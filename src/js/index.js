const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

//contadores para mudar o index das imagens que vão ser mostradas
let countLuffy = 0,
    countZoro = 0,
    countBrook = 0,
    countSanji = 0,
    countChooper = 0,
    countJimbe = 0,
    countNami = 0,
    countRobin = 0,
    countUsoop = 0,
    countFranky = 0;

const luffyBackgroundImages = [
    "./src/img/personagem-monkey-d-luffy.png",
    "./src/img/personagem-monkey-d-luffy2.webp",
    "./src/img/personagem-luffy3.webp",
    "./src/img/personagem-luffy4.webp",
    "./src/img/personagem-luffy5.webp"
];

const zoroBackgroundImages = [
    "./src/img/personagem-roronoa-zoro.png",
    "./src/img/personagem-roronoa-zoro2.jpg",
    "./src/img/personagem-roronoa-zoro3.jpg",
    "./src/img/personagem-zoro4.webp",
    "./src/img/personagem-zoro5.webp"
]
const brookBackgroundImages = [
    "./src/img/personagem-brook.png",
    "./src/img/personagem-brook.jpg",
    "./src/img/personagem-brook3.webp",
    "./src/img/personagem-brook4.webp",
    "./src/img/personagem-brook5.webp",
    "./src/img/personagem-brook6.webp"
]
const sanjiBackgroundImages = [
    "./src/img/personagem-sanji.png",
    "./src/img/personagem-sanji2.png",
    "./src/img/personagem-sanji3.webp",
    "./src/img/personagem-sanji4.webp",
    "./src/img/personagem-sanji5.webp"
]
const chooperBackgroundImages = [
    "./src/img/personagem-tony-chopper.png",
    "./src/img/personagem-chopper2.webp",
    "./src/img/personagem-chopper3.webp",
    "./src/img/personagem-chopper4.webp",
    "./src/img/personagem-chopper5.webp",
    "./src/img/personagem-chopper6.webp",
    "./src/img/personagem-chopper7.webp"
]
const jimbeBackgroundImages = [
    "./src/img/personagem-jimbe.jpeg",
    "./src/img/personagem-jimbe3.webp",
    "./src/img/personagem-jimbe4.webp",
    "./src/img/personagem-jimbe5.webp"
]
const namiBackgroundImages = [
    "./src/img/personagem-nami.png",
    "./src/img/personagem-nami2.webp",
    "./src/img/personagem-nami3.webp",
    "./src/img/personagem-nami4.webp"
]
const robinBackgroundImages = [
    "./src/img/personagem-robin.jpeg",
    "./src/img/personagem-robin2.webp",
    "./src/img/personagem-robin3.webp",
    "./src/img/personagem-robin4.webp",
    "./src/img/personagem-robin5.webp",
    "./src/img/personagem-robin6.webp",
    "./src/img/personagem-robin7.webp"
]
const usoopBackgroundImages = [
    "./src/img/personagem-usopp.jpg",
    "./src/img/personagem-usopp2.webp",
    "./src/img/personagem-usopp3.webp",
    "./src/img/personagem-usopp4.webp",
    "./src/img/personagem-usopp5.webp",
    "./src/img/personagem-usopp6.webp"
]
const frankyBackgroundImages = [
    "./src/img/personagem-franky.webp",
    "./src/img/personagem-franky2.webp",
    "./src/img/personagem-franky3.webp",
    "./src/img/personagem-franky4.webp",
    "./src/img/personagem-franky5.webp"
]

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
        toggleBackgroundImage(personagens[indice], botao.getAttribute("data-personagem"));
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

function toggleBackgroundImage(personagemSelecionado, tipoPersonagem) {
    const imagem = personagemSelecionado.querySelector(".imagem");

    switch (tipoPersonagem) {
        case "luffy":
            if (countLuffy === luffyBackgroundImages.length - 1) {
                countLuffy = 0;
            } else {
                countLuffy++;
            }
            imagem.src = luffyBackgroundImages[countLuffy];
            break;  
        case "zoro":
            if (countZoro === 1 || countZoro === 3 ) {
                personagemSelecionado.classList.remove("gradiente-sup-esq");
                personagemSelecionado.classList.add("gradiente-inf-esq");
            }else {
                personagemSelecionado.classList.add("gradiente-sup-esq");
                personagemSelecionado.classList.remove("gradiente-inf-esq");
            }
            imagem.src = zoroBackgroundImages[countZoro];
            if (countZoro === zoroBackgroundImages.length - 1) {
                countZoro = 0;
            } else {
                countZoro++;
            }
            break;
        case "brook":
            if (countBrook === brookBackgroundImages.length - 1) {
                countBrook = 0;
            } else {
                countBrook++;
            }
            imagem.src = brookBackgroundImages[countBrook];
            break;  
        case "sanji":
            if (countSanji === sanjiBackgroundImages.length - 1) {
                countSanji = 0;
            } else {
                countSanji++;
            }
            imagem.src = sanjiBackgroundImages[countSanji];
            break;  
        case "chopper":
            if (countChooper === chooperBackgroundImages.length - 1) {
                countChooper = 0;
            } else {
                countChooper++;
            }
            imagem.src = chooperBackgroundImages[countChooper];
            break;  
        case "jimbe":
            if (countJimbe === jimbeBackgroundImages.length - 1) {
                countJimbe = 0;
            } else {
                countJimbe++;
            }
            imagem.src = jimbeBackgroundImages[countJimbe];
            break;  
        case "nami":
            if (countNami === namiBackgroundImages.length - 1) {
                countNami = 0;
            } else {
                countNami++;
            }
            imagem.src = namiBackgroundImages[countNami];
            break;  
        case "robin":
            if (countRobin === robinBackgroundImages.length - 1) {
                countRobin = 0;
            } else {
                countRobin++;
            }
            imagem.src = robinBackgroundImages[countRobin];
            break;  
        case "usopp":
            if (countUsoop === usoopBackgroundImages.length - 1) {
                countUsoop = 0;
            } else {
                countUsoop++;
            }
            imagem.src = usoopBackgroundImages[countUsoop];
            break;  
        case "franky":
            if (countFranky === frankyBackgroundImages.length - 1) {
                countFranky = 0;
            } else {
                countFranky++;
            }
            imagem.src = frankyBackgroundImages[countFranky];
            break;  
    }
}




