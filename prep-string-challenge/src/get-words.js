/* exported getWords */
const getWords = str => {
  if (str === '') {
    return [];
  }
  const words = str.split(' ');
  return words;
};
