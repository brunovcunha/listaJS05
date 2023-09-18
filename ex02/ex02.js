function pegarTexto(){
    texto = document.getElementById("txtNome").value.trim();
    if(texto === ''){
        alert("Favor inserir um texto")
    }else{
        alert(texto.toUpperCase())
    }
   
   
}

function inserirTexto(){
    texto = document.getElementById("txtNome").value="IFTM";
}