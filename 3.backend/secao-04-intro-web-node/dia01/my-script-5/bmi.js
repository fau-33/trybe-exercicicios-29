const weightInKg = 80;
const heightInCm = 178;

function handleBmi(weight, height) {
    console.log(`weight: ${weight}, Height: ${height}`);

    const heightInMeters = height / 100;
    const heightSquared = heightInMeters ** 2;

    const bmi = weight / heightSquared;

    return bmi;
};

function main() {
    const bmi = handleBmi(weightInKg, heightInCm);

    console.log(`BMI: ${bmi.toFixed(2)}`);
}

main();