// // - Знайти та вивести довижину наступних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
//
// console.log('hello world'.length);
// console.log('lorem ipsum'.length);
// console.log('javascript is cool'.length);
//
// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
//
// console.log('hello world'.toUpperCase());
// console.log('lorem ipsum'.toUpperCase());
// console.log('javascript is cool'.toUpperCase());
//
// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// console.log('HELLO WORLD'.toLowerCase());
// console.log('LOREM IPSUM'.toLowerCase());
// console.log('JAVASCRIPT IS COOL'.toLowerCase());
//
//
// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let a = ' dirty string   '.indexOf('d');
// let b = ' dirty string   '.indexOf('g') + 1;
// console.log(' dirty string   '.substring(a, b));

// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// //     let str = 'Ревуть воли як ясла повні';
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// let str = 'Ревуть воли як ясла повні';
// let stringToarray = (string) => string.split(' ');
// console.log(stringToarray(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let numbToString = numbers.map(value => {
//     return value + '';
// })
// console.log(numbToString);
//
// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// //або навпаки в залежності від значення аргументу direction.
// //     let nums = [11,21,3];
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11,21,3];
// let sortNums = nums.sort((a, b) => {
//     return a - b;
// });
// console.log(sortNums);

// // - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// // -- відсортувати його за спаданням за monthDuration
//
// let sorted = coursesAndDurationArray.sort((a,b) => {
//     return a.monthDuration - b.monthDuration;
// })
// console.log(sorted);
//
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let filtered = coursesAndDurationArray.filter(value => {
//     return value.monthDuration > 5;
// })
// console.log(filtered);
// // one more example but for title
//
// let filtered2 = coursesAndDurationArray.filter( value => {
//     return value.title.endsWith('ex');
// })
// console.log(filtered2);

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cards = [
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: null, value: 'jocker', color: 'red'},
    {cardSuit: null, value: 'jocker', color: 'black'}
]
// // - знайти піковий туз
// let st1 = cards.filter(value => value.cardSuit === 'spade');
// let spade_ace = st1.find(value => value.value === 'ace');
// console.log(spade_ace);
//
//
// // - всі шістки
// let all6 = cards.filter(value => value.value === '6');
// console.log(all6);
//
// // - всі червоні карти
// let all_red = cards.filter(value => value.color === 'red');
// console.log(all_red);
//
// // - всі буби
// let all_diamonds = cards.filter(value => value.cardSuit === 'diamond');
// console.log(all_diamonds);
//
// // - всі трефи від 9 та більше
// let stage1 = cards.filter(value => value.cardSuit === 'clubs');
// console.log(stage1);
// let last = stage1.slice(3, 9);
// console.log(last);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let sorted = cards.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    }
    if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }
    if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    }
    if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card);}
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(sorted);

