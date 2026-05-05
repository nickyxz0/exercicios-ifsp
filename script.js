// Botão que sorteia os filmes
function sortear() {
    const opcoes = ["Interestelar 🌌", "Homem aranha 🕷️", "Batman 🦇", "Vingadores 🛡️"];

    const escolhido = opcoes[Math.floor(Math.random() * opcoes.length)];

     document.getElementById("resultado").innerText = escolhido;
}

// FORMULÁRIO
const formulario = document.getElementById('form');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const novo = {
        titulo: document.getElementById('titulo').value,
        imagem: document.getElementById('imagem').value,
        texto: document.getElementById('texto').value,
    };

    const newcard = `
        <div class="movie-card">
            <img src="${novo.imagem}">
            <div class="movie-info">
                <h3>${novo.titulo}</h3>
                <p>${novo.texto}</p>
            </div>
        </div>
    `;

    const colecao = document.getElementById('colecao');

    colecao.innerHTML += newcard;

    formulario.reset();
});