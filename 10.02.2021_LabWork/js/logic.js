class Bank {
  constructor(limit) {
    this.coins = {
      1: 0,
      3: 0,
      5: 0,
      10: 0,
    };
    this.limit = limit;
    this.total = 0;
  }

  addCoin(key, value) {
    
    if (this.total < this.limit) {
        this.coins[key] += value;
        this.total +=  (key * value);        
    } else {
      console.log("Превышен лимит копилки");
    }
  }

  showCoins() {
    console.log("one " + this.coins[1]);
    console.log("three " + this.coins[3]);
    console.log("five " + this.coins[5]);
    console.log("ten " + this.coins[10]);
    console.log("total " + this.total);
  }
}
const bigBank = new Bank(20);

$("body").on("click", ".coin:nth-of-type(1)", function () {
    let key = 1;
    let value = 1
    bigBank.addCoin(key, value);
    let text = "Номинал 1: " + bigBank.coins[key];
    $(".list__row:nth-of-type(2)").text(text);
    $(".list__row--total").text(`Total: ${bigBank.total}`);
});

$("body").on("click", ".coin:nth-of-type(2)", function () {
    let key = 3;
    let value = 1
    bigBank.addCoin(key, value);
    let text = "Номинал 3: " + bigBank.coins[key];
    $(".list__row:nth-of-type(3)").text(text);
    $(".list__row--total").text(`Total: ${bigBank.total}`);
});
