// // // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // // створити пустий масив, наповнити його 10 об'єктами new User(....)
// //
// function User (id,name,surname,email,phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let user1 = new User (1, 'Iryna', 'Miziuk', 'test@email', 1234567);
// let user2 = new User (2, 'Iryna', 'Miziuk', 'test@email', 1234567);
// let user3 = new User (3, 'Iryna', 'Miziuk', 'test@email', 1234567);
// let user4 = new User (4, 'Iryna', 'Miziuk', 'test@email', 1234567);
// let user5 = new User (5, 'Iryna', 'Miziuk', 'test@email', 1234567);
// let user6 = new User (6, 'Iryna', 'Miziuk', 'test@email', 1234567);
// let user7 = new User (7, 'Iryna', 'Miziuk', 'test@email', 1234567);
// let user8 = new User (8, 'Iryna', 'Miziuk', 'test@email', 1234567);
// let user9 = new User (9, 'Iryna', 'Miziuk', 'test@email', 1234567);
// let user10 = new User (10, 'Iryna', 'Miziuk', 'test@email', 1234567);
//
// let Users = []
// Users.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10)
// console.log(Users);
//
// // Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let filtered = Users.filter(value => value.id%2 === 0);
// console.log(filtered);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sorted = Users.sort((u1, u2) =>  {
//      return u2.id - u1.id
// });
// console.log(sorted);


// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
//
// class  Client {
//     constructor (id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone - phone;
//         this.order = order;
//     }
// }
//
// let client1 = new Client(1, 'Iryna', 'Miziuk', 'test@email', 123456, ['dress', 'top', 'vodka']);
// let client2 = new Client(2, 'Iryna', 'Miziuk', 'test@email', 123456, ['dress', 'top', 'vodka', 'soda']);
// let client3 = new Client(3, 'Iryna', 'Miziuk', 'test@email', 123456, ['dress', 'top']);
// let client4 = new Client(4, 'Iryna', 'Miziuk', 'test@email', 123456, ['dress', 'top', 'vodka', 'soda', 'bla']);
// let client5 = new Client(5, 'Iryna', 'Miziuk', 'test@email', 123456, ['dress', 'top', 'vodka', 'bka', 'bla', 'ta za sho']);
// let client6 = new Client(6, 'Iryna', 'Miziuk', 'test@email', 123456, ['dress']);
// let client7 = new Client(7, 'Iryna', 'Miziuk', 'test@email', 123456, ['dress', 'top', 'vodka']);
// let clients = [];
// clients.push(client1,client2, client3, client4, client5, client6, client7);
// console.log(clients);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sorted2 = clients.sort((a,b) => {return b.order.length - a.order.length})
// console.log(sorted2);

// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// // максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car (model, producer, year, speed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.speed = speed;
//     this.engine = engine;
//
//     this.drive = function ()  {console.log(`їдемо зі швидкістю ${this.speed} на годину`);}
//
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') {console.log(`${key} -- ${this[key]}`)}
//         } }
//
//     this.increaseMaxSpeed = function (newSpeed) {return this.speed += newSpeed}
//
//     this.changeYear = function (newValue) {
//         return this.year = newValue }
//
//     this.addDriver = function (driver) {return this.driver = driver}
// }
//
// let car = new Car('escape', 'germany', 2012, 100, 3.4);
// console.log(car);
// car.drive();
// car.info();
// console.log(car.increaseMaxSpeed(80));
// console.log(car.changeYear(2020));
// console.log(car.addDriver({name: 'Max', surname: 'Zeneskiy'}));


// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// // максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, producer, year, speed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.speed = speed;
//         this.engine = engine;
//     }
//
//     drive () { return `їдемо зі швидкістю ${this.speed} на годину`}
//     info () {
//         for (let key in this) {
//             if (typeof this[key] !== 'function'){
//                 console.log(`${key} -- ${this[key]}`)}}
//     }
//     increaseMaxSpeed (newSpeed) { return this.speed += newSpeed}
//     changeYear (newValue) { return this.year = newValue }
//     addDriver (driver) { return this.driver = driver}
// }
//
// let car = new Car('bmw', 'germany', 2019, 150, 4.2);
// console.log(car);
// console.log(car.drive());
// car.info();
// console.log(car.increaseMaxSpeed(200));
// console.log(car.changeYear(2020));
// console.log(car.addDriver({name: 'Sunday', surname: 'Hangover'}));


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Princess {
     constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
     }
 }

let pr1 = new Princess('Iryna', 23, 35);
let pr2 = new Princess('Diana', 23, 36);
let pr3 = new Princess('Halyna', 35, 39);
let pr4 = new Princess('Solomia', 20, 38);
let pr5 = new Princess('Olha', 40, 39);
let pr6 = new Princess('Olena', 22, 37);
let pr7 = new Princess('Maria', 65, 38);
let pr8 = new Princess('Sofia', 9, 39);
let pr9 = new Princess('Uljana', 25, 37);
let pr10 = new Princess('Zorjana', 21, 36);
let princess = [];
princess.push(pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8, pr9, pr10);
console.log(princess);

class Prince extends Princess{

    constructor(name, age, shoeSize) {
        super(name, age);
        this.shoeSize = shoeSize;
    }
}

let prince = new Prince('Taras', 25, 35);
console.log(prince);

for (let option of princess ) { if (option.size === prince.shoeSize) {
    console.log(`${option.name}+${prince.name} = love`)}}

let lover = princess.find(value => value.size === prince.shoeSize);
console.log(lover);



