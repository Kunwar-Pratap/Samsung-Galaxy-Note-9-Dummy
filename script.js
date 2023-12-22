const updateTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const timeString = `${hours}:${minutes}`;
    document.getElementById('time').innerText = timeString;
}

setInterval(updateTime, 1000);

const dateFormat = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayName = days[date.getDay()];
    const thisDate = String(date.getDate()).padStart(2, '0');
    const monthName = months[date.getMonth()];

    return `${dayName}, ${thisDate} ${monthName}`;
}

const updateDate = () => {
    const currentDate = new Date();
    const formattedDate = dateFormat(currentDate);
    document.getElementById('date').innerText = formattedDate;
}

setInterval(() => {
    updateDate()
}, 1000 * 60 * 60 * 24);

updateTime()
updateDate();