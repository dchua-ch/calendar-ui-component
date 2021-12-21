class Day
{
    
    constructor(date)
    {
        //this should be a javascript date object I guess
        this.date = date;
        this.selected = false;
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth();
        this.day = this.date.getDate();
        this.dateString = `${this.day}/${this.month + 1}/${this.year}`;
    }
    
    getDateString()
    {
       
        return this.dateString;
    }

    getHTML()
    {
        if(this.selected)
        {
            return `<div class = \'day selected\' id = \'${this.getDateString()}\' onclick = \'selectDay(\"${this.getDateString()}\")\'><p>${this.date.getDate()}</p></div>`;
        }
        return  `<div class = \'day\' id = \'${this.getDateString()}\' onclick = \'selectDay(\"${this.getDateString()}\")\'><p>${this.date.getDate()}</p></div>`;
    }
}

class Page
{
    // Each page object will contain 35 Day objects
    days = [];
    constructor(year,month)
    {
        this.year = year;
        this.month = month;
        this.generateDays();
    }

    generateDays()
    {
        let firstOfMonth = new Date(this.year,this.month,1,0,0,0);
     
        if (firstOfMonth.getDay() != 0)
        {
            firstOfMonth.setDate(firstOfMonth.getDate() - firstOfMonth.getDay())
        }
        this.days.push(new Day(new Date(firstOfMonth)));
        for(let i = 0; i < 34; i++)
        {
            firstOfMonth.setDate(firstOfMonth.getDate() + 1);
            this.days.push(new Day(new Date(firstOfMonth)));
        }
        // this.days.forEach(day => console.log(day.date));

    }

    getHTML()
    {
        let htmlString = '';
        this.days.forEach(day => {htmlString += day.getHTML()});
        return htmlString;
    }
}

class Calendar
{
    //array of Pages
    // each Page are uniquely identified by year and month and contains 35 days
    pages = [];
    constructor()
    {
        this.timeElapsed = Date.now();
        this.today = new Date(this.timeElapsed);
        this.pageIndicator = new Date(this.today.getFullYear(),this.today.getMonth());
        this.calendarDiv = document.querySelector(".calendar");
      
        this.pages.push(new Page(this.pageIndicator.getFullYear(),this.pageIndicator.getMonth()));
        this.setPage();


    }

    createPage()
    {
        // Will only create a new page based on pageIndicator month and year
        // if page doesn't exist
        let pageExists = false;
     
        for(let i = 0; i < this.pages.length;i++)
        {
            if(this.pages[i].month == this.pageIndicator.getMonth() && this.pages[i].year == this.pageIndicator.getFullYear())
            {
                pageExists = true;
            }

        }
        if( !pageExists)
        {
            this.pages.push(new Page(this.pageIndicator.getFullYear(),this.pageIndicator.getMonth()));
        }
    }

    incrementMonth()
    {
        this.pageIndicator.setMonth(this.pageIndicator.getMonth() + 1);
        this.createPage();
        this.setPage()
        this.render();
    }

    decrementMonth()
    {
        this.pageIndicator.setMonth(this.pageIndicator.getMonth() - 1);
        this.createPage();
        this.setPage()
        this.render();
    }

    setPage()
    {
        this.pages.forEach(page => 
        {
            if(page.month == this.pageIndicator.getMonth() && page.year == this.pageIndicator.getFullYear())
            {
                this.page = page;
            }
        }
        );

    }

    selectDay(dateString)
    {
        // console.log(this.page.days[0].dateString);
        this.page.days.forEach( day =>
            {
                if(day.dateString == dateString)
                {
                    // console.log('day found!')
                    day.selected = !day.selected;
                }
            }
        )
        this.render();
        

    }

    render()
    {
        // console.log("Rendering calendar");

        const monthStrings = ['January', 'February', 'March','April','May','June','July','August','September','October','November','December'];

 
        let renderThis = '';

        // clear html of calendar div
        this.calendarDiv.innerHTML = renderThis;

        // render div with month, year and next/previous buttons
        renderThis += `<h2 class = \'month-year\'>`;

        // render previous button
        renderThis += `<button type = \'button\' class = \'next-previous-button\' onclick = \'previousMonth()\'>\<</button>`;

        renderThis += '<div>'

        // render month 
        renderThis += `<span class = \'month\'>${monthStrings[this.pageIndicator.getMonth()]}</span>`;

        // render year
        renderThis += `<span class = \'span\'>${this.pageIndicator.getFullYear()}</span>`;

        renderThis += '</div>'

        // render next button
        renderThis += `<button type = \'button\' class = \'next-previous-button\' onclick = \'nextMonth()\' >\></button></h2>`
        
        // render dayGrid
        renderThis += '<div class = \'day-grid\'>';

        // render days of week row
        let dayStrings = ['Sun','Mon','Tue','Wed', 'Thu', 'Fri','Sat'];
        dayStrings.forEach(day => {renderThis += `<div class = \'day-of-week\'>${day}</div>`})

        renderThis += this.page.getHTML();

        renderThis += '</div>';

        this.calendarDiv.innerHTML = renderThis;

    }

}

//Script begins here
let myCalendar = new Calendar();
myCalendar.render();


//click event handlers
function nextMonth()
{
    myCalendar.incrementMonth();
}
function previousMonth()
{
    myCalendar.decrementMonth();
}

function selectDay(dateString)
{
    console.log(dateString)
    myCalendar.selectDay(dateString);
}