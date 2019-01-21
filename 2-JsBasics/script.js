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


//OPERATOR PRECEDENCE

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple Operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);
var ageJohn = now - yearJohn;
var ageMark = 35;

//Grouping
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6; //8*4-6 = 32-6=26 assignment operatoru sağdan sola doğru çalışır. Bu yüzden önce hesaplamalar yapıldı sonrasında sağdan sola bir eşitleme yapıldı.
console.log(x, y);

//More Operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);


// IF-ELSE STATEMENTS
var firstName = 'John';
var civilStatus = 'single';
if (civilStatus === 'married') {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' is single.');
}
var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' is single.');
}


//BOOLEAN LOGIC
var firstName = 'John';
var age = 20;
if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age < 20 && age >= 13) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}

//THE TERNARY OPERATOR AND SWITCH STATEMENTS

//Ternary Operator:
var firstName = "John";
var age = 16;
age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log(firstName + " drinks juice.");
var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

//Switch Statement:
var job = "instructor";
switch (job) {
  case "teacher":
  case "instructor":
    console.log(firstName + " teaches kids how to code.");
    break;
  case "driver":
    console.log(firstName + " drives an uber in Lisbon.");
    break;
  case "designer":
    console.log(firstName + " designs web sites.");
    break;
  default:
    console.log(firstName + " does something else.");
}
age = 40;
switch (true) {
  case age < 13:
    console.log(firstName + " is a boy.");
    break;
  case age < 20 && age >= 13:
    console.log(firstName + " is a teenager.");
    break;
  case age >= 20 && age < 30:
    console.log(firstName + " is a young man.");
    break;
  default:
    console.log(firstName + " is a man.");
}


//TRUTHY AND FALSY VALUES AND EQUALITY OPERATORS

//Falsy Values : undefined,null,'',0,NaN
//Truthy Values : NOT Falsy values
var height = 0; // 0 normalde falsy değerdir. Fakat 0 için tanımlama yapmak istiyorsak bunu === ile yapabiliriz.
if (height || height === 0) console.log("Variable is defined.");
else console.log("Variable is NOT defined.");

//Equality Operators:
height = 23;
if (height == "23") {
  console.log("The  == operator does type coercion");
} // == operatoru tip dönüştürme yapar. Burada string olan "23" number tipine dönüştürüldü. === operatorunde dönüştürme olmaz. 23==="23" false döndürcektir.

//FUNCTIONS
function calculateAge(birthYear) {
    return 2019 - birthYear;
}
var ageJohn = calculateAge(1984);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(firstName + ' retires in ' + retirement + ' years');
}
yearsUntilRetirement(1984, 'Murat');
*/