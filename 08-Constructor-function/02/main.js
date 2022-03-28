function Accumulator(startingValue) {
    this.currentValue = startingValue;
    this.read = function() {
        this.addValue = +prompt('Enter value');
        this.currentValue += this.addValue;
    };
    this.show = function() {
        alert(this.currentValue)
    }
}

const accumulator1 = new Accumulator(10);

accumulator1.read();
accumulator1.show();