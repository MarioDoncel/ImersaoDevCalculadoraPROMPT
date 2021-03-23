let firstValue = parseInt(prompt('Digite o primeiro valor.')) || 0
let secondValue = parseInt(prompt('Digite o segundo valor.')) || 0
let operator = prompt('Digite o operador que voce deseja usar.(opções: *, /, +, - )')
let result=""

function writeResult(operator) {
    document.write(`<h2> ${firstValue} ${operator} ${secondValue} = ${result} </h2>`)
}

function verifyOperator(operator, callback) {
    switch (operator) {
        case "*":
            result = firstValue * secondValue
            writeResult(operator)
            break;
        case "/":
            result = firstValue / secondValue
            writeResult(operator)
            break;
        case "+":
            result = firstValue + secondValue
            writeResult(operator)
            break;
        case "-":
            result = firstValue - secondValue
            writeResult(operator)
            break;
    
        default:
            alert('Operador invalido.')
            operator = prompt('Digite o operador que voce deseja usar.(opções: *, /, +, - )')
            callback(operator, callback)
            break;
    }
    
}
verifyOperator(operator, verifyOperator)




