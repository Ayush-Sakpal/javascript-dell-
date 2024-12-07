// ################################################## Numbers ##################################################

const score = 400;
console.log(score);

const balance = new Number(800.928931);
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(3));

const another_num = 327.973972;
console.log(another_num.toPrecision(5));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-US'));
console.log(hundreds.toLocaleString('en-IN'));