
function pegarValor(){
    nota1Result = document.getElementById("nota01").value.trim('');
    nota2Result = document.getElementById("nota02").value.trim('');

    if(nota1Result === '' || nota2Result === ''){
        alert("Digite um valor válido!")
    }else{
        resultado = parseInt(nota1Result) + parseInt(nota2Result);

        mensagem = (resultado >= 60) ? alert(`APROVADO, a nota final foi de: ${resultado} pontos`) : alert(`REPROVADO, faltaram: ${60 - resultado} ponto(s)`);
    }
}