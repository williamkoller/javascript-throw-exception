const NumberError = require('./number-error');

function add(x, y) {
  if (typeof x !== 'number') {
    throw new NumberError(x);
  }

  if (typeof y !== 'number') {
    throw new NumberError(y);
  }

  return x + y;
}

try {
  console.log(add('2', 9));
} catch (e) {
  console.log(e);
}
