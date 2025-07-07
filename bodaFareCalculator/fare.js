const prompt = require('prompt-sync')();

function calculateFare() {
    let input = prompt("Unafika wapi Mkubwa? Kilometer ngapi? ");
    let distanceInKm = parseFloat(input);

    if (isNaN(distanceInKm) || distanceInKm < 0) {
        console.log("Tafadhali weka kilomita halali.");
        return;
    }

    const baseFare = 50;
    const chargePerKm = 15;
    const extraCharge = distanceInKm * chargePerKm;
    const totalFare = baseFare + extraCharge;

    console.log(`\nUko kwote? Iyo ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${extraCharge}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("\nPanda Pikipiki!");
}

calculateFare();
