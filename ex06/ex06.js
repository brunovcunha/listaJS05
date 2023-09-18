function calcular(operador) {
    valor01 = document.getElementById("valor1").value.trim();
    valor02 = document.getElementById("valor2").value.trim();

    if (valor01 === '' || valor02 === '') {
        alert("Digite todos os valores!");
    } else {

        if (operador === "+") {
            resultado = parseInt(valor01) + parseInt(valor02);
        } else if (operador === "-") {
            resultado = parseInt(valor01) - parseInt(valor02);
        } else if (operador === "*") {
            resultado = parseInt(valor01) * parseInt(valor02);
        } else if (operador === "/") {
            
            mensagem = (valor02 == 0) ? alert(`Não é possível dividir por 0`) : resultado = parseInt(valor01) / parseInt(valor02);
            
        }

        document.getElementById("result").value = resultado;
    }


}
