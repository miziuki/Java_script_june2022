// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x =-0;
if (x !== 0) {console.log('Вірно');} else {console.log('Не вірно');}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 60;
if (time >0 && time <= 15) {console.log('Перша чверть');}
else if (time >15 && time <=30) {console.log('Друга чверть');}
else if (time >30 && time <=45) {console.log('Третя чверть');}
else if (time >45 && time <=59) {console.log('Четверта чверть');}
else {console.log('Enter again');}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day=10;
if (day >=1 && day <=10) {console.log ('Перша декада');}
else if (day >=11 && day <=20) {console.log ('Друга декада');}
else if (day >=21 && day <=31) {console.log ('Третя декада');}
else {console.log('Enter again');}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayNumber;
switch (dayNumber = 7) {
    case dayNumber = 1 : console.log ('monday')
        break;
    case dayNumber = 2 : console.log ('tuesday')
        break;
    case dayNumber = 3 : console.log ('wednesday')
        break;
    case dayNumber = 4 : console.log ('thursday')
        break;
    case dayNumber = 5 : console.log ('friday')
        break;
    case dayNumber = 6 : console.log ('saturday')
        break;
    case dayNumber = 7 : console.log('sunday')
        break;
    default: console.log('non existend')
}

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let a = 32;
let b = 32;
if  (a>b) {console.log (a);}
else if (b>a) {console.log (b);}
else if (b===a) {conslole.log(a,b);}
else {conslole.log('WTF');}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let y = '' || 'default'
console.log(y);