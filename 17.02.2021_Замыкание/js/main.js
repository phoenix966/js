// let userName = 'John'
// function sayHi (name){
//     let message = "Hello" + name;

//     // LexicalEnvironment {name: "Mike",message:"Hello Mike"}
//     alert(message);
// }

// sayHi('Mike')

function makeCountry(){
    let currentCounter = 1;

    return function(){
        return ++currentCounter          // Это и есть Замыкание (Это функция внутри функции имеющая доступ к верхней переменной)
    }
}

let counter = makeCounter(); // 

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// Другой пример

function calculateFunc(number){
    return function(){
        return number +1000;
    }
}

let calc = calculateFunc(5)//

calc(); // Происходит замыкание и мы полчаем 1005

// Фабричная функция

// function calculate(number){
//     return function(){
//         console.log(number + 10)
//     }
// }

// document
//     .querySelector('button')
//     .addEventListener('click',calculate(6))

//

function createInc(num){
    return function(num2){
        return num + num2;
    }
}

let addTen = createInc(10)

console.log(addTen(1)) //11
console.log(addTen(2)) //12
console.log(addTen(3)) //13

let addOne = createInc(1)

console.log(addTen(5)) // 6
console.log(addTen(10)) // 11
console.log(addTen(15)) // 16

//

function getUrl(url){
    return function (endApi){
        return `http://${url}/${endApi}`
    }
}

const peopleUrl = getUrl('swapi.dev/api');
console.log(peopleUrl('people/1')); // swapi.dev/api/people/1

// кастомная функция привязки this 

function bind(fn,context){
    return function(...args){
        return fn.apply(context,args)
    }
}

function greeting(greet,end){
    return `${greet} ${this.name} ${end}`
}

const mike = {name:'mike', age:'30'};
let makeBind = bind(greeting,mike);
console.log(makeBind('Hello','!!!!'))
