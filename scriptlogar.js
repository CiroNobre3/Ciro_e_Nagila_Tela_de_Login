/* let email = localStorage.getItem(localStorage.key)
let senha = localStorage.getItem(localStorage.value)

let ema2 = document.getElementById("email2").value
let sen2 = document.getElementById("senha2").value
console.log(ema2, sen2)
if (ema2 == email && sen2 == senha){
    alert("LOGIN CONCLUÍDO!")
}else{
    alert("ERROU")
} */

let email1 = document.getElementById("cad2")

email1.addEventListener("submit", (e) => {
    e.preventDefault()

    let ema2 = document.getElementById("email2").value
    let sen2 = document.getElementById("senha2").value

    let email = localStorage.key(ema2)
    let senha = localStorage.getItem(email)

    console.log(email)
    console.log(senha)
    
    if (ema2 == email && sen2 == senha) {
        alert("LOGIN CONCLUÍDO!")
    } 
    else{
        alert("EMAIL E SENHA INCORRETOS!")
    }


})