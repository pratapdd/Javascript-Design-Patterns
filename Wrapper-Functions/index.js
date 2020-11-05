
function Add(x, y) {
  return x + y;
}

console.log(Add(2, 3));

const Logger = function (func) {
  return function (x, y) {
    console.log('The arguments are ' + x + ' ' + y);
    return func(x, y);
  }
}

Add = Logger(Add);

console.log(Add(5, 9));