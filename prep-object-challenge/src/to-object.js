/* exported toObject */
const toObject = keyValPair => {
  const obj = {};
  obj[keyValPair[0]] = keyValPair[1];
  return obj;
};
