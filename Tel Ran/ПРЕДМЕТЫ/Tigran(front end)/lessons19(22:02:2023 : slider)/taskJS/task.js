const div_root = document.querySelector('#root');


let slider_index = 0;
const images = [
    'https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg',
    'https://phonoteka.org/uploads/posts/2021-05/1622404546_17-phonoteka_org-p-peizazh-v-stile-piksel-art-krasivo-26.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg',
    'https://oir.mobi/uploads/posts/2021-06/1622803069_29-oir_mobi-p-peizazh-dlya-nachinayushchikh-priroda-kras-30.jpg',
    'https://static.insales-cdn.com/images/products/1/1609/213943881/lg100.jpg'
]

const frame = document.createElement('div');
const cards = document.createElement('div');
const triggers = document.createElement('div');

const left_Btn = document.createElement('button');
const rigth_Btn = document.createElement('button');

left_Btn.innerText = '<';
rigth_Btn.innerText = '>';



cards.className = 'cards';
frame.className = 'frame';
triggers.className = 'trigger';


for (let elem of images) {
    let card = document.createElement('div');
    card.className = 'card';
    card.style.backgroundImage = `url(${elem})`

    // const card = document.createElement('img');
    // card.setAttribute('src', elem);
    // card.setAttribute('alt', elem);

    cards.append(card)
}


function go_left(){
    if(slider_index == 0 ){
        slider_index = images.length
        console.log(slider_index);
    } 
    else {
        slider_index--
        cards.style.left = `${-1 * slider_index * 500}px`;
        console.log(slider_index);
    }
};

function go_rigth(){
    if(slider_index === images.length-1){
        slider_index = -1;
        console.log(slider_index);
    } 
    else {
        slider_index++
        cards.style.left = `${-1 * slider_index *500}px`;
        console.log(slider_index);
    
    }
};

left_Btn.addEventListener('click', go_left)
rigth_Btn.addEventListener('click', go_rigth);



triggers.append(left_Btn,rigth_Btn);
frame.append(cards, triggers);
div_root.append(frame)



// мини дз: реализовать переход с первой картинки на последнюю, и с последней на первую

