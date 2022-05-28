const registrar = document.querySelector("#registrar")
const email = document.querySelector("#email")
const nome = document.querySelector("#name")
const turma = document.querySelector("#turma")
const password = document.querySelector("#password")
const password2 = document.querySelector("#password2")
const form = document.querySelector("#principal")

form.addEventListener("submit", evt => {
    evt.preventDefault()
    if (nome.value.trim() == "" ||  email.value.trim() == "" || turma.value.trim() == "" || password.value.trim() == "" || password2.value.trim() == "") {
        alert("preencha todos os campos")
        return
    } else if ( password.value !== password2.value){
        alert("senhas não combinam")
        return
    }
    location.href = "./index.html"
    alert("Cadastrado com sucesso")
})

