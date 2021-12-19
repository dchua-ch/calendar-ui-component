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
console.log(today.getFullYear());
console.log(typeof today.getFullYear());
console.log(today.getDay());// apparently 0 is sunday o.o
console.log(typeof today.getDay());
console.log("Plying with myDate");
// seems like months run from 0 to 11, with 0 being january
myDate = new Date(1999,0,1,0,0,0,0);
console.log(myDate.toDateString());

console.log(myDate.getDay());

function getNumberOfDaysInMonth(year,month)
{
    //day 0 is last day of previous month
    return new Date(year,month + 1,0).getDate(); 
}

console.log("Number of days per month in 2021: ")
for(let i = 0; i < 11; i++)
{
    let year = 2021;
    console.log(getNumberOfDaysInMonth(year,i));
   

}