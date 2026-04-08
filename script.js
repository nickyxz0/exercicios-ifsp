        //A função que sorteia basicamente,faz tudo
        function sortear() {
            //A lista de opções
            const opcoes = ["Interestelar 🌌", "Homem aranha 🕷️", "", "Batman 🦇", "Vingadores 🛡️"];
            
            //Escolhe uma posição aleatória da lista
            const escolhido = opcoes[Math.floor(Math.random() * opcoes.length)];
            
            //Coloca o nome escolhido no HTML
            document.getElementById("resultado").innerText = escolhido;
        }