//Lecture: Hoisting

//functions
/*
calculateAge(1956);

function calculateAge(year) {
    console.log(2019 - year);
}

//retirement(1984); // Function expression durumunda önce function tanımlanmalı sonra çağrılmalı. Bu durumda hata verecektir. Yukarıdaki gibi function declaration durumunda ise function tanımından önce veya sonra çağrılabilir.
var retirement = function (year) {
    console.log(65 - (2019 - year));
}
retirement(1984)


//Variables
console.log(age);
var age = 23; // global execution context içinde.
//console.log(age);

function foo() {
    console.log(age);
    var age = 65; // execution context içinde.
    console.log(age);
}
foo();
console.log(age);

//Lecture: Scopes
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!'
        //console.log(a + b + c);
        third();
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}


//Lecture: This Keyword
//Regular Function Call : the this keyword points at the global object(the window object,in the browser)
//Method Call : the this variable points to the object that is calling the method

//console.log(this);
function calculateAge(year) {
    console.log(2019 - year);
    console.log(this);
}
calculateAge(1984);

var john = {
    name: 'John',
    yearOfBirth: 1984,
    calculateAge: function () {
        console.log(this);
        console.log(2019 - this.yearOfBirth);
        
                //function innerFunction() {
                //    console.log(this);
                //}
                //innerFunction(); //regular function çağrılmasında varsayılan nesne çağrılır.
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1980
}
mike.calculateAge = john.calculateAge; //Method borrowing
mike.calculateAge();
*/