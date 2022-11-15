const inputText = document.querySelectorAll('.input')
const inputEmail = document.getElementById('email')
const inputSubmit = document.getElementById('submit')
const mensagemDeErro = document.querySelectorAll('.message-error')

inputSubmit.addEventListener ('click', () => 
    inputText.forEach(function (input, indice) {
    event.preventDefault()
    if (input.validity.valid === true) {            
        input.classList.add("valido")
        input.classList.remove("invalido")
        input.classList.remove('icon-error')
        mensagemDeErro[indice].classList.add("preenchido")
    } else {
        input.classList.remove("valido")
        input.classList.add('invalido')
        input.classList.add('icon-error')
        mensagemDeErro[indice].classList.remove('preenchido')
        mensagemDeErro[indice].classList.add("nao-preenchido")
    }
})
)