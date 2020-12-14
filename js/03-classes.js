var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Classes: 
//1
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
//3
var phil = new Person();
//4
phil.firstName = "Phil";
phil.lastName = "Donahue";
/*
1. Using the class keyword, we create a new class called Person. Just to be clear, this is not part of TypeScript. This is part of ES6.
2. We create 2 properties with types in that class. Here TypeScript allows us to set the types of our properties, as we would in a traditional OOP language like Java or C#. Dictating these types requires that when we instantiate the class and use these properties, they must hold string values.
3. We instantiate(create an instance) of the class by setting the type to Person and calling the new keyword to create a new instance of the class.
4. Back to the top code. We set the properties on the instance of the joeDude property.
*/
//Intantiation: 
//1                 //2  //3      //4
var someVariableName = new Person();
/*
1. We declare a variable with our own custom name
2. We declare the type. It's a custome type of person.
3. Wwe use the new keyword to instantiate a new instance
4. We call the class with parens. The parens invoke the constructor function.
*/
//Methods: 
var Person = /** @class */ (function () {
    function Person() {
    }
    //2
    Person.prototype.sayHello = function () {
        console.log("Hello", this.firstName);
    };
    return Person;
}());
//4
var kenn = new Person();
//5
kenn.firstName = "Kenn";
//6
kenn.sayHello();
/*
1. These two variables are the properties of the class. They should be above the methods
2. Here we have a method. This is a function that prints "Hello, " then a name to the console
3.  this.firstName will refer to the firstName for the specific instance.
4. We instantiate the Person() class with a variable name of kenn
5. We set the property of firstName to "Kenn" for this specific instance.
6. We call the method on the kenn object. Because the firstName of kenn is set to "Kenn", this will print "Hello Kenn" to the console.
*/
//Constructors: 
//1
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name; //4 
        this.gameMaker = maker;
    }
    return Game;
}());
//5                                 //6
var battleship = new Game('Battleship', 'Hasbro');
/*
1.  We create a new class called Game.
2. We create a constructor for the class that takes in a parameter that is of type string.
3. We set up a property called gameName.
4. We set the value of gameName equal to the value that is passed into the constructor's argument.
5.We create an instance of the Game class called battleship.
6. We pass in values to satisfy the requirements of the constructor. If we do not pass values in for the constructor's arguments, we get an error. The following code throws a compile-time error:
*/
var battleship = new Game(); //Throws an error becuase two arguments are required in the parens. 
//Comparison: 
var GameWithoutConstructor = /** @class */ (function () {
    function GameWithoutConstructor() {
    }
    return GameWithoutConstructor;
}());
//1
var monopoly = new GameWithoutConstructor();
//2
monopoly.gameName = 'Monopoly';
monopoly.gameMaker = 'Hasbro';
/*
1.  Here we instantiate the class with no constructor.
2. Then, we have to set each of the properties, one at a time. With a constructor this could be done in one line of code.
*/
//Interitance: 
//Here we have a parent class: 
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
//EXAMPLE ONE
//1
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle));
var myCar = new Automobile();
myCar.isSelfDriving = false; //2
myCar.topSpeed = 200; //3
myCar.make = "Volvo";
//EXAMPLE TWO       
//1
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myMotorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true; //2
myMotorcycle.topSpeed = 180; //3
/*
1.  The extends keyword declares that the class is going to inherit all of the properties and methods from another class. This is called subclassing. Both Motorcycle and Automobile inherit from Vehicle.
2. Note that these are properties declared in the subclass. The Motorcycle class does not have access to the isSelfDriving property and the Automobile class does not have access to easyToDoWheelie.
3. These are properties from the parent class, the Vehicle class. They are inherited properties.
*/
//Paramter Properties: 
var Store = /** @class */ (function () {
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var ikea = new Store('Ikea', 'Fishers');
var Store = /** @class */ (function () {
    //1                                    //2
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var ikea = new Store('Ikea', 'Fishers');
/*
1. We add a public accessor. We'll talk about this in the next module. For now, know that it's required for this approach.
2. With this approach we don't have to do all of the bindings for our properties inside of our constructor. We don't need this.name = name;
*/
//Accessors: 
//1
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //5
    Employee.prototype.getSalary = function () {
        return this._salary.toString();
    };
    //4
    Employee.prototype.setSalary = function (newSalary) {
        this._salary = newSalary;
    };
    return Employee;
}(Person));
var newEmployee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0; //This breaks
var salaryResult = newEmployee.getSalary();
console.log("The salary is:", salaryResult);
/*
1. We have a class called Employee that extends Person.
2. We create a private property, denoted by the private keyword.
3. It is common practice to see private properties in classes start with an underscore. This is not required. It is just a common convention.
4. We have a method called setSalary that takes in a number. It sets the value of the private property to the value that is passed in as an argument. These are both number types.
5. We have a method called getSalary that returns a string. Inside the method, we perform so low level business logic of converting the salary number value to a string in the return statement.
*/ 
//# sourceMappingURL=03-classes.js.map