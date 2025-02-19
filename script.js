    // ============ SISTEMA DE MENU ============
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");

    menuIcon.addEventListener("click", function(e) {
        e.stopPropagation();
        menu.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    document.addEventListener("click", function(e) {
        if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
            menu.classList.remove("active");
            menuIcon.classList.remove("active");
        }
    });

    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-3px)";
        });
        item.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
        });
    });

    const runas = [
        { 
            symbol: "🌠", 
            title: "Yggdrasil Cósmico", 
            meaning: "A Árvore do Mundo em sua versão estelar. Representa a conexão entre todos os reinos cósmicos e a teia quântica que une as galáxias. Combina a sabedoria de Odin com a física dos buracos de minhoca."
        },
        { 
            symbol: "🜂", 
            title: "Fênix de Sagitário", 
            meaning: "Fogo zodiacal transformador. Relacionada ao centro galáctico e à renovação cíclica. Combina mitos egípcios com astrofísica de supernovas."
        },
        { 
            symbol: "✡🌌", 
            title: "Merkaba Estelar", 
            meaning: "Veículo de luz que conecta dimensões. Geometria sagrada do tetraedro estrelado fundida com energia de quasares. Canalização arcturiana."
        },
        { 
            symbol: "𓏇", 
            title: "Olho de Orión", 
            meaning: "Sabedoria ancestral das pirâmides alinhadas com o cinturão de Orion. Conexão com civilizações estelares e memória cósmica."
        },
        { 
            symbol: "ꙮ", 
            title: "Mandalas Galácticas", 
            meaning: "Padrões fractais que regem a formação de sistemas estelares. Meditação na estrutura quântica da realidade."
        },
        { 
            symbol: "⚳", 
            title: "Ceres Divina", 
            meaning: "Asteroide da nutrição cósmica. Combina a deusa romana com a astrologia moderna, representando sustentabilidade universal."
        },
        { 
            symbol: "☥🌀", 
            title: "Ankh Quântico", 
            meaning: "Cruz ansata egípcia fusionada com vórtice energético. Simboliza o fluxo interdimensional de energia vital."
        },
        { 
            symbol: "ꕔ⚛", 
            title: "Supernova Atômica", 
            meaning: "União da fusão nuclear estelar com a estrutura atômica terrestre. Representa transformação radical em nível subatômico."
        },
        { 
            symbol: "♆⛢", 
            title: "Duplo Netuno", 
            meaning: "Planetas transpessoais em ressonância. Combina astrologia esotérica com astronomia moderna (Netuno e Urano)."
        },
        { 
            symbol: "𓋹💫", 
            title: "Ankh Sideral", 
            meaning: "Vida eterna em escala cósmica. Ciclos de morte e renascimento estelar segundo a mitologia nórdica-egípcia."
        },
        { 
            symbol: "⚶", 
            title: "Asteria Cósmica", 
            meaning: "Deusa grega das estrelas fundida com a energia de asteroides. Representa mensagens celestes em meteoritos."
        },
        { 
            symbol: "⌬🌐", 
            title: "Hiper-Rede Cósmica", 
            meaning: "Conexões intergalácticas na estrutura cristalina do universo. Geometria molecular sagrada."
        },
        { 
            symbol: "♇☄", 
            title: "Plutão Transformador", 
            meaning: "Planeta anão como portal de reinvenção. Combina mitologia do submundo com cometas mensageiros."
        },
        { 
            symbol: "𓆣🌀", 
            title: "Escaravelho Galáctico", 
            meaning: "Símbolo egípcio de renovação em movimento espiral. Representa a Via Láctea como roda kármica."
        },
        { 
            symbol: "☉♒", 
            title: "Sol em Aquário", 
            meaning: "Era aquariana em escala cósmica. Combina astrologia tropical com astronomia do Sistema Solar."
        },
        { 
            symbol: "꩜", 
            title: "Vórtice de Sirius", 
            meaning: "Conexão com a estrela Sírius e civilizações estelares. Portal dimensional ativado por sons ressonantes."
        },
        { 
            symbol: "⚸", 
            title: "Lilith Lunar", 
            meaning: "Ponto oculto da órbita lunar. Representa o feminino cósmico e a sombra estelar."
        },
        { 
            symbol: "♃♇", 
            title: "Júpiter-Plutão", 
            meaning: "Conjunção de expansão e poder transformador. Ciclos cósmicos de destruição criativa."
        },
        { 
            symbol: "𒀭", 
            title: "Anu Celeste", 
            meaning: "Deus sumério do firmamento. Representa a abóboda celeste como consciência cósmica."
        },
        { 
            symbol: "Ꝏ⃝", 
            title: "Ouroboros Estelar", 
            meaning: "Serpente cósmica devorando a própria cauda. Ciclos infinitos em escala multigaláctica."
        },
        { 
            symbol: "𒄈", 
            title: "Dragão Quântico", 
            meaning: "Mitologia chinesa fusionada com teoria das cordas. Guardião das dimensões paralelas."
        },
        { 
            symbol: "☿⚕", 
            title: "Mercúrio Alquímico", 
            meaning: "Mensageiro divino em chave astroquímica. Comunicação interstelar e cura energética."
        },
        { 
            symbol: "♄⛓", 
            title: "Saturno Cármico", 
            meaning: "Anéis como ciclos de aprendizado. Lei cósmica e estrutura universal."
        },
        { 
            symbol: "☽⚸☾", 
            title: "Tríade Lunar", 
            meaning: "Fases da lua como espiral evolutiva. Triplicidade divina em escala galáctica."
        }
    ];    


function sortearRunas() {
    const opcao = document.getElementById("leitura-opcao").value;
    const quantidade = opcao === "cruz" ? 7 : parseInt(opcao, 10);
    const selecionadas = runas.sort(() => 0.5 - Math.random()).slice(0, quantidade);

    document.getElementById("runas-container").innerHTML = selecionadas.map(runa =>
        `<div class="runa">${runa.symbol}</div>`
    ).join("");

    document.getElementById("runas-meanings").innerHTML = selecionadas.map(runa =>
        `<h3>${runa.title}</h3><p>${runa.meaning}</p>`
    ).join("");
}
  
      function sortearRunas() {
        const opcao = document.getElementById("leitura-opcao").value;
        const quantidade = opcao === "cruz" ? 7 : parseInt(opcao, 10);
        const selecionadas = runas.sort(() => 0.5 - Math.random()).slice(0, quantidade);
        const container = document.getElementById("runas-container");
        const resultContainer = document.getElementById("runas-meanings");
        
        container.innerHTML = "";
        resultContainer.innerHTML = "";
  
        selecionadas.forEach(runa => {
          container.innerHTML += `<div class="runa"><div class="runa-title">${runa.symbol}</div></div>`;
          resultContainer.innerHTML += `<h3>${runa.title}</h3><p>${runa.meaning}</p>`;
        });
}
function exibirInstrucoes() {
    const opcao = document.getElementById("leitura-opcao").value;
    const instrucoesDiv = document.getElementById("instrucoes");
    
    const textos = {
        "1": "Concentre-se em uma única questão enquanto as energias cósmicas se alinham. A Runa Estelar revelará a essência do seu questionamento.",
        "3": "Siga o fluxo temporal do cosmos:<br>1. Passado Cósmico<br>2. Presente Quântico<br>3. Futuro Galáctico",
        "5": "Leitura Multidimensional:<br>1. Centro: Tema Central<br>2. Norte: Desafios Estelares<br>3. Sul: Potencial Sideral<br>4. Leste: Energias Emergentes<br>5. Oeste: Lições Cósmicas",
        "cruz": "Padrão de Leitura Interdimensional:<br>1. Centro: Núcleo da Questão<br>2. Leste: Origem Estelar<br>3. Oeste: Destino Galáctico<br>4. Norte: Limiares Quânticos<br>5. Sul: Dons Cósmicos<br>6. Above: Conselhos Arcturianos<br>7. Below: Memórias Lemurianas"
    };

    instrucoesDiv.innerHTML = `<div class="instrucoes-box">${textos[opcao]}</div>`;
}

// Chame a função inicialmente para exibir as instruções padrão
exibirInstrucoes();