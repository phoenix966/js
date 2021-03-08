class Bank {
    constructor(limit){
        this.data = {
            1:0,
            3:0,
            5:0,
            10:0
        }
        this.limit = limit
        this.total = 0
    }
    addCoin(coin){
        if(coin in this.data){
            if(this.total < this.limit){
                this.data[coin] += coin
                this.total += coin
            } else{
                console.log('нет места')
            } 
        }
    }
    showCoins(){
        for(let key in this.data){
            console.log('Номинал ' + key + " " + (this.data[key] / key))
        }
    }
}

let newBank = new Bank(100);
// let addTotal = function(){
//     $('.list__row--total').text("Total: "+ newBank.total)
// }


// $('.coin:nth-of-type(1)').on('click',function(){
//     newBank.addCoin(1)
//     addTotal()
//     $('.list__row:nth-of-type(2)').text('Номинал 1: ' + (newBank.data[1] / 1))
// })

// $('.coin:nth-of-type(2)').on('click',function(){
//     newBank.addCoin(3)
//     addTotal()
//     $('.list__row:nth-of-type(3)').text('Номинал 3: ' + (newBank.data[3] / 3))
// })

// $('.coin:nth-of-type(3)').on('click',function(){
//     newBank.addCoin(5)
//     addTotal()
//     $('.list__row:nth-of-type(4)').text('Номинал 5: ' + (newBank.data[5] / 5))
// })
// $('.coin:nth-of-type(4)').on('click',function(){
//     newBank.addCoin(10)
//     addTotal()
//     $('.list__row:nth-of-type(5)').text('Номинал 10: ' + (newBank.data[10] / 10))
// })

// $('.coin:nth-of-type(5)').on('click',function(){
//     newBank.showCoins()
// })



// Standard JS

let addTotal = function(){
    let element = document.querySelector('.list__row--total')
    element.textContent = "Total: "+ newBank.total

}

let coin = document.querySelectorAll('.coin')

coin[0].addEventListener('click',function(){
    let num = 1
    newBank.addCoin(num)
    addTotal()
    let list = document.querySelectorAll('.list__row')
    list[1].textContent = `Номинал ${num}: ` + (newBank.data[num] / num)
})

coin[1].addEventListener('click',function(){
    let num = 3
    newBank.addCoin(num)
    addTotal()
    let list = document.querySelectorAll('.list__row')
    list[2].textContent = `Номинал ${num}: ` + (newBank.data[num] / num)
})

coin[2].addEventListener('click',function(){
    let num = 5
    newBank.addCoin(num)
    addTotal()
    let list = document.querySelectorAll('.list__row')
    list[3].textContent = `Номинал ${num}: ` + (newBank.data[num] / num)
})

coin[3].addEventListener('click',function(){
    let num = 10
    newBank.addCoin(num)
    addTotal()
    let list = document.querySelectorAll('.list__row')
    list[4].textContent = `Номинал ${num}: ` + (newBank.data[num] / num)
})

coin[4].addEventListener('click',function(){
    newBank.showCoins()
})