var email1 = document.getElementById("cad")

email1.addEventListener("submit", (e) => {
    e.preventDefault()

    var nomeemail = document.getElementById("email").value
    var nomesenha = document.getElementById("senha").value
    var enviar1 = document.getElementById("enviar")

    localStorage.setItem(nomeemail, nomesenha)
    /* document.getElementById("conteudo").insertAdjacentHTML('beforeend', "Nome: " + nomeemail + "<br> Senha: ")
    document.getElementById("conteudo").insertAdjacentHTML('beforeend', nomesenha) */
    /* O código acima faz aparecer o email e a senha na tela */
    console.log(nomeemail, nomesenha)

    enviar1.addEventListener("click", function () {
        if (nomeemail == 0 && nomesenha == 0 || nomeemail == 0 && nomesenha == nomesenha || nomeemail == nomeemail && nomesenha == 0){
            localStorage.clear()
            alert("EMAIL E SENHA OBRIGATÓRIOS!")
            location.reload()
        }else{
            location.href = "logar.html"
        }
    })
})


