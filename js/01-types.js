var username = "instructor";
var password = "letmein1234!";
var instructorId = 5;
//we declare a variable, we declare the variables type and we initialize with a value of that type. 
//we can also declare a value and type without initialization:
var passord;
var phoneNumber;
var email;
var socialSecurity;
var isMarried;
//we can have implicit typing, where we don't have to declare a type:
var greeting = "Hello";
//TS offers compile-time error checking. Compile-time checking occurs during the compile time. Compile time errors are caused by a typing mistake or poor syntax.
var password;
password = 1234;
//Numbers: one of the most common primitive types. 
var age = 40;
var currentYear = 2020;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
//String: one of the most common primitive types. 
var compnayName;
companyName = "Eleven Fifty";
var appName = 'Twitter';
appName = "Instagram";
//Boolean
var isLoggedIn = true;
var isGoldLevelUser = true;
//Array:
var studentList = ['Tom', 'Tracy', 'Nikaya'];
var allSources = [100, 92, 95, 96];
//although both have the same effect, option 1 is much more prevalent. 
//accessing the array indices works in the same way: 
console.log("Student List:", studentList[0]);
//Any: this can be used if the type is not known during development. At any point in the application, we may not know what type a variable is. 
var dataFromThridParty = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThridParty);
dataFromThridParty = 12345;
console.log(dataFromThridParty);
console.log(typeof dataFromThridParty);
//Void: a void type has no type at all. This is not really seen in variables, but is more common to see in functions that return no value:
function sayHelloToAll() {
    console.log("Hello to all!");
}
//Null and Undefined: 
var undefinedVariable = undefined;
var nullVariable = null;
//Tuple: allows you to create an array with multiple different types(notice how Tuple is sort of a suffix of multiple)
//declare a tuple type:
var usernameAndId;
//initialize it
usernameAndId = [1, "kennisreally40"]; // OK
//these values must be entered in proper order. 
usernameAndId = ["kenn26", 2];
//Enum: allows us to give names in numeric values
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
//like arrays, enums start at 0, but that starting index can be assigned a different number:
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
var cardType = CardType[2];
console.log(cardType);
//Overview Code: 
var x;
var y;
x = '1234';
x = 1234;
x = true;
y = false;
//# sourceMappingURL=01-types.js.map