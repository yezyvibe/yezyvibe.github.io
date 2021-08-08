const clockTitle = document.querySelector("#clockTitle")
const dateTitle = document.querySelector("#date")
function getTime() {
    const today = new Date();
    const year = today.getFullYear()
    const month = String(today.getMonth()+1).padStart(2,"0");
    const date = String(today.getDate()).padStart(2,"0");
    const hours = String(today.getHours()).padStart(2,"0");
    const minuets = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");
    dateTitle.innerText = `${year}.${month}.${date}`
    clockTitle.innerText = `${hours}h ${minuets}m ${seconds}s`
}

getTime();
setInterval(getTime, 1000);