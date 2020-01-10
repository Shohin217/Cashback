

const regular = 0.01;
const increased = 0.05;
const special = 0.3;
const cashbackLimit = 3000;

const flash = {
    price: 250,
    category: regular
};

const HDD = {
    price: 550,
    category: increased
};

const SSD = {
    price: 1000,
    category: special
};

let cash = (flash.price*flash.category)+(HDD.price*HDD.category)+(SSD.price*SSD.category);

if (cash > cashbackLimit){
    cash = cashbackLimit;
};

console.log (`Кэшбэк равен: `+cash);