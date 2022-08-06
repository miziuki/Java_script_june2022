// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square1 (a,b)
{let res;
res = a*b;
     return res;}

console.log(square1 (10, 20));

//створити функцію яка обчислює та повертає площу кола з радіусом r
function square2 (π, r) {
    let res;
    res = π*(r**2)
    return res; }

console.log(square2(3.14, 4));
 // same but in arrow function
let ar_square2 = (π,r) => {
    return π*(r**2)
}
console.log(ar_square2(3.14, 4));

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function square3 (π,r,h) {
    return 2*π*r*h;
}
console.log(square3(3.14, 5, 9));

// same but in arrow function
let ar_square3 = (π,r,h) => 2*π*r*h
console.log(ar_square3(3.14, 5, 9));

//створити функцію яка приймає масив та виводить кожен його елемент
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// function forArrays (array) {
//     for (let user of array) {
//         console.log(user);
//     }
//        }
// forArrays(users);
//  // same but in expression and for
// let ar_forArrays = function (array) {
// for (let i=0; i<array.length; i++){
//     console.log(array[i])
// }
// }
// ar_forArrays(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function for_text (text) {
    document.write(`<p> ${text}</p>`);
}
for_text('hello this is my homework')

// same but in arrow
let ar_for_text = (text) => {
    document.write(`<p> ${text}</p>`)
}
ar_for_text('the same but in arrow function');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list (listItem) {
    document.write(`<ul>`)
    document.write(`<li>${listItem}</li>
                    <li>${listItem}</li>
                    <li>${listItem}</li>`)
    document.write(`</ul>`)
}
list('list item text');

// same but in arrow
let ar_list = (listItem) => {
    document.write(`<ul>
                    <li>${listItem}</li>
                    <li>${listItem}</li>
                    <li>${listItem}</li>
                    </ul>`)
}
ar_list('same but in arrow')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function wtf (listItem, lenght) {
    for (i=0; i<lenght;i++){
        document.write(`<ul><li>${listItem}</li></ul>`)
    }
}
wtf('one more list', 3)

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function for_arrays (...a) {
for (let item of a) {
    document.write(`<ul>`)
    document.write(`<li>${item}</li>`)
    document.write(`</ul>`)}
}

for_arrays('first', 'second', true, false, 1, 10, 1000)

// same but in expression
let exp_for_arrays = (...a) => {
    for (let item of a) {
        document.write(`<div>`)
        document.write(`<li>${item}</li>`)
        document.write(`</div>`)

    }
}
exp_for_arrays(true, false, 100, 200, 'text');

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users2 = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'anya', age: 31, id: 6},
    {name: 'oleg', age: 28, id: 7},
    {name: 'andrey', age: 29, id: 8},
    {name: 'masha', age: 30, id: 9},
    {name: 'olya', age: 31, id: 10},
    {name: 'max', age: 31,  id: 11}
];

function users (array) {
    for (let item of array) {
        document.write(`<div>${item.name} - ${item.age} - ${item.id} </div>`)
    }
}

users(users2);

//- створити функцію яка повертає найменьше число з масиву
let numbers = [10,32,46,1000,0.2, 34,1]
function minNumb (array) {
    let min = array[0];
    for (let elem of array) {
        if (elem < min) {
            min = elem
            console.log(min);
        }
    }
}
minNumb(numbers);
console.log('.....');
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function sumNumb (array) {
    let start = 0;
    for (let elem of array) {
        start += elem;
    }
    return start;
};
console.log(sumNumb(numbers));