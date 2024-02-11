const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Um banco de dados",
            "Uma linguagem de programação",
            "Um sistema operacional"
        ],
        correta: 1 // "Uma linguagem de programação" é a resposta correta
    },
    {
        pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
        respostas: [
            "variavel = valor",
            "variable nome = valor",
            "var nome = valor"
        ],
        correta: 2 // "var nome = valor" é a resposta correta
    },
    {
        pergunta: "Qual é a função do método 'getElementById()'?",
        respostas: [
            "Alterar o estilo de um elemento HTML",
            "Selecionar um elemento HTML por sua classe",
            "Selecionar um elemento HTML por seu ID"
        ],
        correta: 2 // "Selecionar um elemento HTML por seu ID" é a resposta correta
    },
    {
        pergunta: "O que significa 'DOM' em JavaScript?",
        respostas: [
            "Data Object Model",
            "Document Object Model",
            "Dynamic Object Method"
        ],
        correta: 1 // "Document Object Model" é a resposta correta
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Comparação estrita",
            "Atribuição",
            "Comparação não estrita"
        ],
        correta: 0 // "Comparação estrita" é a resposta correta
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "append()",
            "push()",
            "concat()"
        ],
        correta: 1 // "push()" é a resposta correta
    },
    {
        pergunta: "O que o método 'forEach()' faz em JavaScript?",
        respostas: [
            "Itera sobre os elementos de um array",
            "Remove elementos de um array",
            "Transforma todos os elementos de um array em um único elemento"
        ],
        correta: 0 // "Itera sobre os elementos de um array" é a resposta correta
    },
    {
        pergunta: "Qual é a função do método 'toFixed()' em JavaScript?",
        respostas: [
            "Arredonda um número para o inteiro mais próximo",
            "Formata um número com um número específico de casas decimais",
            "Retorna o menor número inteiro maior ou igual a um número"
        ],
        correta: 1 // "Formata um número com um número específico de casas decimais" é a resposta correta
    },
    {
        pergunta: "Qual é a forma correta de escrever um comentário de uma linha em JavaScript?",
        respostas: [
            "// Comentário de uma linha",
            "<!-- Comentário de uma linha -->",
            "/* Comentário de uma linha */"
        ],
        correta: 0 // "// Comentário de uma linha" é a resposta correta
    },
    {
        pergunta: "Qual é o resultado de 'typeof null' em JavaScript?",
        respostas: [
            "Null",
            "Undefined",
            "Object"
        ],
        correta: 2 // "Object" é a resposta correta
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