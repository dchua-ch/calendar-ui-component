const timeElapsed = Date.now();
let today = new Date(timeElapsed);

console.log('Date 2');
// month index starts from 0, i.e. 0 is january, but day index starts from 1
// goodness me
let myDate = new Date(2021,0,1,0,0,0);
console.log(myDate);
// incrementDate();


// function incrementDate()
// {
//     for(let i = 0; i < 20; i++)
//     {
//         today.setDate(today.getDate()+1);
//         console.log(today);
//     }
// }