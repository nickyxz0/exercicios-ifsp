// A função que sorteia basicamente, faz tudo
function sortear() {
    // A lista de opções
    const opcoes = ["Interestelar 🌌", "Homem aranha 🕷️", "Batman 🦇", "Vingadores 🛡️"];

    // Escolhe uma posição aleatória da lista
    const escolhido = opcoes[Math.floor(Math.random() * opcoes.length)];

    // Coloca o nome escolhido no HTML
    document.getElementById("resultado").innerText = escolhido;
}

const formulario = document.getElementById('form');


formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    
    const novo = {
        titulo: document.getElementById('Título').value,
        imagem: document.getElementById('imagem').value,
        texto: document.getElementById('text').value
    };

    const card = `
        <div class="card">
            <img src="${filme.capa}">
            <h3>${filme.titulo}</h3>
        </div>
    `;
    
    const colecao = document.getElementById('colecao');
    console.log(card);
    colecao.innerHTML += card


});
