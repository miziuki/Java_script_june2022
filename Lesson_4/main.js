// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let users = [
    {username:'User1', name: 'Iryna', password: 'irynaspass'},
    {username:'User2', name:'Khrystyna', password:'krisspass'},
    {username: 'User3', name:'Diana', password:'Dispass'},
    {username:'User4', name:'Vadym', password:'vadympass'},
    {username:'User5', name:'Halyna', password:'halynaspass'},
    {username:'User6', name:'MARIA', password:'mariaspass'},
    {username:'User7', name:'YAroslav', password:'yarikpass'},
    {username:'User8', name:'Olha', password:'olhaspass'},
    {username:'User9', name:'Solomia', password:'solomiaspass'},
    {username:'User10', name:'Misha', password:'mishaspass'},  ]

// for (let i = 0; i < users.length; i++) {
//     document.write(`<div> ${users[i].name} </div>`)
// };

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i=0; i < users.length; i++) {
//     document.write(`<div>${users[i].password} - ${i}</div>`)
// }

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i=0;
// while (i < users.length) {
//     document.write(`<h1>${users[i].name} </h1>`)
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let menu = [
//     'Sedcards',
//     'Influencers',
//     'Campaigns',
//     'Social Listening',
//     'Audits',
//     'Competitor Analysis',
//     'Users and Campaigns',
//     'Social Ads',
//     'KPI Dashboards',
//     'Sedcards',
//     'Influencers',
//     'Campaigns',
//     'Social Listening',
//     'Audits',
//     'Competitor Analysis',
//     'Users and Campaigns',
//     'Social Ads',
//     'KPI Dashboards'];
// let i = 0;
// while (i < menu.length) {
//     document.write(`<h1>${menu[i]} - ${i} </h1>`)
//     i++}

//     - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)
  for (let item of listOfItems){
      document.write(`<li> ${item} </li>`)
  }
document.write(`</ul>`)

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
//     for ( let product of products) {
//         document.write(`<div>
//         <h3> ${product.title} Price - ${product.price} </h3>
//         <img src="${product.image}"  width = 300px >
//         </div>`)
//     }

// є масив
// за допомоги циклу вивести:
// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let users2 = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// for (let user of users2 ) {
//     if (user.age > 30) {
//         console.log(user);
//     }
// }

for (let user of users2){
    for (let key in user) {
        document.write(`<div> ${user[key]} </div>`)

    }
}