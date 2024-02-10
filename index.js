const perguntas = [
    {
        pergunta: "Qual é o signo do zodíaco associado ao elemento fogo?",
        respostas: [
            "Áries",
            "Escorpião",
            "Leão"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o planeta regente do signo de Gêmeos?",
        respostas: [
            "Mercúrio",
            "Marte",
            "Vênus"
        ],
        correta: 0
    },
    {
        pergunta: "Qual signo é conhecido por ser o mais teimoso?",
        respostas: [
            "Aquário",
            "Leão",
            "Touro"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o elemento associado ao signo de Peixes?",
        respostas: [
            "Terra",
            "Ar",
            "Água"
        ],
        correta: 2
    },
    {
        pergunta: "Qual signo do zodíaco é representado pelo arqueiro?",
        respostas: [
            "Capricórnio",
            "Sagitário",
            "Libra"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o animal associado ao signo de Virgem?",
        respostas: [
            "Cachorro",
            "Sereia",
            "Gato"
        ],
        correta: 2
    },
    {
        pergunta: "Qual signo é conhecido por sua dualidade?",
        respostas: [
            "Touro",
            "Libra",
            "Aquário"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o planeta regente do signo de Libra?",
        respostas: [
            "Vênus",
            "Júpiter",
            "Saturno"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o elemento associado ao signo de Áries?",
        respostas: [
            "Fogo",
            "Terra",
            "Água"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o signo do zodíaco associado à comunicação?", 
        respostas: [
            "Virgem",
            "Aquário",
            "Gêmeos"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o animal associado ao signo de Câncer?",
        respostas: [
            "Tigre",
            "Caranguejo",
            "Leão"
        ],
        correta: 1
    },
    { /// este campo com pergunta respostas e a correta, é o "ITEM"
        pergunta: "Qual é o elemento associado ao signo de Capricórnio?",
        respostas: [
            "Ar",
            "Terra",
            "Fogo"
        ],
        correta: 1
    }
];

// para puxar o "quiz do html". queryselector vai ser pra procurar o id, representado por #
const quiz = document.querySelector('#quiz')
// para puxar o template. queryselector é para procurar pelo seletor Ex. div, dt e etc
const template = document.querySelector('template')
//new = criar coisas novas .... set é para tirar ou colocar e não pode repetir. 
//Para fazer a soma dos
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
//para exibir o texto exemplo 10 de 10
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// Estrutura de Loop ou Repetição ou Laço de Repetição das Perguntas
for(const item of perguntas) {
//clonar todos os nós/tags dentro do template. True para clonar tudo    
    const quizItem = template.content.cloneNode(true)
    // para que todas as perguntas apareçam 
    quizItem.querySelector('h3').textContent = item.pergunta

// Estrutura de Loop ou Repetição ou Laço de Repetição das respostas
    for(let resposta of item.respostas) {
        //clonar todos os nós;/tags dentro do template. True para clonar tudo    
            // para que todas as perguntas apareçam, o dt é a tag onde esta as resposta e a bolinha de marcar
        // dentro do dl procura o dt 
            const dt = quizItem.querySelector('dl dt').cloneNode(true)
            // dentro do dt tem o span, dentro do span tem um texto que é a resposta
            dt.querySelector('span').textContent = resposta
            // atribuir nome as respostas, nome e valor especifico. Dando um indice as perguntas para saber qual é se é a primeira segunda ... e etc
            dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
            // pra dar valor as respostas 0, 1 e 2
            dt.querySelector('input').value = item.respostas.indexOf(resposta)
            //evento de mudança do input => arrow function 
            //onchange = mudança ligada
            dt.querySelector('input').onchange = (event) => {
                //evento para acontecer algo quando clica na respostas. Atribuindo uma comparação (no alerte de teste sai true/fase)
                const estaCorreta = event.target.value == item.correta //não pode usar === porque o numero correto 0/1/2 não bate com a string
                
                
                //para quando errar depois de acertar, não continuar somando
                corretas.delete(item)
                // se esta correto entra na nova função
                if(estaCorreta) {
                //    alert('acertou') }
                //else {
                //    alert('errou') 
                    corretas.add(item)
                }
            //repetir aqui para repetir e fazer as contas
                mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
            }

            
            
            //quizitem procura o dl e dicionar um filho que é o dt
            quizItem.querySelector('dl').appendChild(dt)
    }   
    
    //apagar o resposta A que estava aparecendo
    quizItem.querySelector('dl dt').remove()
 
    // coloca a pergunta na tela adicionar um filho no quiz
    quiz.appendChild(quizItem)
}



// alert(perguntas[0].pergunta) => alerta para "Pergunta 01". 0 é o array [] de Perguntas

// alert(perguntas[0].respostas[2]) => Para aparecer a "Resposta C", por exemplo

//alert(perguntas[0].respostas[perguntas[0].correta]). Apresentar a resposta correta 2 ou C