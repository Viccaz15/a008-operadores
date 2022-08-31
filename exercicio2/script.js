let num1 = prompt("Digite um número.")
let num2 = prompt("Digite outro número")
console.log("O primeiro número é maior que o segundo?", num1 > num2)

const igual = num1 === num2
console.log("O primeiro número é igual ao segundo?", igual)

 const divisível = (num1 % num2) === 0
console.log("O primeiro número é divisível pelo segundo?", divisível)

const divisívelL = (num2 % num1 ) === 0
console.log("O segundo numero é divisivel pelo primeiro?", divisívelL)