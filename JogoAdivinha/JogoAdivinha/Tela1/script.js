document.addEventListener("DOMContentLoaded", function() {
    displayRanking();

    document.querySelector("#botao").addEventListener("click", function(event){
        event.preventDefault();

        var nome = document.querySelector("#nome").value;
        localStorage.setItem("nomeJogador", nome);

        window.location.href = "http://127.0.0.1:5500/JogoAdivinha/Tela2/TelaDoJogo.html";
    });
});

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
