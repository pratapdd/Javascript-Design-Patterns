
const items = [1, 'dd', false, 1.24];

function Iterator(items) {
  this.items = items;
  this.index = 0;

  console.log('-fn--', this.items);
}

Iterator.prototype = {
  hasNext: function () {
    return this.index < this.items.length;
  },
  next: function () {
    console.log('--1--', this.items);
    console.log('--2--', this.index);
    return this.items[this.index++];
  }
}

const iter = new Iterator(items);

console.log(Iterator);
console.log(iter);

console.log(iter.next());
console.log(iter.next());
console.log(iter.hasNext());
console.log(iter.next());
console.log(iter.next());
console.log(iter.hasNext());

while (iter.hasNext()) {
  console.log(iter.next());
}