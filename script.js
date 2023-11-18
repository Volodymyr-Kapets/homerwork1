// first task
const firstTask = (number) => number.reduce((acc, item) => acc + item)/number.length;
console.log(firstTask([60, 20, 10, 40, 60]));

// second task
const fruits = ['banana', 'apple', 'watermelon', 'orange']
const fruitsIndex = (fruit) => fruits.indexOf(fruit);
console.log(fruitsIndex('kiwi'))

// third task
const thirdTask = (numbers) => numbers.filter(num => num > 0);
console.log(thirdTask([1,-3,2,-4]));

// fourth task
const getNumbers = (numbers, order) => {
    if (order === "smaller"){
        return numbers.sort((a, b) => a - b);
    }
    return numbers.sort((a, b) => b - a);
}
console.log(getNumbers([30, 15, 20, 10, 40, 60, 90], "smaller"))

// Second part

// first task
const book = {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'Joanne Rowling',
    year: 1997,
    displayinfo: () => console.log(`Назва книги:${book.title}, Автор: ${book.author}, Рік видання: ${book.year}`)
}
book.displayinfo()

// second task
const displayPerson = (person) => console.log(`Ім'я: ${person.name}, Прізвище: ${person.lastname}, Вік: ${person.age}, Професія: ${person.job}`)
const person = {
    name: 'Петро',
    lastname: 'Порошенко',
    age: 58,
    job: 'Партія: Европейская солидарность',
}
displayPerson(person);

// third task
const fruit = [
    {name: "Apple", color: "red"},
    {name: "banana", color: "yellow"},
    {name: "orange", color: "orange"},
];
const getFruit = (fruitName, array) => 
    `${
        array.filter(item => item.name === fruitName)[0].name
    } - ${
        array.filter(item => item.name === fruitName)[0].color
    }`
console.log(getFruit("orange", fruit))