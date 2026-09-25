const caixaPerguntas = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
 enunciado: "Vôce acha que a sociedade deve ajudar pessoas em situação de pobreza?" ,
   alternativas: [
    "Sim, porque todos devem ter oportunidades de acesso a condição básicas de vida" 
     "Não porque cada pessoa deve ser responsável por buscar suas próprias condições de vida"]
},
{ 

        enunciado: "A desigualdade social social é um problema que a feta a sociedade" ,
          alternativas: [
           "sim, porque a desigualdade social dificuldade sociak dificuklta a acesso de muitas pessoas tenham oportunidades de melhorar suas condições de vida" 
            "Não, pois a desigualdade social não impede que todas as pessoas tenham oportunidades de melhorar suas condições  de vida"
           ]
       },
       {
            enunciado: "A falta de emprego poe aumentar os problemas sociais" ,
              alternativas: [
               "Sim,por falta de emprego pode aumentar a problema e dificultar o acesso das familias a necessidade básicas" 
                "Não, porque a falta de emprego não determina a condição social de uma pessoa, pois existem outras formas de obter renda e apoio"
               ]
              },
            {
                enunciado: "A pobreza influencia a qualidadede vida das pessoas",
                  alternativas: [
                   "sim, a pobreza pode dificultar o acesso á alimentação, moradia, saúde e educação" 
                    "Não, a pobreza não impede completamente o acesso aos serviços básicos e ás oportunidades de malhoria de vida"
                   ]
                 
               },
                       ];

     let atual =0;
    let  perguntaAtual;
   
    function  mostraPergunta(){
perguntaAtual = Perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
} 

mostraPergunta();




