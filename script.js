let calendarDiv = document.querySelector(".calendar");

console.log(calendarDiv);


// day object ids should be date
let renderThis = '';
for(let i = 1; i <= 31; i++)
{
    let dayDiv = `<div class = \'day\'><p>${i}</p></div>`;
    renderThis += dayDiv;

}
console.log(renderThis);
calendarDiv.innerHTML += renderThis;