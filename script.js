
reset()

function reset() {
    canIReset = false
    if(canIReset === true) {
        localStorage.clear()
    }
}


let objeto = JSON.parse(localStorage.getItem('chapa')) || {
    primeiraChapa: 0,
    segundaChapa: 0
}



let canIStart = false
const inicialScreen = document.getElementById('inicial-screen')
function start() {
    canIStart = true
    input.value = 0
    inicialScreen.style.display = 'none'
}

const btn = document.getElementById('btn')
const input = document.getElementById('input')
let expression =  ''
function calculate(num) {
    expression = num
    input.value = expression
}

function erase() {
    input.value = 0
}

function nulo() {
    if(canIStart === true) {
        inputScreen.style.display = 'none'
        setTimeout(again, 5000)
        return canIStart = false
    }   
}

function again() {
    inputScreen.style.display = 'flex'
    inicialScreen.style.display = 'flex'
}



const inputScreen = document.getElementById('input-screen')
const confirmBtn = document.getElementById('confirm')

confirmBtn.addEventListener('click', function()  {

    if(canIStart === true){

        if(input.value == 1) {
            objeto['primeiraChapa'] += 1
            localStorage.setItem('chapa', JSON.stringify(objeto))

        } else if(input.value == 4){
            objeto['segundaChapa'] += 1
            localStorage.setItem('chapa', JSON.stringify(objeto))

        } else {
            return alert("NÃO TEMOS UMA CHAPA COM ESSE NÚMERO: " + input.value)
        }    
        canIStart = false
        inputScreen.style.display = 'none'
    } 
    
    setTimeout(again, 5000)
    console.log(objeto)
})


