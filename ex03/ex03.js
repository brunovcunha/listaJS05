function pegarValor(){
    numero = document.getElementById("numero").value.trim();
    if(numero === ''){
        alert("Favor inserir um texto")
    }else{
        resultado = parseInt(numero) * 2;

        document.getElementById("resultado").value = resultado;
    }
}
