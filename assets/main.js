const operations = {
  "+": function (a, b) { return a + b },
  "-": function (a, b) { return a - b },
  "x": function (a, b) { return a * b },
  "/": function (a, b) { return a / b },
  "=": function (a, b) { return a}
}
const numberButtons = document.querySelectorAll(".number")
const operationButtons = document.querySelectorAll(".operation")
const equalButton = document.querySelector(".button__equal")
const screen = document.querySelector(".screen p")


//ez csak a screen része

const onNumberPressed = function (event) {
  //scren.textContent = scren.textContent === "0" ? "" : scren.textContent (gyakorlás)
  if (screen.textContent === "0") {
    screen.textContent = ""
  }
  screen.textContent += event.target.textContent
}

numberButtons.forEach(button => {
  button.addEventListener("click", onNumberPressed)
})

//
const onOperationPressed = function (event) {
  if (Object.keys(operations).includes(screen.textContent.slice(-1))) {
    screen.textContent = screen.textContent.slice(0, -1)
  }
  screen.textContent += event.target.textContent
}

operationButtons.forEach(button => {
  button.addEventListener("click", onOperationPressed)
})

document.querySelector(".button__clean").addEventListener("click", () => screen.textContent = "0")

//innentől jön a számolás része

equalButton.addEventListener("click", function (){
  screen.textContent += "="
  calculate()
})

function calculate() {
  let number1 = "", number2 = "", operation = ""
  for (let i = 0; i < screen.textContent.length; i++) {
    if (Object.keys(operations).includes(screen.textContent[i])) {
      if (operation) {
        number1 = operations[operation](parseFloat(number1), parseFloat(number2))
        operation = ""
        number2 = ""
      } 
      operation = screen.textContent[i]
    } else {
      if (operation) {
        number2 += screen.textContent[i]
      } else {
        number1 += screen.textContent[i]
      }
    }
  }

  screen.textContent = isNaN(number1) ? "ERROR" : number1
}










// const usedOperation = []
// let numbers = 10
// let numbers2 = 22
// let usedOperation = "%"

// numberButtons.forEach(button => {
//      button.addEventListener("click", handleClick => numbers += button.textContent)
//    })


// operationButtons.forEach(button => {
//     button.addEventListener("click", handleClick => usedOperation.push(button.textContent))
//   })

// for (let i = 0; i < usedOperation.length; i++) {
//     console.log(operations[usedOperation[i]](2, 2))
// }