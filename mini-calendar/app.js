const currentDate = new Date(),
month = currentDate.getMonth(),
day = currentDate.getDay(),
date = currentDate.getDate(),
year = currentDate.getFullYear();

const months = ['January', 'February', 'March', 'April', 'May',
                'June', 'July', 'August', 'September', 'October',
                'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
              'Thursday', 'Friday', 'Saturday'];

const monthContainer = document.querySelector('.month-container');
monthContainer.innerHTML = `<span>${months[month]}</span>`;

const dateBody = document.querySelector('.date-body');
dateBody.innerHTML = `<span>${days[day]}</span>
                      <span>${date}</span>
                      <span>${year}</span>`
