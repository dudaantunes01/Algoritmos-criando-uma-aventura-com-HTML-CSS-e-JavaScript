let vidas = 3;
let pontos = 0;
let etapa = 0;

const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");
const opcoes = document.getElementById("opcoes");

const vidasElemento = document.getElementById("vidas");
const pontosElemento = document.getElementById("pontos");

function atualizarStatus() {
    vidasElemento.textContent = vidas;
    pontosElemento.textContent = pontos;
}

function escolher(opcao) {

    // Primeira escolha
    if (etapa === 0) {

        if (opcao === 1) {
            titulo.textContent = "🪨 A Caverna";
            texto.textContent =
                "Você entra na caverna e encontra um baú misterioso. " +
                "Há uma chave dourada e uma poção. O que você escolhe?";

            opcoes.innerHTML = `
                <button onclick="escolher(1)">🔑 Pegar a chave</button>
                <button onclick="escolher(2)">🧪 Pegar a poção</button>
            `;

            pontos += 10;
        }

        else {
            titulo.textContent = "🌊 O Rio";
            texto.textContent =
                "Você chega ao rio e percebe que precisa atravessá-lo. " +
                "Há uma ponte velha e um barco abandonado.";

            opcoes.innerHTML = `
                <button onclick="escolher(1)">🌉 Usar a ponte</button>
                <button onclick="escolher(2)">🚣 Usar o barco</button>
            `;

            pontos += 5;
        }

        etapa = 1;
    }

    // Segunda etapa
    else if (etapa === 1) {

        if (opcao === 1) {
            titulo.textContent = "🏆 O Tesouro!";
            texto.textContent =
                "Parabéns! Você encontrou o caminho secreto " +
                "e descobriu um grande tesouro escondido na floresta!";

            pontos += 20;
        }

        else {
            titulo.textContent = "🐍 Perigo!";
            texto.textContent =
                "Um obstáculo apareceu no caminho! " +
                "Você perdeu uma vida, mas conseguiu continuar.";

            vidas--;
            pontos += 5;

            if (vidas <= 0) {
                fimDeJogo();
                return;
            }
        }

        atualizarStatus();

        opcoes.innerHTML = `
            <button onclick="finalizar()">🏁 Continuar</button>
        `;

        etapa = 2;
    }
}

function finalizar() {

    titulo.textContent = "🎉 Fim da Aventura";

    texto.textContent =
        `Sua aventura terminou! Você conseguiu ${pontos} pontos ` +
        `e ainda possui ${vidas} vida(s).`;

    opcoes.innerHTML = `
        <button onclick="reiniciar()">🔄 Jogar novamente</button>
    `;
}

function fimDeJogo() {

    titulo.textContent = "💀 Fim de Jogo";

    texto.textContent =
        "Você ficou sem vidas! A floresta venceu desta vez.";

    opcoes.innerHTML = `
        <button onclick="reiniciar()">🔄 Tentar novamente</button>
    `;

    atualizarStatus();
}

function reiniciar() {

    vidas = 3;
    pontos = 0;
    etapa = 0;

    titulo.textContent = "A Floresta Misteriosa";

    texto.textContent =
        "Você está caminhando por uma floresta misteriosa. " +
        "Depois de algum tempo, encontra uma bifurcação. " +
        "Um caminho leva para uma caverna e o outro para um rio. " +
        "Qual caminho você vai escolher?";

    opcoes.innerHTML = `
        <button onclick="escolher(1)">🪨 Entrar na caverna</button>
        <button onclick="escolher(2)">🌊 Seguir até o rio</button>
    `;

    atualizarStatus();
}

atualizarStatus();