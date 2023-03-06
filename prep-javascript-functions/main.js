const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};

const addTwoNumbersResult = addTwoNumbers(2, 2);

console.log('addTwoNumbers Exercise: ' + addTwoNumbersResult);

const convertHoursToMinutes = hours => {
  return hours * 60;
};

const convertHoursToMinutesResult = convertHoursToMinutes(2);

console.log('convertHoursToMinutes Exercise: ' + convertHoursToMinutesResult);

const getGreeting = name => {
  return 'Hello ' + name;
};

const getGreetingResult = getGreeting('World');

console.log('getGreeting Exercise: ' + getGreetingResult);

const addAndMultiplyBy5 = (num1, num2) => {
  return (num1 + num2) * 5;
};

const addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);

console.log('addAndMultiplyBy5 Exercise: ' + addAndMultiplyBy5Result);

const multiplyAndDivideBy5 = (num1, num2) => {
  return (num1 * num2) / 5;
};

const multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);

console.log('multiplyAndDivideBy5 Exercise: ' + multiplyAndDivideBy5Result);

const subtractTwoNumbers = (num1, num2) => {
  return num1 - num2;
};

const subtractTwoNumbersResult = subtractTwoNumbers(22, 7);

console.log('subtractTwoNumbers Exercise: ' + subtractTwoNumbersResult);

const getCircleCircumference = radius => {
  return 2 * Math.PI * radius;
};

const getCircleCircumferenceResult = getCircleCircumference(5);

console.log('getCircleCircumference Exercise: ' + getCircleCircumferenceResult);

const getFullName = (firstName, lastName) => {
  return firstName + ' ' + lastName;
};

const getFullNameResult = getFullName('Juan', 'Ramirez');

console.log('getFullName Exercise: ' + getFullNameResult);

const cube = number => {
  return number * number * number;
};

const cubeResult = cube(5);

console.log('cube Exercise: ' + cubeResult);
