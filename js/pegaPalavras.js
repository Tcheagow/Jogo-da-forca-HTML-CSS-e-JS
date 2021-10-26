function pegaPalavra() {
    var campo1 = document.getElementById("palavra").value;
    var campo2 = document.getElementById("tema").value;
    var tamanho = campo1.length;

    if(campo1.length > 0 && campo2.length > 0){
            // limpar campos
            var limpa_campo1 = document.getElementById("palavra");
            var limpa_campo2 = document.getElementById("tema");
            limpa_campo1.value = "";
            limpa_campo2.value = "";
            
            //logica do site
            localStorage.setItem("palavra", campo1);
            localStorage.setItem("tema", campo2);
            localStorage.setItem("tamanho", tamanho);
    }else{
        localStorage.setItem("msg", "msgAtiva");
        var mudarLink = document.getElementById("link");

        mudarLink.setAttribute("href", "./index.html");
    }
}
    
function exibeMensagem() {
    if(localStorage.getItem("msg") != null) {
        var msg = document.getElementById("msg");
        msg.classList.remove("msg");
    }
}





