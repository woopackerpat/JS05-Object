function Calculator() {
    this.read = function() {
        this.a = +prompt('a'); 
        this.b = +prompt('b'); 
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
}

const calculator = new Calculator();

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
