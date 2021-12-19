
let calendarDiv = document.querySelector(".calendar");
// console.log(calendarDiv);


// day object ids should be date
let renderThis = '';

// render month and year
renderThis += '<h2 class = \'month-year\'> <span class = \'month\'>January</span><span class = \'span\'>2021</span></h2>';

// render dayGrid
renderThis += '<div class = \'day-grid\'>';

// render days of week row
let dayStrings = ['Sun','Mon','Tue','Wed', 'Thu', 'Fri','Sat'];
dayStrings.forEach(day => {renderThis += `<div class = \'day-of-week\'>${day}</div>`})



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

renderThis += '</div>';
// console.log(renderThis);
calendarDiv.innerHTML += renderThis;