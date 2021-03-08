class hamburger {
    constructor(size,filling){
        this.cash = 0;
        this.callories = 0;
        switch(size){
            case 'big':
                this.cash += 80;
                this.callories += 300;
            break;
            case 'small':
                this.cash += 60
                this.callories += 200;
            break;
            default:{
                alert('Неправильно указан размер бургера')
            }
        }
        
        switch(filling){
            case 'cheese':
                this.cash += 15
                this.callories += 50;
            break;
            case 'salat':
                this.cash += 5
                this.callories += 5;
            break;
            case 'free':
                this.cash += 10
                this.callories += 25;
            break;
            default:{
                alert('Неправильно указана начинка')
            }
        }
    }
    getPrice(){
        console.log(this.cash + " сом");
    }
    getCallories(){
        console.log(this.callories + " калорий")
    }
}

const cheeseburger = new hamburger('small','cheese')
cheeseburger.getPrice()
cheeseburger.getCallories()

const salatburger = new hamburger('big','salat')
salatburger.getPrice()
salatburger.getCallories()

const potatoburger = new hamburger('small','free')
potatoburger.getPrice()
potatoburger.getCallories()


getPrice() {
    if(this.size in this.object){  // Проверяет значение есть ли в объекте
        alert('Есть')
    }
}