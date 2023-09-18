let number1 = Number(prompt("Digite o primeiro numero:"))
let number2 = Number(prompt("Digite o segundo numero:"))

alert(`A soma dos dois numeros e: ${number1 + number2}`)
alert(`A subtracao dos dois numeros e: ${number1 - number2}`)
alert(`A multiplicacao dos dois numeros e: ${number1 * number2}`)
alert(`A divisao dos dois numeros e: ${number1 / number2}`)
alert(`O resto da divisao dos dois numeros e: ${number1 % number2}`)

let soma = number1 + number2
if(soma%2 == 0){
	alert(`A soma dos dois numeros e Par: ${soma}`)
}else{
	alert(`A soma dos dois numeros e Impar: ${soma}`)
}

if (number1 == number2) {
  alert("Os numeros inseridos sao iguais")
} else {
  alert("Os numeros inseridos sao diferentes")
}