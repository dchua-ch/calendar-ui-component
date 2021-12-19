let dayGrid = document.querySelector(".day-grid");

console.log(dayGrid);


// day object ids should be date
let renderThis = '';
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