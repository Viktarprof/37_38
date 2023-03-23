const secondHand = document.querySelector('#second-hand');
const minuteHand = document.querySelector('#minute-hand');
const hourHand = document.querySelector('#hour-hand');

const btnStart = document.querySelector('#start');
const btnEnd = document.querySelector('#end');

function getDate(){
  //new Date() - 
  // new - оператор
  // Date - конструктор
  let now = new Date();
  // console.log(now)
  // console.log(typeof now)
  // seconds
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90; 
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90; 
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

let setInt;
btnStart.onclick = () => {
  setInt = setInterval(getDate, 1000);
  // setInterval(() => console.log('Hello', 5000))
}
 
btnEnd.onclick = () => {
  clearInterval(setInt);
}

//setInterval добавить интревал
// clearInterval удалить интревал
//setInterval(getDate, 1000);
