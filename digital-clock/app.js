const hourEL = document.querySelector('.hour');
const minuteEL = document.querySelector('.minute');
const secondEL = document.querySelector('.second');
const meridiamEL = document.querySelector('.meridiam');

function clock () {
  const currentDate = new Date(),
  initialHour = currentDate.getHours(),
  hour = initialHour > 12 ? initialHour - 12 : 
         initialHour === 0 ? 12 : initialHour,
  minute = currentDate.getMinutes(),
  second = currentDate.getSeconds();

  if(initialHour >= 12){
    meridiamEL.textContent = "PM"
  }
  else{
    meridiamEL.textContent = "AM"
  }


  hourEL.textContent = hour < 10 ? `0${hour}`: hour; 
  minuteEL.textContent = minute < 10 ? `0${minute}`: minute; 
  secondEL.textContent = second < 10 ? `0${second}`: second; 
  
  
  setTimeout(clock,1000);
  
}
clock()
