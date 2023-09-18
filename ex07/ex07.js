function validaForm(){
    login = document.getElementById("login").value.trim();
    senha = document.getElementById("senha").value.trim();
    confirm = document.getElementById("confirm").value.trim();

    if(login === '' || senha === '' || confirm === ''){
        alert("Preencha todos os campos!");
    } else{
        confirmacao = (senha == confirm) ? alert("Seu login está correto! SEJA BEM VINDO!") : alert("Senha de confirmação incorreta. Certifique-se de que a senha digitada corresponda à senha original. Verifique maiúsculas e minúsculas.")
    }
}