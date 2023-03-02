const person = {
  firstName: 'Damian',
  lastName: 'Lillard',
  hobby: 'hoop'
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;

console.log("The person's name is: " + fullName + '.');

person.job = 'professional bucket-getter';

console.log("The person's current job is: " + person.job + '.');

person['previousJob'] = 'student';

console.log("The person's previous job is: " + person['previousJob'] + '.');

console.log('The complete person object: ', person);
