var age = 14;
function Hello() {
    var name;
    this.setName = function(name) {this.name = name;};
    this.sayHello = function() {console.log("Hello Moudle 2: " + this.name + age);};
}

module.exports = Hello;