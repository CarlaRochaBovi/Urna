
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
        return "nulo"
    }   
}

function again() {
    inputScreen.style.display = 'flex'
    inicialScreen.style.display = 'flex'
}

let objeto = {
    chapa1: 0,
    chapa2: 0
}

const inputScreen = document.getElementById('input-screen')
function ok() {
    if(canIStart === true){

        if(input.value == 1) {
            objeto.chapa1++
        } else if(input.value == 4){
            objeto.chapa2++
        } else {
            "esse numero é inválido"
        }    
        canIStart = false
        inputScreen.style.display = 'none'
    } 
    localStorage.setItem('chapa', JSON.stringify(objeto))
    setTimeout(again, 5000)
    console.log(objeto.chapa1, objeto.chapa2)
}

objeto = JSON.parse(localStorage.getItem('chapa'))

