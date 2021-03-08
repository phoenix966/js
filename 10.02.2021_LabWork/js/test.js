class burger {
    constructor(size,fill){
        this.size = size,
        this.filling = fill
    }
    addSize(size){
        this.size += size
    }
    addFill(fill){
        this.filling += fill
    }
}


let cheeseBurger = new burger('small','cheese')
let hamBurger = new burger('big','meet')

console.log(cheeseBurger)
console.log(hamBurger)