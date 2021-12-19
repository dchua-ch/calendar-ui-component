class Day
{
    constructor(date)
    {
        this.date = date;
    }
}

class Calendar
{
    constructor()
    {
        days = [];
        this.timeElapsed = Date.now();
        this.today = new Date(timeElapsed);

        //Numbers
        this.currentMonth = today.getMonth();
        this.currentDay = today.getDate();
        this.currentYear = today.getFullYear();
    }
    

}