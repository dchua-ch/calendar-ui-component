const timeElapsed = Date.now();
const today = new Date(timeElapsed);

//today.toDateString();
console.log(today);
console.log(typeof today);
console.log(today.getDate());
let todayNum = today.getDate();
let todayString = today.toDateString();
let todayMonth = today.getMonth();
console.log(todayNum);
console.log(todayString);
console.log(typeof todayString);
console.log(todayMonth);// i guess months run from 0 to 11

myDate = new Date(1999,0,2);
console.log(myDate.toDateString());
console.log(today.getFullYear());
console.log(typeof today.getFullYear());