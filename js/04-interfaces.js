//No INstantiation: 
var a = new Animal();
var lassie = {};
var lassie = {
    name: 'Lassie',
    numberOfLegs: 4
};
//Methods: 
//1
function sayHello(name) {
    //2
    var someNum = 1 + 2;
    var someOtherNum = 1 + 2;
    return name;
}
//1
var Apples = /** @class */ (function () {
    function Apples() {
    }
    //2
    Apples.prototype.setTimeOfPurchase = function (d) {
        console.log("Apples purchased on ", d);
    };
    return Apples;
}());
//3
var myApples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));
/*
1. Notice that we are implementing an interface on the class. Since we are implementing our interface on the class, we are imposing its shape. Which means the class will be required to hold the properties and methods of the interface. When we implement it, it will show an error until we add those things.
2. We implement the setTimeOfPurchase method in the class, and provide a basic implementation of by logging the date to the console
3. We then create a new instance of the Apples class and call the setTimeOfPurchase method.
*/ 
//# sourceMappingURL=04-interfaces.js.map