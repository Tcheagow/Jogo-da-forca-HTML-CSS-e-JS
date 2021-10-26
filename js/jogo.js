function defineTema(){
    var tema = localStorage.getItem("tema");
    var colocarTema = document.getElementById("tema");

    colocarTema.innerHTML = "Tema: " + tema;

    document.getElementById("pai").appendChild(colocarTema);

    //mostra quantidade de letras
    mostrabarras();
}

function mostrabarras(){
    var palavra = localStorage.getItem("palavra");
    var tamanho = palavra.length;

    for(var i = tamanho; i < 20; i ++){
        var barra = document.getElementById("div"+[i])
        barra.style.display = "none"; 
    }
}

function pegaLetra() {
    var campo1 = document.getElementById("letra").value;
    localStorage.setItem("letra", campo1);
}

var erros = 0; 
var acertos = 0;

function verificarTentativa() {
    //pegar palavra e letra
    var palavra = localStorage.getItem("palavra");
    var tentativa = localStorage.getItem("letra");
    //para verificar se acertou
    var tamanho = palavra.length;
    var verificador = palavra.split('');
    //upper case e lower case para verificação
    var tentativaMaisucula = tentativa.toUpperCase();
    var tentativaMinuscula = tentativa.toLowerCase();
    console.log(tentativaMinuscula);
    //para erros
    var errou = true;

    for(var i = 0; i < tamanho; i ++){
        if(verificador[i] == tentativaMinuscula || verificador[i] == tentativaMaisucula){
            var troca_barra = document.getElementById("div"+[i]);
            troca_barra.innerHTML = tentativa;
            errou = false;
            acertos ++;
        }
    }
    if(errou === true){
        erros ++;
        calcularErros(erros);
    }
    fimDoGame();
}

function calcularErros(erros) {
    var erros = erros;
    var erros_p = document.getElementById("erros");
    erros_p.innerHTML = "Erros: " + erros;
}

function fimDoGame() {
    if(erros == 5) {
        var main = document.getElementById("main");
        var apagaPrincipal =  document.getElementById("excluiTudo");
        main.removeChild(apagaPrincipal);
        derrota();
    }
    if(acertos == localStorage.getItem("tamanho")){
        var main = document.getElementById("main");
        var apagaPrincipal =  document.getElementById("excluiTudo");
        main.removeChild(apagaPrincipal);
        vitoria();
    }
}

function derrota() {
    var main = document.getElementById("main");

    var tittle = document.createElement("h1");
    var divbt = document.createElement("div");
    var link = document.createElement("a");
    var button = document.createElement("button");
    var perdeu = document.createElement("p");

    tittle.innerHTML = "A palavra era: " + localStorage.getItem("palavra");
    tittle.className = "titulo1";

    divbt.className = "botaoDerrota";

    link.setAttribute("href", "../index.html");

    button.innerText = "Jogar de novo";
    button.className = "button";

    perdeu.innerHTML = "Você perdeu";
    perdeu.className = "pDerrota";

    main.appendChild(tittle);
    main.appendChild(divbt);
    divbt.appendChild(link)
    link.appendChild(button);
    divbt.appendChild(perdeu);
}

function vitoria() {
    var main = document.getElementById("main");

    var tittle = document.createElement("h1");
    var divbt = document.createElement("div");
    var link = document.createElement("a");
    var button = document.createElement("button");
    var perdeu = document.createElement("p");

    tittle.innerHTML = "A palavra era: " + localStorage.getItem("palavra");
    tittle.className = "titulo1";

    divbt.className = "botaoDerrota";

    link.setAttribute("href", "../index.html");

    button.innerText = "Jogar de novo";
    button.className = "button";

    perdeu.innerHTML = "Você ganhou. Brabo!!!!!!";
    perdeu.className = "pWin";

    main.appendChild(tittle);
    main.appendChild(divbt);
    divbt.appendChild(link)
    link.appendChild(button);
    divbt.appendChild(perdeu);
}

function excluiMsg() {
    localStorage.removeItem("msg");
}