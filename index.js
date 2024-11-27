var setaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")


function RolarParaDireita(){
    leonardo.style="display:none"
    bruna.style="display:flex"
    setaEsquerda.style="display:flex; margin-top: 115px"
    setaDireita.style="display:none"
}

function RolarParaEsquerda() {
    leonardo.style = "display: flex"
    bruna.style = "display: none"
    setaDireita.style = "display:flex; margin-top: 115%"
    setaEsquerda.style = "display: none"
}