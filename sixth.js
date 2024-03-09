const sentences = ["Я люблю JavaScript", "Масиви це весело", "Програмування це круто"];

const firstWords = sentences.map(sentence => sentence.split(' ')[0]);
console.log(firstWords);