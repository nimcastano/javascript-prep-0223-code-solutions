/* exported getValues */
const getValues = obj => {
  const newArr = [];
  for (const key in obj) {
    newArr.push(obj[key]);
  }
  return newArr;
};
