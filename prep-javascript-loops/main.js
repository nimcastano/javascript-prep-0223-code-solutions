// create your loops here.
const whileLoop1 = () => {
  const newArr = [];
  let n = 0;
  while (n < 10) {
    newArr.push(n);
    n++;
  }
  return newArr;
};
console.log('whileLoop1 output', whileLoop1());

const whileLoop2 = () => {
  const newArr = [];
  let n = 0;
  while (n < 20) {
    newArr.push(n);
    n += 2;
  }
  return newArr;
};
console.log('whileLoop2 output', whileLoop2());

const forLoop1 = () => {
  const newArr = [];
  for (let i = 0; i < 10; i++) {
    newArr.push(i);
  }
  return newArr;
};
console.log('forLoop1 output', forLoop1());

const forLoop2 = () => {
  for (let i = 100; i > 0; i--) {
    console.log('Time till explosion ' + i + '!');
  }
};
forLoop2();

const forInLoop1 = object => {
  const newArr = [];
  for (const key in object) {
    newArr.push(key);
  }
  return newArr;
};
const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine'
};
console.log(forInLoop1(object));

const forInLoop2 = object => {
  const newArr = [];
  for (const key in object) {
    newArr.push(object[key]);
  }
  return newArr;
};
console.log(forInLoop2(object));
