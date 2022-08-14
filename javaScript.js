//CONST
const ITEMS_CONTAINER = document.getElementsByClassName('contentSlider')[0];

//Массивы
let picture = ['picture/icon1.png','picture/icon2.png','picture/icon3.png','picture/icon4.png','picture/icon5.png','picture/icon6.png'];
let names = ['Зеркало','Диван','Набор 4 стула','Стол','Журнальный столик','Шкаф','Кресло'];
let prices = ['1400','8000','3800','2200','2000','3500','5000'];

//процесс поиска и синхронизации
let index = 1;
if ( index < 0){
    index = picture.length
} else if (index == picture.length){
    index = 0;
}
let currentPicture = picture[index];
let currentName = names[index];
let currentPrice = prices[index];

//Create elements
let divParent = document.createElement('div');
divParent.className = 'slide';
let pictureBlock = document.createElement('img');

pictureBlock.src = currentPicture;
pictureBlock.style.width = '30vw';
pictureBlock.style.height = '30vh';
let namesBlock = document.createElement('P');

//Задаю свойству объекта текстовое значение
namesBlock.textContent = currentName;
//Задаю цвет текста
namesBlock.style.color = "red";
let pricesBlock = document.createElement('P');
pricesBlock.textContent = currentPrice;
pricesBlock.style.color = "red";
//создание макета 
divParent.appendChild(pictureBlock);
divParent.appendChild(namesBlock);
divParent.appendChild(pricesBlock);

ITEMS_CONTAINER.appendChild(divParent);


