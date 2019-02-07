// Function Constructor
//var john = {
//  name: 'John',
//yearOfBirth: 1990,
//job: 'Teacher'
//}
/*
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    //calculateAge = function () {
    //    console.log(2019 - this.yearOfBirth);
    //}
}

Person.prototype.calculateAge = function () {
    console.log(2019 - this.yearOfBirth);
}
Person.prototype.lastName = 'Smith'; //prototype property tüm nesnelere aittir.

var john = new Person('John', 1990, 'Teacher');
var jane = new Person('Jane', 1950, 'Designer');
var mark = new Person('Mark', 1984, 'Retired');
john.calculateAge();
jane.calculateAge();
mark.calculateAge();
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


//Object.create
var personProto = {
    calculateAge: function () {
        console.log(2019 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1984;
john.job = 'Teacher';

var jane = Object.create(personProto, {
    name: {
        value: 'Jane'
    },
    yearOfBirth: {
        value: 1967
    },
    job: {
        value: 'Designer'
    }
});

// Primitives vs Objects

//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a, b);

//Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1; //no copy created. Referenced to same object.
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}
change(age, obj); // passed variable copy(age) and object reference
console.log(age);
console.log(obj.city);



// Lecture: Passing Functions as Arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i])); //callback function
    }
    return arrRes;
}

function calculateAge(el) {
    return 2019 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81)
        return Math.round(206.9 - (0.67 * el));
    else
        return -1;
}

var ages = arrayCalc(years, calculateAge)
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);


// Lecture: Functions Returning Functions

function interviewQuestion(job) {
    if (job === 'designer')
        return function (name) {
            console.log(name + ', can you please explain what UX design is?')
        }
    else if (job === 'teacher')
        return function (name) {
            console.log('What subject do you teach, ' + name + '?')
        }
    else
        return function (name) {
            console.log('Hello ' + name + ', what do you do?')
        }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');
interviewQuestion('designer')('Murat');
interviewQuestion('xxx')('Murat');

*/

// Lecture: IIFE : Immediately Invoked Function Expression
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();


(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();
//console.log(score); // Veri güvenliği için iyi bir yöntem, score değişkenine metod dışından erişilemiyor.

! function (goodLock) { //replacing “!” with “+”, “-”, or even “~” as well. Basically any unary operator can be used
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLock);
}(5);

// Lecture : Closures
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}
var retirementUS = retirement(66);
retirementUS(1984); // Execution Stack te bulunan retirement fonksiyonu kayboldu. Fakat içerisindeki a ve retirementAge değişkenleri hala tutulmaktadır. Bu da closure sayesinde olur. Closure otomatik olarak oluşturulur.
//retirement(65)(1984);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);
retirementGermany(1990);
retirementIceland(1990);

function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?')
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?')
        } else {
            console.log('Hello ' + name + ', what do you do?')
        }
    }
}

var interviewTeacher = interviewQuestion('teacher');
interviewTeacher('John');
*/

//Lecture: Bind,Call and Apply
var john = {
    name: 'John',
    age: 26,
    job: 'Teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal')
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m' + this.age + ' years old.');
        else if (style === 'friendly') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m' + this.age + ' years old.');
        }
    }
}