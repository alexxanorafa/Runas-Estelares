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
        meaning: `A Axis Mundi das mitologias nórdica e xamânica elevada à escala universal. Representa a interligação quântica entre todos os seres através do espaço-tempo. Na filosofia hermética, manifesta o princípio «Como é em cima, é em baixo», unindo microcosmo e macrocosmo. Simboliza a jornada do herói através dos nove mundos cósmicos, onde cada galáxia é um fruto na árvore da existência.`
    },
    { 
        symbol: "🜂", 
        title: "Fénix de Sagitário", 
        meaning: `Arquétipo da morte alquímica e renascimento estelar. Na tradição helenística, associa-se ao mito de Fénix e ao fogo purificador de Heráclito. Na astrofísica moderna, representa os ciclos de morte e renascimento estelar, onde supernovas semeiam os elementos da vida. Convida à transmutação das cinzas do passado em combustível para a evolução espiritual.`
    },
    { 
        symbol: "✡🌌", 
        title: "Merkaba Estelar", 
        meaning: `Veículo de ascensão da cabala hermética reinterpretado pela física multidimensional. A geometria sagrada do tetraedro estrelado simboliza a união do masculino (▲) e feminino (▼) cósmicos. Na cosmovisão platónica, representa a forma perfeita que transcende a caverna da percepção material. Ferramenta para navegar o oceano de Higgs e acessar planos suprafísicos.`
    },
    { 
        symbol: "𓏇", 
        title: "Olho de Órion", 
        meaning: `O arquétipo da visão divina, desde o Udjat egípcio até à pineal cartesiana. Representa o alinhamento ancestral entre as pirâmides de Gizé e o cinturão de Órion, símbolo da busca perene pelo conhecimento perdido de Atlântida. Na filosofia, encarna o ideal socrático «Conhece-te a ti mesmo» projetado em escala galáctica.`
    },
    { 
        symbol: "ꙮ", 
        title: "Mandalas Galácticas", 
        meaning: `Expressão visual do eterno retorno nietzschiano em padrões fractais. Cada espiral contém a semente do universo holográfico, onde o todo existe em cada parte. Meditação nestes padrões revela a música das esferas de Pitágoras traduzida em geometria sagrada. Ferramenta para compreender a coincidentia oppositorum de Nicolau de Cusa.`
    },
    { 
        symbol: "⚳", 
        title: "Ceres Divina", 
        meaning: `Síntese entre a deusa romana da agricultura e os asteroides do cinturão principal. Simboliza o princípio feminino criador na escala cósmica, a Deméter cósmica que nutre sistemas estelares. Na ecologia profunda, representa a necessidade de equilíbrio entre progresso e sustentabilidade universal, ecoando o conceito de Gaia de Lovelock.`
    },
    { 
        symbol: "☥🌀", 
        title: "Ankh Quântico", 
        meaning: `Fusão do símbolo egípcio da vida eterna com os vórtices energéticos. Representa o fluxo contínuo entre os mundos manifestado e imanifestado, a dança de Shiva na visão tântrica aplicada à física de partículas. Na prática, ensina a arte de manipular o éter (akasha) através da intenção focalizada.`
    },
    { 
        symbol: "ꕔ⚛", 
        title: "Supernova Atómica", 
        meaning: `Paradoxo cósmico que une destruição estelar e criação de elementos vitais. Na alquimia moderna, simboliza a capacidade de transformar crises pessoais em oportunidades de crescimento radical. Reflete o conceito hegeliano de dialética (tese-antítese-síntese) operando em escala cósmica.`
    },
    { 
        symbol: "♆⛢", 
        title: "Duplo Neptuno", 
        meaning: `Casamento entre o planeta das ilusões (Neptuno) e o revolucionário (Urano). Representa a tensão criativa entre sonho e realidade, inspiração e rebelião. Na psicologia junguiana, simboliza a integração da sombra cósmica através da dança entre Eros e Thanatos.`
    },
    { 
        symbol: "𓋹💫", 
        title: "Ankh Sideral", 
        meaning: `Ciclos vitais elevados à imensidão cósmica. Combina o conceito egípcio de renascimento com a teoria dos multiversos. Na filosofia existencial, questiona: «O que é a eternidade para uma estrela?» Convida à compreensão do tempo não-linear e à superação do medo da morte através da consciência cósmica.`
    },
    { 
        symbol: "⚶", 
        title: "Asteria Cósmica", 
        meaning: `Manifestação da deusa grega dos oráculos estelares em corpos celestes. Simboliza a comunicação interdimensional através de meteoritos portadores de mensagens cósmicas. Na prática divinatória, associa-se à arte de ler sinais do universo, como propunha Carl Jung na sincronicidade.`
    },
    { 
        symbol: "⌬🌐", 
        title: "Hiper-Rede Cósmica", 
        meaning: `Estrutura cristalina do universo comparável à internet galáctica. Representa a teoria do campo unificado buscado por Einstein e a rede de Indra da mitologia budista. Na sociologia cósmica, questiona: «Como seria uma civilização tipo III na escala de Kardashev?»`
    },
    { 
        symbol: "♇☄", 
        title: "Plutão Transformador", 
        meaning: `Senhor do submundo como agente de metamorfose cósmica. Simboliza os processos alquímicos de putrefação e sublimação em escala planetária. Na astrologia esotérica, representa a morte do ego e o renascimento do self cósmico, à luz da psicologia transpessoal.`
    },
    { 
        symbol: "𓆣🌀", 
        title: "Escaravelho Galáctico", 
        meaning: `O Khepri egípcio reinventado como motor de criação galáctica. Representa o movimento espiral que une o micro (DNA) ao macro (braços galácticos). Na filosofia processual de Whitehead, simboliza a criatividade cósmica em constante devir.`
    },
    { 
        symbol: "☉♒", 
        title: "Sol em Aquário", 
        meaning: `Símbolo da era de Aquário reinterpretado através da heliofísica. Representa a fusão entre tecnologia espiritual e consciência coletiva. Na ética cósmica, questiona: «Como equilibrar progresso técnico e sabedoria perene na escala de civilizações estelares?»`
    },
    { 
        symbol: "꩜", 
        title: "Vórtice de Sírius", 
        meaning: `Portal dimensional para o sistema estelar reverenciado pelos dogon e egípcios. Simboliza a busca pelo conhecimento oculto além do véu de Ísis. Na epistemologia cósmica, representa a tensão entre mistério e revelação na jornada do conhecimento.`
    },
    { 
        symbol: "⚸", 
        title: "Lilith Lunar", 
        meaning: `Arquétipo do feminino rebelde na sombra lunar. Representa a face oculta da psique coletiva e os aspectos reprimidos da natureza feminina. Na mitologia comparada, une Inanna suméria, Hécate grega e Kali hindu na dança cósmica do devir.`
    },
    { 
        symbol: "♃♇", 
        title: "Júpiter-Plutão", 
        meaning: `Conjunção entre expansão e transformação radical. Simboliza os ciclos históricos de ascensão e queda de impérios em escala cósmica. Na filosofia política, questiona: «Que estruturas sociais sobreviveriam à prova de eras galácticas?»`
    },
    { 
        symbol: "𒀭", 
        title: "Anu Celeste", 
        meaning: `O princípio primordial da cosmogonia suméria reinterpretado. Representa a consciência cósmica impessoal que transcende deuses antropomórficos. Na teologia negativa, aproxima-se do Ein Sof cabalístico ou do Brahman vedanta.`
    },
    { 
        symbol: "Ꝏ⃝", 
        title: "Ouroboros Estelar", 
        meaning: `Símbolo alquímico da eternidade projetado em escala multigaláctica. Representa a teoria do universo oscilante e os ciclos de Maha Kalpa na cosmologia hindu. Na física quântica, relaciona-se com o conceito de tempo imaginário de Hawking.`
    },
    { 
        symbol: "𒄈", 
        title: "Dragão Quântico", 
        meaning: `Fusão da mitologia chinesa com a teoria das supercordas. Guardião das dimensões compactadas na escala de Planck. Na psicologia arquetípica, representa os monstros do inconsciente coletivo que guardam tesouros de sabedoria.`
    },
    { 
        symbol: "☿⚕", 
        title: "Mercúrio Alquímico", 
        meaning: `O mensageiro divino como mediador entre ciência e espiritualidade. Simboliza a união entre hermetismo renascentista e física quântica. Na comunicação cósmica, representa a busca por linguagens universais capazes de transcender civilizações.`
    },
    { 
        symbol: "♄⛓", 
        title: "Saturno Cármico", 
        meaning: `Senhor do tempo como tecelão dos destinos cósmicos. Representa a lei de causa e efeito operando em escala universal. Na ética cósmica, questiona: «Que valores morais resistiriam ao teste da eternidade?»`
    },
    { 
        symbol: "☽⚸☾", 
        title: "Tríade Lunar", 
        meaning: `As três faces de Hécate como fases da evolução cósmica. Simboliza o ciclo eterno: nascimento (crescente), plenitude (cheia) e dissolução (minguante). Na filosofia processual, representa a dialética cósmica de criação-preservação-destruição.`
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
