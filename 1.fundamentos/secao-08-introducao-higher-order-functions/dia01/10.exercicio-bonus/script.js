// Exercícios - Bônus - Game Actions Simulator

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
// Parte 1
// Crie uma função que retorne o dano do dragão.
//O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonAttack = (dragon) => {
  const minDmg = 15;
  const maxDmg = Math.floor(Math.random() * dragon.strength);

  const dragonDmg = maxDmg > minDmg ? maxDmg: minDmg;

  return dragonDmg;
}

//console.log(dragonAttack(50));

// Crie uma função que retorne o dano causado pelo warrior.
//O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorAttack = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = Math.floor(Math.random() * (minDmg * warrior.strength));

  const warriorDmg = maxDmg > minDmg ? maxDmg: minDmg;

  return warriorDmg;
}

//console.log(warriorAttack(100));

// Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.

const mageAttack = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  }

  if (mageMana > 15) {
    const mageDmg = minDmg < maxDmg ? maxDmg:minDmg;
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDmg;
    return turnStats;
  }

  return turnStats;
}

// Parte 2
// Crie a primeira HOF que compõe o objeto gameActions.
//Ela será a função que simula o turno do personagem warrior. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor da chave damage do warrior.

// Crie a segunda HOF que compõe o objeto gameActions.
//Ela será a função que simula o turno do personagem mage. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor das chaves damagee mana do mage.

// Crie a terceira HOF que compõe o objeto gameActions.
//Ela será a função que simula o turno do monstro dragon. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disso, ela também deve atualizar o valor da chave damage do monstro.

// Adicione ao objeto gameActions uma função de primeira classe que retorna o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.


const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    dragon.healthPoints -= warriorDamage;
    warrior.damage = warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack(mage);
    const mageDamage = mageTurnStats.damageDealt;
    mage.mana -= mageTurnStats.manaSpent;
    dragon.healthPoints -= mageDamage;
    mage.damage = mageDamage;
  },
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack(dragon);
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults())