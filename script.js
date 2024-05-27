function generateFibonacci() {
    const input = document.getElementById('numberInput').value;
    const number = parseInt(input);

    // Verificar si el dato de entrada es un número
    if (isNaN(number) || number <= 0) {
        alert("Por favor, introduce un número entero positivo.");
        return;
    }

    // Generar la serie de Fibonacci
    const fibonacciSeries = [];
    let a = 0, b = 1, nextTerm;

    for (let i = 0; i < number; i++) {
        if (i === 0) {
            fibonacciSeries.push(a);
        } else if (i === 1) {
            fibonacciSeries.push(b);
        } else {
            nextTerm = a + b;
            fibonacciSeries.push(nextTerm);
            a = b;
            b = nextTerm;
        }
    }

    // Mostrar la serie en el DOM
    document.getElementById('result').innerText = fibonacciSeries.join(', ');
}

// Opcional: Añadir un evento para manejar la tecla Enter en el input
document.getElementById('numberInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        generateFibonacci();
    }
});
