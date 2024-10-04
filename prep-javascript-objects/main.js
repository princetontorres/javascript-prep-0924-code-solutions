const person = {
  firstName: 'Romeo',
  lastName: 'Santos',
  hobby: 'bachatero',
};

console.log('person: ', person);

const fullName = person.firstName + '  ' + person.lastName;

console.log("The person's full name is: ", fullName);

person.job = 'Man';

console.log("Person's job is: ", person.job);

console.log('person: ', person);

person.previousJob = 'Singer';

console.log("Person's previous job: ", person.previousJob);

console.log('final person', person);
