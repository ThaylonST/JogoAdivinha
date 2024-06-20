
document.addEventListener("DOMContentLoaded", function() {
    displayRanking();

    document.querySelector("#botao").addEventListener("click", function(event){
        event.preventDefault();

        var nome = document.querySelector("#nome").value;
        localStorage.setItem("nomeJogador", nome);

        window.location.href = "../Tela2/TelaDojogo.html";
    });
});

document.querySelector("#botaoFeedback").addEventListener("click", function(event){

window.location.href = "../Tela3/index.html";
})

function displayRanking() {
    let ranking = JSON.parse(localStorage.getItem("ranking")) || {};
    let rankingList = document.getElementById("ranking-list");
    rankingList.innerHTML = "";

    for (let player in ranking) {
        let listItem = document.createElement("li");
        listItem.textContent = `${player}: ${ranking[player]} pontos`;
        rankingList.appendChild(listItem);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    displayRanking();

    document.querySelector("#botao").addEventListener("click", function(event){
        event.preventDefault();

        var nome = document.querySelector("#nome").value;
        localStorage.setItem("nomeJogador", nome);

        window.location.href = "../Tela2/TelaDojogo.html";
    });
});

document.querySelector("#botaoFeedback").addEventListener("click", function(event){

window.location.href = "../Tela3/index.html";
})

function displayRanking() {
    let ranking = JSON.parse(localStorage.getItem("ranking")) || {};
    let rankingList = document.getElementById("ranking-list");
    rankingList.innerHTML = "";

    for (let player in ranking) {
        let listItem = document.createElement("li");
        listItem.textContent = `${player}: ${ranking[player]} pontos`;
        rankingList.appendChild(listItem);
    }
}

