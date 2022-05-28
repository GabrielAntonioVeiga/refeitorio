const form = document.querySelector("#principal")
const login = form.querySelector("#login")
const registrar = form.querySelector("#registrar")


const nome = form.querySelector("#name")
const password = form.querySelector("#password")

const maskElements = document.querySelectorAll("[data-mascara]")

const fnMasks = {
    matricula: maskMatricula
}

form.addEventListener("submit", evt => {
    evt.preventDefault()
    if (nome.value.trim() == "" || password.value.trim() == "") {
        alert("ooo caraio manda uma parada")
        return
    }
    alert("Ollaaaq")
    location.href = "./indexRegistro.html"
})

registrar.addEventListener("click", evt => {
    evt.preventDefault()
    location.href = "./indexRegistro.html"
})




function maskMatricula(el) {
    el.addEventListener("keydown", ev => { 
        const key = ev.key
        if(key == "Backspace") return
        var characters = /^[A-z ]+$/;
        if (key.match(characters)) {
            ev.preventDefault()
        }
    })
}

maskElements.forEach(el => {
    const maskName = el.dataset.mascara
    const fnMascara = fnMasks[maskName]
    fnMascara(el)
})




const visibilityBtn = document.querySelector("#visibilityBtn")
const span = document.querySelector(".material-symbols-outlined")

visibilityBtn.addEventListener("click", () => {
    if(password.type === "password" ) {
        password.type = "text"
        span.innerHTML = "visibility_off"

    } else {
        password.type = "password"
        span.innerHTML = "visibility"
    }
})




