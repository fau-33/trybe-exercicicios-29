const readline = require('readline-sync');

const weightInKg = 80;
const heightInCm = 178;

function handleBmi(weight, height) {
    console.log(`weight: ${weight}, Height: ${height}`);

    const heightInMeters = height / 100;
    const heightSquared = heightInMeters ** 2;

    const bmi = weight / heightSquared;

    return bmi;
};

const BMI_MAX_AND_MIN = {
    'Underweight': {
      minBMI: 0,
      maxBMI: 18.4,
    },
    'Normal Weight': {
      minBMI: 18.5,
      maxBMI: 24.9,
    },
    'Overweight': {
      minBMI: 25,
      maxBMI: 29.9,
    },
    'Obese Class I': {
      minBMI: 30.0,
      maxBMI: 34.9,
    },
    'Obese Class II': {
      minBMI: 35,
      maxBMI: 39.9,
    },
    'Obese Class III': {
      minBMI: 40,
      maxBMI: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
    },
  };


function handleBMIResult(bmi) {
    const statuses = Object.keys(BMI_MAX_AND_MIN);

    const resultFind = statuses.find((status) => {
        const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status];
        
        return bmi >= minBMI && bmi <= maxBMI;
    });

    return resultFind;
}  

function main() {

    //const weight = readline.questionFloat('Qual é seu peso? (kg)');
    //const height = readline.questionInt('Qual a sua altura? (cm)');

    //const bmi = handleBmi(weight, height);
    const bmiResult = handleBMIResult(bmi);

    console.log(`bmiResult: ${bmiResult}`);

    //console.log(`BMI: ${bmi.toFixed(2)}`);
}

main();