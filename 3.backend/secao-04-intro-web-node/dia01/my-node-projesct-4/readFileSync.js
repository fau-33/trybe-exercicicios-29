const fs = require('fs');

const nomeDoArquivo = 'meu-aquivo.txt';

try {
    const data = fs.readFileSync(nomeDoArquivo, 'utf-8');
    console.log(data);
}catch(err) {
    console.error(`Erro ao lê o arquivo: ${err.path}`);
    console.log(err);
}