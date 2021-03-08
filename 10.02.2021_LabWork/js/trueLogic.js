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
             totalCoins += this.coins[key]
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
        $('.list__row--total').text('Total: ' + newBank.getTotal())
    })



// $('.coin:nth-of-type(1)').on('click',function(){
//     let num = 1
//     newBank.addCoin(num)
//     newBank.getTotal()
//     $('.list__row:nth-of-type(2)').text(`Номинал 1: ${newBank.coins[num]}`)
// })

// $('.coin:nth-of-type(2)').on('click',function(){
//     let num = 3
//     newBank.addCoin(num)
//     newBank.getTotal()
//     $('.list__row:nth-of-type(3)').text(`Номинал 3: ${newBank.coins[num]}`)
// })

// $('.coin:nth-of-type(3)').on('click',function(){
//     let num = 5
//     newBank.addCoin(num)
//     newBank.getTotal()
//     $('.list__row:nth-of-type(4)').text(`Номинал 5: ${newBank.coins[num]}`)
// })
// $('.coin:nth-of-type(4)').on('click',function(){
//     let num = 10
//     newBank.addCoin(num)
//     newBank.getTotal()
//     $('.list__row:nth-of-type(5)').text(`Номинал 10: ${newBank.coins[num]}`)
// })
// $('.coin--show').on('click',function(){
//     $('.list__row--total').text('Total: ' + newBank.getTotal())
// })

