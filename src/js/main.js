

let drives = {
    flash: 250,
    HDD: 550,
    SSD: 1000,
}
const regular =  drives.flash * 0.01;
const increased = drives.HDD * 0.05;
const special = drives.SSD * 0.3;

let cash = regular+increased+special;

if (cash > 3000){
    cash = 3000;
};

console.log (`Кэшбэк равен: `+cash);
