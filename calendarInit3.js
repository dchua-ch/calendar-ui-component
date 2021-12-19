class Day
{
    constructor(date,index)
    {
        //this should be a javascript date object I guess
        this.date = date;
        this.index = index;
        this.highlighted = false;
       
        
     
    }
    

    getHTML()
    {
        return  `<div class = \'day\'><p>${date.getDate()}</p></div>`;

    }
}

/*
 Revised Algorithm
    1) Instantiate a javascript Date object corresponding to the first day of the month
    2) If first day of month falls on monday, instantiate a Day object and increment 34 times.
    3) Else, decrement first day Date object until you reach first sunday of page
 */

class MonthPage
{
    // A collection of 35 Day objects and an associated month
    // day-grid if a 5 x 7 grid of day objects
    // col indices are 0,1,2,3,4,5,6
    // row indices are 0,1,2,3,4
    // master indices are 0,1,2,...,32,33,34
    days = [];
    constructor(year,month)
    {
        this.year = year;
        this.month = month;
        this.getLastDateOfPreviousMonth();
        this.getFirstDayOfMonth(); //column index of first day
        this.getFirstDateOfMonthPage();
    }

    print()
    {
        console.log(`year = ${this.year}`);
        console.log(`month = ${this.month}`);
        console.log(`last date of previous month = ${this.lastDateOfPreviousMonth}`)
        console.log(`first day of month = ${this.firstDay} `)
        console.log(`first date of month page = ${this.firstDateOfMonthPage}`)
    }
    getLastDateOfPreviousMonth()
    {
        this.lastDateOfPreviousMonth = new Date(this.year,this.month,0,0,0,0).getDate();
    }
    getFirstDayOfMonth()
    {
        this.firstDay = new Date(this.year,this.month,1,0,0,0).getDay();
    }

    getFirstDateOfMonthPage()
    {
        if(this.firstDay != 0)//as long as first date doesn't fall on a monday
        {
            let firstDayOnPage = this.lastDateOfPreviousMonth - this.firstDay + 1;
            let previousMonth = this.month -1;
            
            // this.firstDateOfMonthPage = new Date(this.)
        }
        else
        {
            this.firstDateOfMonthPage = 1;
        }
    }

    generateDays()
    {
        // generate and store 35 day objects
        for(let i = 0; i < 35; i++)
        {
            let dayOne = new Day(new Date(this.year,this.month-1))

            
        }
    }

    
}

console.log('Calendar Init 3');
timeElapsed = Date.now();
today = new Date(this.timeElapsed);

monthy = new MonthPage(today.getFullYear(), today.getMonth());
monthy.print();