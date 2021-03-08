// class CoffeMachine {  // es6
//     constructor(power){
//         this.waterAmount = 0;
//         console.log(`Создана кофемашина с мощностью ${power} ватт`);
//     }
// }

// const philips = new CoffeMachine(500);
// const delongi = new CoffeMachine(1000);

// philips.waterAmount = 200;
// delongi.waterAmount = 200;

class CoffeMachine {
    constructor(){
        this.waterAmount = 0;
    }
    run() {
        setTimeout(this.#onReady(),this.#getBoilTime())
    }
    #getBoilTime(){
        return 1000;
    }
    #onReady(){
        alert('Кофе готов')  //Приватный метод - инкапсуляция
    }
}

const delongi = new CoffeMachine();
delongi.run() // Публичный метод 

// Полиморфизм пример!
const makeDrinkPerson = function(drinkMachine,person){
    drinkMachine.waterAmount = 0;
    const drink = drinkMachine.run();

    person.give();
}

const CocktailMaker = new CocktailMaker('tea', 'milk');
let person = findPersonByName('Mike');
makeDrinkPerson(CocktailMaker, person)

// Наследование
class Machine {
    #enabled = false;

    enable(){
        this.#enabled = true;
    }
    disable(){
        this.#enabled = false;
    }
}

class CoffeMachine extends Machine {  // Наследование от класса Machine
    #waterAmount = 0;

    setWaterAmount(amount){
        this.#waterAmount = amount;
    }
}

const delongi = new CoffeMachine();
delongi.enable();
delongi.setWaterAmount(200);
delongi.disable();

// Расширение класса

class Animal {
    constructor(name){
        this.name = name;
    }
    walk(){
        alert('Я иду: ' + this.name);
    }
}

class Rabbit extends Animal {
    constructor(name,lastname){
        super(name) // расширяем свойство наследуемого класса
        this.lastname = lastname
    }
    walk(){
        super.walk(); //расширяем метод наследуемого класса или если без super перезапишется метод
        alert('Я прыгаю' + this.name + " " + this.lastname);
    }
}

const bugsBunny = new Rabbit('Bugs', 'Bunny')
bugsBunny.walk()

// Геттеры и Сеттеры

class User {
    constructor(first,last){
        this.firstname = first;
        this.lastname = last;
    }
    get FullName(){
        return `${this.firstname} ${this.lastname}`; //Геттер
    }
    set FullName(person){
        this.firstname = person.name;    // Сеттер
        this.lastname = person.lastname;
    }
}

let user = new User('Mike','Jefferson');
console.log(user.fullName)

let person = {name: 'John',lastname: 'Doe'};
userfullName = person;
console.log(user.fullName)

// Статичные свойства и методы

class User {
    static role = 'admin'
}
const mike = new User();
console.log(User.role)

class User {
    constructor(){
        this.role = 'user';
    }
    static set setRole(role){
        this.role = role;
    }
}

User.setRole = 'root';