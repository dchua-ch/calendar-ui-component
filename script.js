let dayGrid = document.querySelector(".day-grid");
let calendarDiv = document.querySelector(".calendar");
console.log(dayGrid);


// day object ids should be date
let renderThis = '';

let dayStrings = ['Sun','Mon','Tue','Wed', 'Thu', 'Fri','Sat'];
dayStrings.forEach(day => {renderThis += `<div class = \'day-of-week\'>${day}</div>`})

// render month and year

for(let i = 1; i <= 35; i++)
{
    if (i <= 31)
    {
        renderThis += `<div class = \'day\'><p>${i}</p></div>`;
    }
    else
    {
        renderThis += `<div class = \'day\'></div>`;
    }

}
console.log(renderThis);
dayGrid.innerHTML += renderThis;