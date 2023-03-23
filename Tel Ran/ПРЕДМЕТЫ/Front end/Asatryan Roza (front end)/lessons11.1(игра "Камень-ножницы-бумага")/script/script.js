const startBtn = document.querySelector('#start');
 const gameBody = document.querySelector('.game-body');
//Math.floor = геренерация числа с округлением вниз (2.9 => 2)
  //Math.round = генерация с округлением по математике (2.4 => 2; 2.6 => 3);
      //Math.ceil = генерация с округлением в верх;
        //Math.random = генерируем случайное число ( *3 - это от 0 до 3) => 2.56;
          //parseInt() преобразовывает из строки в число

function start() {
  let compMove = Math.floor(Math.random() * 3);
  console.log(compMove);
  let userMove = parseInt(prompt("Камень, ножницы, бумага?"));
  // let numFromUserMove = parsenInt(userMove); преобразовывает из строки в число;
  //&& - и / AND
  if (isNaN(userMove)||userMove > 2 || userMove < 0){
     alert ('Введите число от 0 до 2')

  } else if (compMove === 0 && userMove === 1){
    const img = document.createElement('img');
    img.setAttribute('src', '..//media/paper.jpeg');
    img.classList.add('imgWinner')
    gameBody.append(img);
      alert('Вы выйграли с помощью бумаги');

  } else if (compMove === 0 && userMove === 2){
    const img = document.createElement('img');
    img.setAttribute('src', '..//media/Stone.jpeg');
    img.classList.add('imgWinner')
    gameBody.append(img);
      alert('Комп выйграл Вас с помощью камня');

  } else if (compMove === 1 && userMove === 0){
    const img = document.createElement('img');
    img.setAttribute('src', '..//media/paper.jpeg');
      alert('Комп выйграл Вас с помощью бумаги');

  } else if (compMove === 1 && userMove === 2){
    const img = document.createElement('img');
    img.setAttribute('src', '..//media/nails.jpeg');
    img.classList.add('imgWinner')
    gameBody.append(img);
      alert('Вы выйграли с помощью ножниц');

  } else if (compMove === 2 && userMove === 0){
    const img = document.createElement('img')
    img.setAttribute('src', '..//media/Stone.jpeg');
      alert('Вы выйграли с помощью камня');

  } else if (compMove === 2 && userMove === 1){
    const img = document.createElement('img');
    img.setAttribute('src', '..//media/nails.jpeg');
      alert('Комп выйграл Вас с помощью ножниц');
      
  } else{
      alert('у вас ничья');
  }
  
}
startBtn.onclick = () =>{
  start();
  
}





const div = document.createElement('div');
const p = document.createElement('p');
p.innerText = 'Мне повезет. Сгенерировать число?';
const btn = document.createElement('button');
btn.innerText = 'Генерирую';
div.append(p,btn)

btn.onclick = ()=>{
  const p1 = document.createElement('p');
  const getNum = () => Math.round(Math.random () * 3);
  p1.innerText = `Попробуй число ${getNum}`;
  gameBody.append(div,p1)
}

