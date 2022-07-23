let str1 = 'hello';
let str2 = 'owu';
let str3 = 'com';
let str4 = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let bool1 = true;
let bool2 = false;

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(bool1);
console.log(bool2);

alert(`${str1} ${str2} ${str3} ${str4}`);

let res = num1 + num2 + num3 + num4 + num5 + num6 + num7;
let space = ' ';
alert('Result'+space+'is'+space+res);

alert(bool1+space+'or'+space+bool2+'?');

let conf = confirm(bool1+'?');
console.log(conf);

document.write(str1 + space + str2 + space + str3 + space + str4);

let firstName = 'Iryna';
let middleName = 'Yaroslavivna';
let lastName = 'Miziuk';
let person = lastName + space + firstName + space + middleName;
console.log(person);

let ask1 = confirm('Are you' + space + person + '?');
console.log(ask1);

let a = 100;
console.log(a, typeof a);
let b = '100';
console.log(b, typeof b);
let c = true;
console.log(c, typeof c);

let name = prompt('Please, enter your name');
let surname = prompt('Please, enter your surname');
let birthDate = prompt('Please, enter your birth date');
console.log(name,birthDate,surname);





