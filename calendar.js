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
        this.day = new Day("hehe");
        //Numbers
        // this.currentMonth = this.today.getMonth();
        // this.currentDay = this.today.getDate();
        // this.currentDayOfWeek = this.today.getDay();
        // this.currentYear = this.today.getFullYear();
        this.currentNumberOfDays = getNumberOfDaysInMonth(this.today.getMonth(),this.today.getFullYear());
        // this.currentNumberOfDays = new Date(this.currentYear,this.currentMonth + 1,0).getDate();
    
    }

    render()
    {
        console.log("Rendering calendar");
        console.log(this.day.name)
        const monthStrings = ['January', 'February', 'March','April','May','June','July','August','September','October','November','December'];

        let calendarDiv = document.querySelector(".calendar");
        // console.log(calendarDiv);

        // day object ids should be date
        let renderThis = '';

        // render month and year
        renderThis += `<h2 class = \'month-year\'> <span class = \'month\'>${monthStrings[this.today.getMonth()]}</span><span class = \'span\'>${this.today.getFullYear()}</span></h2>`;

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

function getNumberOfDaysInMonth(month,year)
{
    //day 0 is last day of previous month
    // to find number of days in month, get last day of (month + 1) XD

    // e.g. to find number of days in january 2021, create a new date object
    // corresponding to february 2021 and get last day of previous month
    return new Date(year,month + 1,0).getDate(); 
}