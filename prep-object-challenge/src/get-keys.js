/* exported getKeys */
const getKeys = obj => {
  const newArr = [];
  for (const key in obj) {
    newArr.push(key);
  }
  return newArr;
};
