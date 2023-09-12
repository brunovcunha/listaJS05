function pegarValor(){
    numero = document.getElementById("numero").value.trim();
    if(texto === ''){
        alert("Favor inserir um texto")
    }else{
        resultado = document.getElementById("resultado").value=`${numero*2}`;
    }
}
