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
    { 
        pergunta: "Qual é o elemento associado ao signo de Capricórnio?",
        respostas: [
            "Ar",
            "Terra",
            "Fogo"
        ],
        correta: 1
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
            const dt = quizItem.querySelector('dl dt').cloneNode(true)
            dt.querySelector('span').textContent = resposta
            dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
            dt.querySelector('input').value = item.respostas.indexOf(resposta)
            dt.querySelector('input').onchange = (event) => {
                const estaCorreta = event.target.value == item.correta 
                
                corretas.delete(item)
                if(estaCorreta) {
                    corretas.add(item)
                }
                mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
            }

                       
            quizItem.querySelector('dl').appendChild(dt)
    }   
    
    quizItem.querySelector('dl dt').remove()
 
    quiz.appendChild(quizItem)
}