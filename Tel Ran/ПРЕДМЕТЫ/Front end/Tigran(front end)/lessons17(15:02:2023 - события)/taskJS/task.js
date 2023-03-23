// Событие в JS

let btn = document.querySelector('.btn_elem')

function handle(){
    console.log(101)
}

// btn.onclick = handle

btn.addEventListener('click', handle)
btn.addEventListener('click', () => console.log('test'))

btn.removeEventListener('click', handle)
// remove для функции handle отработает

btn.removeEventListener('click',() => console.log('test'))
// remove для стрелочной функции работать не будет, т.к. у функции определяется совершенно другой адреес 
// по сравнению с указанной в addEventListener

// ------------------------
// Типы событий (Мышки,Курсора)

// let btn = document.querySelector('.btn_elem')

btn.addEventListener('dblclick', () => console.log('dblclick'))
btn.addEventListener('click', () => console.log('click'))
btn.addEventListener('mousedown', () => console.log('mousedown'))
btn.addEventListener('mouseup', () => console.log('mouseup'))

btn.addEventListener('mouseout', () => console.log('mouseout'))
btn.addEventListener('mouseover', () => console.log('mouseover'))

// ------------------------
// Клавиатура

document.body.addEventListener('keydown', () => console.log('keydown'))

// let btn = document.querySelector('.btn_elem')
btn.addEventListener('keydown', () => console.log('keydown'))

// -----------------------
// Задание: по нажатию на кнопку, необходимо заменить цвет с brown на darkgreen.
// При воторном нажатии необходимо вернуть старый цвет (brown)

// let btn = document.querySelector('.btn_elem')
let div = document.querySelector('.container')

// Решение 1
function clickHandler(){
    div.style.backgroundColor = (div.style.backgroundColor == 'darkgreen') ? 'brown' : 'darkgreen'
}

// Решение 2
let themeMode = true

function clickHandler(){
    themeMode = !themeMode
    div.style.backgroundColor = (themeMode) ? 'brown' : 'darkgreen'
}

btn.addEventListener('click', clickHandler)

// ------------------------------
// Объект event

document.body.addEventListener('keydown', (event) => {
    console.log(event)
})

document.body.addEventListener('keydown', (event) => {
        console.log(event.key , 'key')
        console.log(event.code , 'code')
        console.log(event.keyCode, 'keyCode')
})

// -----------------------
// Задание. Реализуте горячую клавишу SHIFT(любой) + кнопка L (любой регистр), которая 
// заменит текстовое сво-во заголовка на дату, которая отражает текущий момент времени (HH:MM:SS)


let h_elem = document.querySelector('.h_text')

document.body.addEventListener('keydown', (event) => {
    if (event.code == 'KeyL' && event.shiftKey){
        let date = new Date()
        h_elem.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        console.log('Get hot key!')
    }
})


// ----------------------
// Объект event сво-во target
// это сво-во, которое передает ЗНАЧЕНИЕ тега при котором было совершено событие

document.body.addEventListener('click', (event) => {
    console.log(event.target.parentElement)
})