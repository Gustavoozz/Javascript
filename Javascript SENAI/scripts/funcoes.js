function calcular() {
    event.preventDefault();
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
    let res;
    let op = document.getElementById("operacao").value

    // Nan = Not a Number.
    if( isNaN(n1) || isNaN(n2)) {
        alert("Preencha todos os campos!")
        return;
    }

        if(op == '+') {
            res = somar(n1, n2);
            console.log(`Resultado: ${res}`)
        } else if (op == '-') {
            res = subtrair(n1, n2);
            console.log(`Resultado: ${res}`)
        }
        else if (op == '*') {
            res = multiplicar(n1, n2);
            console.log(`Resultado: ${res}`)
        }
        else if (op == '/') {
            res = dividir(n1, n2);
            console.log(`Resultado: ${res}`)
        }
        else {
            res = "Operação inválida!"
            console.log(`Resultado: ${res}`)
        }

        
        document.getElementById('resultado').innerText = res;
        // Fim da função.


function somar(x, y) {
    return (x + y).toFixed(2);
}

function subtrair(x, y) {
    return (x - y).toFixed(2);
}

function multiplicar(x, y) {
    return (x * y).toFixed(2);
}
function dividir(x, y) {
    if (y == 0) {
        return "Impossível dividir por zero!"
        // Pode dar Infinity.
    }
    return x / y;
}
}