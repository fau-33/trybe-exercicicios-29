const fs = require("readline-sync").promises;

/* async function readAll() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
    const simpsons = JSON.parse(fileContent);
    const strings = simpsons.map(({id, name}) => `${id} - ${name}`);

    strings.forEach((string) => console.log(string));
};
 */

async function getSimpsonsId(id) {
  const fileContent = await fs.readFile("./simpsons.json", "utf-8");
  const simpsons = JSON.parse(fileContent);

  const choseSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

  if (!choseSimpson) {
    throw new Error("id não encontrado");
  }

  return choseSimpson;
}

async function filterSimpsons() {
  const fileContent = await fs.readFile("./simpsons.json", "utf-8");

  const simpsons = JSON.parse(fileContent);
  const newArray = simpsons.filter(
    (simpson) => simpson.id !== "10" && simpson.id !== "6"
  );

  await fs.writeFile("./simpsons.json", JSON.stringify(newArray));
}

async function createSimpsonsFamily() {
  const fileContent = await fs.readFile("./simpsons.json", "utf-8");

  const simpsons = JSON.parse(fileContent);
  const familyIds = [1, 2, 3, 4];
    const simpsonsFamily = simpsons
      .filter((simpson) => familyIds.includes(Number(simpson.id)));
}

async function addNelsonToFamily() {
    const fileContent = await fs
      .readFile('./simpsonsFamily.json', 'utf-8');
  
    const simpsonsFamily = JSON.parse(fileContent);
    simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
  }

  async function replaceNelson() {
    const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
  
    // Filtramos o array para remover o personagem Nelson
    const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');
  
    // Criamos um novo Array contendo a personagem Maggie
    const simpsonsWithMaggie = simpsonsWithoutNelson
      .concat([{ id: '15', name: 'Maggie Simpson' }]);
    // com spread seria assim:
    // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]
  
    // Escrevemos o novo array no arquivo e retornamos a promise de escrita
    return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
  }

async function main() {
    createSimpsonsFamily();
  filterSimpsons();
  await readAll();
  const simpson = await getSimpsonById(1);
  console.log(simpson);
}

main();
