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
        

    }

    generateDays()
    {
        let firstOfMonth = new Date(this.year,this.month,1,0,0,0);
        // console.log(firstOfMonth);
        // console.log(firstOfMonth.getDay());
        if (firstOfMonth.getDay() != 0)
        {
            firstOfMonth.setDate(firstOfMonth.getDate() - firstOfMonth.getDay())
        }
        this.days.push(new Day(firstOfMonth));
        for(let i = 0; i < 34; i++)
        {
            firstOfMonth.setDate(firstOfMonth.getDate() + 1);
            this.days.push(new Day(new Date(firstOfMonth)));
        }
        // this.days.forEach(day => console.log(day.date));

    }

    generateDates()
    {
        let firstOfMonth = new Date(this.year,this.month,1,0,0,0);
        console.log(firstOfMonth);
        console.log(firstOfMonth.getDay());
        if (firstOfMonth.getDay() != 0)
        {
            firstOfMonth.setDate(firstOfMonth.getDate() - firstOfMonth.getDay())
        }
        let dates = [firstOfMonth];
       
         for(let i = 1; i <= 34; i++)
         {
          
            firstOfMonth.setDate(firstOfMonth.getDate() + 1);
            // console.log(firstOfMonth);
            dates.push(new Date(firstOfMonth));

          

            
        }
        console.log('print date array');
        dates.forEach(date => console.log(date));
    }

 

    
}
const timeElapsed = Date.now();
const today = new Date(timeElapsed);

let monthy = new MonthPage(today.getFullYear(),today.getMonth());
// monthy.generateDates();
monthy.generateDays();