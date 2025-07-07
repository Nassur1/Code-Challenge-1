const prompt = require('prompt-sync')();

function calculateChaiIngredients() {
    let input = prompt("Karibu! How many cups of Chai Bora would you like to make? ");
    let numberOfCups = parseInt(input);

    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        console.log("Please enter a valid number of cups.");
        return;
    }

    const waterPerCup = 200;
    const milkPerCup = 50;
    const teaLeavesPerCup = 1;
    const sugarPerCup = 2;

    const totalWater = waterPerCup * numberOfCups;
    const totalMilk = milkPerCup * numberOfCups;
    const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
    const totalSugar = sugarPerCup * numberOfCups;

    console.log(`\nTo make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
    console.log("\nEnjoy your Chai Bora!");
}

calculateChaiIngredients();
