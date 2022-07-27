// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

    let menu = [
    'Sedcards',
    'Influencers',
    'Campaigns',
    'Social Listening',
    'Audits',
    'Competitor Analysis',
    'Users and Campaigns',
    'Social Ads',
    'KPI Dashboards',
    ];

    // виводимо весь масив
    console.log(menu);

    // додала новий елемент
    menu[9] = 'Client Login';

    // кожен елемент окремо
    console.log(menu[0]);
    console.log(menu[1]);
    console.log(menu[2]);
    console.log(menu[3]);
    console.log(menu[4]);
    console.log(menu[5]);
    console.log(menu[6]);
    console.log(menu[7]);
    console.log(menu[8]);
    console.log(menu[9]);
    console.log(menu[10]);  // undefined

    // додала новий елемент і перевизначила 9
    menu[9] = 'Influencer Approval';
    menu[10] = 'Client login';
    console.log(menu[9], menu[10]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let additional = {
    title: 'test',
    pageCount: 'test',
    genre: 'test'
};

let books = [
        {
            title: 'Eat Love Pray',
            pageCount: 546,
            genre: 'chicklit'
        },
        {
            title: 'Sherlok Holmes',
            pageCount: 345,
            genre: 'detektive novel'
        },
        {
            title: '1948',
            pageCount: 356,
            genre: 'dystopia'
        },
        additional
    ];

// виводимо весь масив з 3 об'єктами
console.log(books);

// виводимо лише один елемент
console.log(books[3]);

// виводимо конкретні філди конкретних елементів
console.log(books[0].title);
console.log(books[2].genre);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let books2 = [
    {
        title: 'Eat Love Pray',
        pageCount: 546,
        genre: 'chicklit',
        authors:[
            {name:'0Elizabeth Gilbert',age:53},
            {name:'1Elizabeth Gilbert',age:53},
            {name:'2Elizabeth Gilbert',age:53} ]
    },
    {
        title: 'Sherlok Holmes',
        pageCount: 345,
        genre: 'detektive novel',
        authors:[
            {name: '0Arthur Conan Doyle', age: 90},
            {name: '1Arthur Conan Doyle', age: 90},
            {name: '2Arthur Conan Doyle', age: 90} ]
    },
    {
        title: '1948',
        pageCount: 356,
        genre: 'dystopia',
        authors: [
            {name: '0George Orwell', age: 47},
            {name: '1George Orwell', age: 47},
            {name: '2George Orwell', age: 47} ]
    }
    ];

console.log(books2[2]);
console.log(books2[2].authors[0]);
console.log(books2[2].authors[1].age);
console.log(!!books2[0].authors[2].name);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {
        username:'User1',
        name: 'Iryna',
        password: 'irynaspass'
    },
    {
        username:'User2',
        name:'Khrystyna',
        password:'krisspass'
    },
    {
        username: 'User3',
        name:'Diana',
        password:'Dispass'
    },
    {
        username:'User4',
        name:'Vadym',
        password:'vadympass'
    },
    {
        username:'User5',
        name:'Halyna',
        password:'halynaspass'
    },
    {
        username:'User6',
        name:'MARIA',
        password:'mariaspass'
    },
    {
        username:'User7',
        name:'YAroslav',
        password:'yarikpass'
    },
    {
        username:'User8',
        name:'Olha',
        password:'olhaspass'
    },
    {
        username:'User9',
        name:'Solomia',
        password:'solomiaspass'
    },
    {
        username:'User10',
        name:'Misha',
        password:'mishaspass'
    }
]

console.log(users[0].password);
console.log(users[1]['password']);
console.log(users[2].password);
console.log(users[3]['password']);
console.log(users[4].password);
console.log(users[5]['password']);
console.log(users[6].password);
console.log(users[7]['password']);
console.log(users[8].password);
console.log(users[9]['password']);

users[10] = {
    username:'User11',
    name:'New',
    password:'newpass'
}

console.log(users[10]['username']);

users[55] = 'testadding'
console.log(users);