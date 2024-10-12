function whileLoop1() {
  const arrayToReturn = [];
  let index = 0;
  while (index < 10) {
    arrayToReturn.push(index);
    index++;
  }
  return arrayToReturn;
}

console.log('whileLoop1 output', whileLoop1());

function whileLoop2() {
  const arrayToReturn = [];
  let index = 0;
  while (index < 20) {
    arrayToReturn.push(index);
    index += 2;
  }
  return arrayToReturn;
}

console.log('whileLoop2 output', whileLoop2());

function forLoop1() {
  const arrayToReturn = [];
  for (let index = 0; index < 10; index++) {
    arrayToReturn.push(index);
  }
  return arrayToReturn;
}

console.log('forLoop1 output', forLoop1());

function forLoop2() {
  for (let index = 100; index > 0; index--) {
    console.log('Time till explosion ' + index + '!');
  }
}

forLoop2();

function forInLoop1(object) {
  const arrayToReturn = [];
  for (const key in object) {
    arrayToReturn.push(key);
  }
  return arrayToReturn;
}

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

console.log('for in loop 1 output', forInLoop1(object));

function forInLoop2(object) {
  const arrayToReturn = [];
  for (const key in object) {
    arrayToReturn.push(object[key]);
  }
  return arrayToReturn;
}

console.log('for in loop 2 output', forInLoop2(object));
