/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
};
console.log(jonas.lastName); // 'Schmedtmann'

console.log(jonas['lastName']); // 'Schmedtmann'

const nameKey = 'Name';
console.log(jonas['first' + nameKey]); // 'Jonas'
console.log(jonas['last' + nameKey]); // 'Schmedtmann



jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

console.log(jonas.location);
console.log(jonas.twitter);

jonas.school = 'WGU';
console.log(jonas['school'] + " cool");
console.log(jonas.school + " cool");
*/
// BREAK AWAY
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    // Method (function as property)
    calcAge: function () {
        // 'this' refers to the current object (jonas)
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} ${this.lastName
            } is a ${this.calcAge()}-year old ${this.job}. He has ${this.friends.length
            } friends and ${this.hasDriversLicense ? 'a' : 'no'} driver's
   license.`;
    },
    getDanielsSummary: function () {
        return `${this.firstName} has a student named Daniel and ${this.firstName} is his ${this.job}.`
    },
};

console.log(jonas.calcAge()); // 46
console.log(jonas.age); // 46
// Using the getSummary method
console.log(jonas.getSummary());
// "Jonas Schmedtmann is a 46-year old teacher. He has 3 friends and a driver's license."
console.log(jonas.getDanielsSummary())

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}  `);
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
];
const types = [];
for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);
    // Filling a new array
    types.push(typeof jonasArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

console.log('----- ONLY STRINGS -----');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i]);
}

console.log('----- BREAK WITH NUMBER -----');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i]);
}
*/

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
];
for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`----- Starting exercise ${exercise} ------`);
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition
   ${rep} 🏋️ `);
    }
}

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}  `);
    rep++;
}


const diceRoll = function () {
    return Math.trunc(Math.random() * 6) + 1;
}

let dice = diceRoll();

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = diceRoll();
}
