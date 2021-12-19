class Day
{
    constructor(date)
    {
        //this should be a javascript date object I guess
        this.date = date;
        this.highlighted = false;
     
    }
    

    getHTML()
    {
        return  `<div class = \'day\'><p>${date.getDate()}</p></div>`;

    }
}

class MonthPage
{
    // A collection of 35 Day objects and an associated month
    days = [];
    constructor(year,month)
    {
        this.year = year;
        this.month = month;
        this.getLastDateOfPreviousMonth();
    }
    getLastDateOfPreviousMonth()
    {
        this.lastDateOfPreviousMonth = new Date(this.year,this.month,0,0,0,0).getDate();
    }
    getFirstDayOfMonth()
    {
        this.firstDay = new Date(this.year,this.month,1,0,0,0).getDay();
    }
}

class Calendar
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
        this.getFirstDayOfMonth();
        // this.currentNumberOfDays = getNumberOfDaysInMonth(this.currentMonth,this.currentYear );
        // this.currentNumberOfDays = this.getNumberOfDaysInMonth();
        this.updateNumberOfDaysInMonth();
        this.getLastDateOfPreviousMonth();

        this.calendarDiv = document.querySelector(".calendar");
       


    }

    getLastDateOfPreviousMonth()
    {
        this.lastDateOfPreviousMonth = new Date(this.currentYear,this.currentMonth,0,0,0,0).getDate();
    }

    getFirstDayOfMonth()
    {
        this.monthFirstDayOfWeek = new Date(this.currentYear,this.currentMonth,1,0,0,0).getDay();
    }

    updateNumberOfDaysInMonth()
    {
        this.currentNumberOfDays = new Date(this.currentYear ,this.currentMonth + 1,0).getDate();
    }

    incrementMonth()
    {
        this.calendarDiv.innerHTML = '';
        console.log(`before: ${this.currentMonth}`)
        if (this.currentMonth == 11)
        {
            this.currentMonth = 0;
            this.currentYear += 1;
        }
        else
        {
            this.currentMonth += 1;
        }
        console.log(`after: ${this.currentMonth}`)
        this.updateNumberOfDaysInMonth();
        this.getFirstDayOfMonth();
        this.render();
    }

    decrementMonth()
    {
        this.calendarDiv.innerHTML = '';
        console.log(`before: ${this.currentMonth}`)
        if (this.currentMonth == 0)
        {
            this.currentMonth = 11;
            this.currentYear -= 1;
        }
        else
        {
            this.currentMonth -= 1;
        }
     
        console.log(`after: ${this.currentMonth}`)
        this.updateNumberOfDaysInMonth();
        this.getFirstDayOfMonth();
        this.render();
    }

    render()
    {
        console.log("Rendering calendar");
        //console.log(this.day.name)
        const monthStrings = ['January', 'February', 'March','April','May','June','July','August','September','October','November','December'];

        // let calendarDiv = document.querySelector(".calendar");
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
        console.log(this.currentDayOfWeek);
        console.log(this.monthFirstDayOfWeek);
        console.log(this.lastDateOfPreviousMonth);
        let dayCount = 0;
        for(let i = 1; i <= 35; i++)
        {
            
            if (i >= this.monthFirstDayOfWeek + 1 && i <= this.monthFirstDayOfWeek +  this.currentNumberOfDays)
            {
                dayCount++;
                renderThis += `<div class = \'day\'><p>${dayCount}</p></div>`;
            }
            else
            {
                renderThis += `<div class = \'day\'></div>`;
            }


            
            // if(i <= this.currentNumberOfDays)
            // {
            //     renderThis += `<div class = \'day\'><p>${i}</p></div>`;
            // }
            // else
            // {
            //     renderThis += `<div class = \'day\'></div>`;
            // }

        }

        renderThis += '</div>';
        // console.log(renderThis);
        this.calendarDiv.innerHTML += renderThis;
    }
    

}
let myCalendar = new Calendar();
myCalendar.render();




function nextMonth()
{
    myCalendar.incrementMonth();
}
function previousMonth()
{
    myCalendar.decrementMonth();
}