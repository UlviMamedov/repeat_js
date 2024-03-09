const sentences = ["JavaScript цікавий", "Масиви це корисно", "Вивчайте програмування щодня"];

const totalWords = sentences.reduce((count, sentence) => count + sentence.split(' ').length, 0);
console.log(totalWords);