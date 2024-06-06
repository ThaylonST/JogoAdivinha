document.getElementById("botao").addEventListener("click", function() {
    // Gerar um número aleatório de 1 a 10
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    
    // Obter o número digitado pelo usuário
    var numeroDigitado = parseInt(document.getElementById("numero").value);
    
    // Comparar os números
    if (numeroDigitado === numeroAleatorio) {
        alert("Parabéns! Você acertou o número.");
    } else {
        alert("Número errado. Tente novamente.");
    }
});

