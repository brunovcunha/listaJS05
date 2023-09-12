

// solução 02
// // function mostrarMsg(codigo){
// //     if(codigo == 0){
// //         alert('Clicou em mim!');
// //     }
// //     else if(codigo == 1){
// //         alert('Passou por mim!');
// //     }
// //     else if(codigo == 2){
// //         alert('Volte aqui!');
// //     }
// // }

//solução 03
// function mostrarMsg(msg){
//     alert(msg);
// }

function pegarTexto(){
    texto = document.getElementById("txtNome").value.trim();
    if(texto === ''){
        alert("Favor inserir um texto")
    }else{
        alert(texto)
    }
   
   
}

function inserirTexto(){
    texto = document.getElementById("txtNome").value="IFTM";
}