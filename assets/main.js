const operations = {
    "+": function (a,b) {return a + b},
    "-": function (a,b) {return a - b},
    "*": function (a,b) {return a * b},
    "/": function (a,b) {return a / b}
}

const usedOperation = ["*"]
let numbers = ""

const numberButtons = document.querySelectorAll(".number")
const operationButtons = document.querySelectorAll(".operation")
const equalButton = document.querySelector(".button__equal")

numberButtons.forEach(button => {
     button.addEventListener("click", handleClick => numbers += button.textContent) 
     //numbers.push(button.textContent) nem jó, de nem lett ez sem jó: numbers.push(parseInt(button.textContent))
   })


operationButtons.forEach(button => {
    button.addEventListener("click", handleClick => usedOperation.push(button.textContent))
  })


//Meg kéne oldanom kb a parseInt(numbers), vagy valami segítségével azt, hogy a numbers változó numberereket tartalmazzon, ne stringeket.

//Semmire nem jutottam, ezért inkább valahogy megpróbálom meghívni az objectemben lévő fügvényeket.

for (let i = 0; i < usedOperation.length; i++) {
    console.log(operations[usedOperation[i]](2, 2))
}

//Nem hiszem el, hogy működik, next time megírom normálisan a for ciklusból levont dolgokat.