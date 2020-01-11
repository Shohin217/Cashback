const regularPercent = 0.01;
const increasedPercent = 0.05;
const specialPercent = 0.3;
const cashbackLimit = 3000;

const purchases = [
    flash = {
        amount: 250,
        category: regularPercent
    },
    HDD = {
        amount: 550,
        category: increasedPercent
    },
    SSD = {
        amount: 1000,
        category: specialPercent
    }
];

let cashback = 0;

for (let cashbackItem of purchases){
    cashback += cashbackItem.amount*cashbackItem.category;
}

if (cashback > cashbackLimit){
    cashback = cashbackLimit;
}

console.log (`Кэшбэк равен: ${cashback}`);

