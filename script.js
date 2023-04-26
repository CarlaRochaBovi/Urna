let objeto = JSON.parse(localStorage.getItem("chapa")) || {
  fenix: 0,
  rep: 0,
  fazerADiferenca: 0,
  estudantesEmAcao: 0,
  lionBlack: 0,
  snake: 0,
};

let canIStart = false;
const inicialScreen = document.getElementById("inicial-screen");
function start() {
  expression = "";
  input.value = expression;
  canIStart = true;
  input.value = 0;
  inicialScreen.style.display = "none";
}

const btn = document.getElementById("btn");
const input = document.getElementById("input");
let expression = "";
function calculate(num) {
  expression += num;
  input.value = expression;
}

function erase() {
  expression = "";
  input.value = expression;
}

function nulo() {
  if (canIStart === true) {
    inputScreen.style.display = "none";
    setTimeout(again, 5000);
    return (canIStart = false);
  }
}

function again() {
  inputScreen.style.display = "flex";
  inicialScreen.style.display = "flex";
}

const inputScreen = document.getElementById("input-screen");
const confirmBtn = document.getElementById("confirm");

confirmBtn.addEventListener("click", function () {
  if (canIStart === true) {
    if (input.value == 14) {
      objeto["fenix"] += 1;
      localStorage.setItem("chapa", JSON.stringify(objeto));
    } else if (input.value == 7) {
      objeto["rep"] += 1;
      localStorage.setItem("chapa", JSON.stringify(objeto));
    } else if (input.value == 54) {
      objeto["fazerADiferenca"] += 1;
      localStorage.setItem("chapa", JSON.stringify(objeto));
    } else if (input.value == 23) {
      objeto["estudantesEmAcao"] += 1;
      localStorage.setItem("chapa", JSON.stringify(objeto));
    } else if (input.value == 67) {
      objeto["lionBlack"] += 1;
      localStorage.setItem("chapa", JSON.stringify(objeto));
    } else if (input.value == 66) {
      objeto["snake"] += 1;
      localStorage.setItem("chapa", JSON.stringify(objeto));
    } else {
      return alert("NÃO TEMOS UMA CHAPA COM ESSE NÚMERO : " + input.value);
    }
    expression = "";
    input.value = expression;
    canIStart = false;
    inputScreen.style.display = "none";
  }

  setTimeout(again, 5000);

  console.log(objeto);
});
