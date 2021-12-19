class Day
{
    constructor(date)
    {
        //this should be a javascript date object I guess
        this.date = date;
        this.selected = false;
    }
    

    getHTML()
    {
        return  `<div class = \'day\' id = \'${this.date.toLocaleString()}\'><p>${this.date.getDate()}</p></div>`;
    }
}

class MonthPage
{
   
    days = [];
    constructor(year,month)
    {
        this.year = year;
        this.month = month;
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


const timeElapsed = Date.now();
const today = new Date(timeElapsed);

let monthy = new MonthPage(today.getFullYear(),today.getMonth());
monthy.generateDays();

console.log(monthy.getHTML());