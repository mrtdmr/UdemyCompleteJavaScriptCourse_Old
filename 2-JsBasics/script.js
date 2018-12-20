//VARIABLES AND DATA TYPES
/*
//console.log('Hello World!!!');
var firstName = 'Murat';
//console.log(firstName);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job); //undefined
job = 'Engineer';
console.log(job);

// Variable Naming Rules:
//var if = 23; //hata
var murat / demir = 'Murat Demir' //hata
var $years = 3;


//VARIABLES MUTATION AND TYPE COERCION
//Type Coercion:
var firstName = 'Murat';
var age = 34;
console.log(firstName + ' ' + age); //Number tipindeki age değişkeni otomatik olarak string'e dönüştürüldü.

var job, isMarried; //undefined
job = 'Engineer';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Variable Mutation
age = 'thirty four';

//Değişkenler tanımlanıp değer ataması yapıldıkları anda tipi belirlenir. age = 34 ile age değişkeninin number tipinde olduğu belirlendi. daha sonra age = 'Denizli' ile tip string'e dönüştü.

job = 'Driver';
//alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

//BASIC OPERATORS
//Math Operators
var year, yearMurat, yearJohn;
now = 2018
ageMurat = 34;
ageJohn = 28;
yearMurat = now - ageMurat;
yearJohn = now - ageJohn;

console.log(yearMurat);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical OPerators
var johnOlder = ageJohn > ageMurat;
console.log(johnOlder);

//typeof Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Murat is older than John');
var x;
console.log(typeof x); //undefined