const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-pergunta");
const caixaAlternativa = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-Resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas= [
    {
        enunciado: "tem que por o enunciado aqui",
        alternativas: [
            {
                txto: "tem que por o inicio do texto aqui",
                afirmacao:"  tem que por algo aqui",
            },
            {
                texto: "mais texto aqui eu acho rsposta na vdd",
                afirmacao:"resposta sei lá",
            }
        ]
    },
    {
        enunciado:"",
        alternativas:[
            {
                texto:"",
                afirmacao:"",
            },
            {
                texto:"",
                afirmacao:"",
            }
        ]
    }
]