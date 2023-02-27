

let objeto = {
    chapa1: 0,
    chapa2: 0
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
            objeto['chapa1'] += 1
        } else if(input.value == 4){
            objeto['chapa2'] += 1
        } else {
            return alert("NÃO TEMOS UMA CHAPA COM ESSE NÚMERO: " + input.value)
        }    
        canIStart = false
        inputScreen.style.display = 'none'
    } 
    localStorage.setItem('chapa', JSON.stringify(objeto))
    setTimeout(again, 5000)
    console.log(objeto)
})

objeto = JSON.parse(localStorage.getItem('chapa'))

