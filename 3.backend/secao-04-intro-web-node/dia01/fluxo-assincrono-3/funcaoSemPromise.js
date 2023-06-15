function dividirNumeros(num1, num2) {
    if(num2 === 0) throw new Error('Não pode ser feito divisão pode zero');

    return num1 / num2;
}

try {
    const resutado = dividirNumeros(2, 0);
    console.log(`resultado: ${resutado}`);
} catch (e) {
    console.log(e.message);
}