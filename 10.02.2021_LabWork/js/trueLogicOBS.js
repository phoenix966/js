class Observer {
    constructor() {
    this.listeners = {};
    }
    on(eType, handler) {
    if(!(eType in this.listeners)) {
    this.listeners[eType] = [];
    }
    // { click: [ function(){}, function() {} ] }
    this.listeners[eType].push(handler);
    }
    off(eType, handler) {
    if(eType in this.listeners) {
    this.listeners[eType] = this.listeners[eType].filter( item =>
    {
    return item !== handler;
    })
    }
    }
    trigger(eType, args) {
    if(eType in this.listeners) {
    this.listeners[eType].forEach(listener => {
    listener(args)
    });
    }
    
    }
    }

    const addedCoin = coin => {
        console.log('вы положили в копилку монету номиналом в: ' + coin)
    }
    const showCoin = coin => {
        console.log('Была выпонена команда показа общей суммы, ' + " " + " \nВаш баланс составляет:  " + coin )
    }

    const newObserver = new Observer();

    newObserver.on('addCoin',addedCoin)
    newObserver.on('show',showCoin)


class Bank  {
    constructor(limit){
        this.limit = limit
        this.coins = {
            1:0,
            3:0,
            5:0,
            10:0
        }
    }
    addCoin(value){
        newObserver.trigger('addCoin',value)
        if(Math.floor(this.getTotal())  < (this.limit - value + 1)){
            if(value in this.coins){
            this.coins[value] += 1
        }
        } else{
            alert('нет места')
        } 
    }
    showCoins(){
        let totalCoins = 0;
        for(let key in this.coins){
             totalCoins +=   this.coins[key]
        }
        // console.log(totalCoins)
        return totalCoins
       
    }
    getTotal(){
        let multipleCoins = 0;
        for(let key in this.coins){
            let coin = key * this.coins[key]
            multipleCoins += coin
        }
        // console.log(multipleCoins)
        return multipleCoins
    }
}

const newBank = new Bank(120)

let addClass = function(nth){
    let string = `.coin:nth-of-type(${nth})`;
    return string;
}
let foo = function(num,nth){
    newBank.addCoin(num)
    newBank.getTotal()
    $(`.list__row:nth-of-type(${nth})`).text(`Номинал ${num}: ${newBank.coins[num]}`)
}

$(addClass(1)).on('click',function(){
    foo(1,2)
})
$(addClass(2)).on('click',function(){
    foo(3,3)
})
$(addClass(3)).on('click',function(){
    foo(5,4)
})
$(addClass(4)).on('click',function(){
    foo(10,5)
})
$('.coin--show').on('click',function(){
        newObserver.trigger('show',newBank.getTotal())
        $('.list__row--total').text('Total: ' + newBank.getTotal())
    })