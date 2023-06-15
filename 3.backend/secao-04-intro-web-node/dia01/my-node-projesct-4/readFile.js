const fs = require('fs').promises;

async function main() {
    try {
        const data = await fs.readFile('./meu-arquivo1.txt', 'utf-8');
        console.log(data);
    } catch (err) {
        console.error(`Erro ao lê o arquivo: ${err.message}`);
    }
};

main();