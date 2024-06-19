
let pontosAtual = 0;

let nomeJogador = localStorage.getItem("nomeJogador");

document.getElementById('jogador').textContent = nomeJogador;

document.getElementById("TrocarJogador").addEventListener("click", function(event) {
    event.preventDefault();
   
    savePlayerPoints(nomeJogador, pontosAtual);
   
    window.location.href = "../Tela1/TelaBoasVindas.html";
});

function savePlayerPoints(nome, pontos) {
    let ranking = JSON.parse(localStorage.getItem("ranking")) || {};
    if (ranking[nome]) {
        ranking[nome] += pontos;
    } else {
        ranking[nome] = pontos;
    }
    localStorage.setItem("ranking", JSON.stringify(ranking));
}

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

let numeroAleatorio = gerarNumeroAleatorio();

document.getElementById('botao').addEventListener('click', function (event) {
    event.preventDefault();

    let numeroDigitado = parseInt(document.getElementById('numero').value);
    let modal = document.querySelector(".modal");
    let modalMensagem = document.querySelector(".modal-mensagem");
    let modalConteudo = document.querySelector(".modal-conteudo");

    modalConteudo.classList.remove("success", "error");

    if (numeroDigitado === numeroAleatorio) {
        modalMensagem.textContent = "Parabéns! Você acertou o número.";
        modalConteudo.classList.add("success");
        pontosAtual += 1;
        document.getElementById('pontosAtual').textContent = pontosAtual;
        numeroAleatorio = gerarNumeroAleatorio();

    } else if (numeroDigitado > 10 || numeroDigitado < 1) {
        modalMensagem.textContent = "Número inválido.";
        modalConteudo.classList.add("error");

    } else {
        modalMensagem.textContent = "Número errado. Tente novamente.";
        modalConteudo.classList.add("error");
    }

    modal.style.display = "block";
});

document.querySelector(".fechar").addEventListener('click', function () {
    document.querySelector(".modal").style.display = "none";
});

window.addEventListener('click', function (event) {
    let modal = document.querySelector(".modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

