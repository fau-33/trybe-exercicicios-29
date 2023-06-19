const fs = require('fs').promises;

async function main() {
    try {
         await fs.writeFile('./meu-arquivo2.txt', 'Meu textão');
        console.log('Arquivo escrito com sucesso!');
    } catch (err) {
        console.error(`Erro ao lê o arquivo: ${err.message}`);
    }
};

main();