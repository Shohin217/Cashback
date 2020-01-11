const regular = 0.01;
const increased = 0.05;
const special = 0.3;
const cashbackLimit = 3000;

const purchases = [
    flash = {
        price: 250,
        category: regular
    },
    HDD = {
        price: 550,
        category: increased
    },
    SSD = {
        price: 1000,
        category: special
    }
];

let cashback = 0;

for (let cashPercent of purchases){
    cashback += cashPercent.price*cashPercent.category;
}

if (cashback > cashbackLimit){
    cashback = cashbackLimit;
}

console.log (`Кэшбэк равен: ${cashback}`);

