class Day
{
    constructor(date)
    {
        //this should be a javascript date object I guess
        this.date = date;
        this.highlighted = false;
    }
    
}

export class Calendar
{

    constructor()
    {
       
        this.timeElapsed = Date.now();
        this.today = new Date(this.timeElapsed);
        //this.day = new Day("hehe");
        //Numbers
        this.currentMonth = this.today.getMonth();
        this.currentDay = this.today.getDate();
        this.currentDayOfWeek = this.today.getDay();
        this.currentYear = this.today.getFullYear();
        // this.currentNumberOfDays = getNumberOfDaysInMonth(this.currentMonth,this.currentYear );
        // this.currentNumberOfDays = this.getNumberOfDaysInMonth();
        this.updateNumberOfDaysInMonth();
       


    }

    updateNumberOfDaysInMonth()
    {
        this.currentNumberOfDays = new Date(this.currentYear ,this.currentMonth + 1,0).getDate();
    }

    incrementMonth()
    {
        this.currentMonth += 1;
        this.updateNumberOfDaysInMonth();
        this.render();
    }

    decrementMonth()
    {
        this.currentMonth -= 1;
        this.updateNumberOfDaysInMonth();
        this.render();
    }

    render()
    {
        console.log("Rendering calendar");
        //console.log(this.day.name)
        const monthStrings = ['January', 'February', 'March','April','May','June','July','August','September','October','November','December'];

        let calendarDiv = document.querySelector(".calendar");
        // console.log(calendarDiv);

        // day object ids should be date
        let renderThis = '';

        // render div with month, year and next/previous buttons
        renderThis += `<h2 class = \'month-year\'>`;

        // render previous button
        renderThis += `<button type = \'button\' class = \'next-previous-button\' onclick = \'previousMonth()\'>\<</button>`;

        renderThis += '<div>'

        // render month 
        renderThis += `<span class = \'month\'>${monthStrings[this.currentMonth]}</span>`;

        // render year
        renderThis += `<span class = \'span\'>${this.currentYear}</span>`;

        renderThis += '</div>'

        // render next button
        renderThis += `<button type = \'button\' class = \'next-previous-button\' onclick = \'nextMonth()\' >\></button></h2>`
   

        // render dayGrid
        renderThis += '<div class = \'day-grid\'>';

        // render days of week row
        let dayStrings = ['Sun','Mon','Tue','Wed', 'Thu', 'Fri','Sat'];
        dayStrings.forEach(day => {renderThis += `<div class = \'day-of-week\'>${day}</div>`})
        console.log(this.currentNumberOfDays);
        for(let i = 1; i <= 35; i++)
        {
            if (i <= this.currentNumberOfDays)
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
    }
    

}

export function nextMonth()
{
    myCalendar.incrementMonth();
}
export function previousMonth()
{
    myCalendar.decrementMonth();
}

function getNumberOfDaysInMonth(month,year)
{
    //day 0 is last day of previous month
    // to find number of days in month, get last day of (month + 1) XD

    // e.g. to find number of days in january 2021, create a new date object
    // corresponding to february 2021 and get last day of previous month
    return new Date(year,month + 1,0).getDate(); 
}