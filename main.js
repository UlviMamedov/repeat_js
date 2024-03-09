const books = [
    { title: 'Гаррі Поттер', author: 'Дж.К. Ролінг' },
    { title: '1984', author: 'Джордж Орвелл' },
    { title: 'Хоббіт', author: 'Дж.Р.Р. Толкієн' }
];

const georgeOrwellBook = books.find(book => book.author === 'Джордж Орвелл');
console.log(georgeOrwellBook);
