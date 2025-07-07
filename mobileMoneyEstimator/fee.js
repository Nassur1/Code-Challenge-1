const prompt = require('prompt-sync')();

function estimateTransactionFee() {
    let input = prompt("Unatuma Ngapi? (KES): ");
    let amountToSend = parseFloat(input);

    if (isNaN(amountToSend) || amountToSend <= 0) {
        console.log("Tafadhali weka kiasi sahihi cha kutuma.");
        return;
    }

    const feeRate = 0.015;
    const minFee = 10;
    const maxFee = 70;

    let fee = amountToSend * feeRate;
    fee = Math.max(minFee, Math.min(fee, maxFee));
    const totalDebited = amountToSend + fee;

    console.log(`\nSending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}`);
    console.log("\nSend Money Securely!");
}

estimateTransactionFee();
