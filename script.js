
let objeto = {
    chapa1: 0,
    chapa2: 0
}


let canIStart = false
console.log(objeto.chapa1, objeto.chapa2)
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

const inputScreen = document.getElementById('input-screen')
function ok() {
    if(canIStart === true){

        if(input.value == 1) {
            objeto.chapa1++
        } else if(input.value == 4){
            objeto.chapa2++
        } else {
            console.log('nulo')
        }    
        inputScreen.style.display = 'none'
    } 
}

let chapas = localStorage.getItem('chapa')

localStorage.setItem('chapa', JSON.stringify(objeto))
var retrieve = localStorage.getItem('chapa')

console.log('chapa', JSON.parse(retrieve))
