
function MoneyDispenser(amount) {
  this.amount = amount;
}

MoneyDispenser.prototype = {
  compute: function (billDenomination) {
    // 100, 50, 20, 10, 5, 1
    const numberOfBills = Math.floor(this.amount / billDenomination);
    // $33 => 33 / 10 => 3.3 => 3
    this.amount -= numberOfBills * billDenomination;

    console.log('Dispensing ' + numberOfBills + ' ' + billDenomination + ' bills. Amount left ' + this.amount);

    return this;
  }
}

const dispenser = new MoneyDispenser(328);
dispenser.compute(100).compute(50).compute(20).compute(10).compute(5).compute(1);