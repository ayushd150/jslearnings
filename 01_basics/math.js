const b = new Number(400.336)
console.log(b.toFixed(2));//400 to 400.00 and 400.336 to 400.34
const hun = 1000000
console.log(hun.toLocaleString()); //1,000,000
console.log(hun.toLocaleString('en-IN')); //10,00,000
const u = 123.8966
console.log(u.toPrecision(4)); // means that total digits has to be 4
//math.random values always between 0 and 1
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min)