function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(2, 2);
console.log('addTwoNumbers result: ', sum);

function convertHoursToMinutes(hours) {
  const result = hours * 60;
  return result;
}

const minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  const result = 'Hello ' + name + '!';
  return result;
}

const greeting = getGreeting('Jimmy');
console.log('greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  const result = (num1 + num2) * 5;
  return result;
}

const sumTimesFive = addAndMultiplyBy5(10, 5);
console.log('sumTimesFive:', sumTimesFive);

function multiplyAndDivideBy5(num1, num2) {
  const result = (num1 * num2) / 5;
  return result;
}

const productDividedByFive = multiplyAndDivideBy5(35, 10);
console.log('productDividedBy5:', productDividedByFive);

function subtractTwoNumbers(num1, num2) {
  const result = num1 - num2;
  return result;
}

const difference = subtractTwoNumbers(22, 7);
console.log('difference:', difference);

const MathPi = 3.14159;

function getCircleCircumference(radius) {
  const result = 2 * MathPi * radius;
  return result;
}

const circumference = getCircleCircumference(5);
console.log('circumference:', circumference);

function getFullName(firstName, lastName) {
  const result = firstName + ' ' + lastName;
  return result;
}

const fullName = getFullName('Tuna', 'Fish');
console.log('fullName:', fullName);

function cube(number) {
  const result = number * number * number;
  return result;
}

const cubed = cube(5);
console.log('cubed:', cubed);
