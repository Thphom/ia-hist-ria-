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
    },
    {
        enunciado:" ",
        alternativas: [
            {
                texto:"",
                afirmacao:"",
            },
            {
                texto:"",
                afirmacao:"",
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
    },
    {
        enunciado:"",
        alternativas:[
            {
                texto:"",
                afirmacao:"".
            },
            {
                texto:"",
                afirmacao:"",
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativas of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPergunta.textContent = "em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();