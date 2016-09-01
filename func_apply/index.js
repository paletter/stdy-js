// Remark

// -- 对象的继承，一般作法是复制：Object.extend，
// apply方法同样可以实现继承的功能，apply方法能劫持另一个对象的方法，继承另一个对象的属性，
// Function.apply(obj, args)方法能接收两个参数：
//   obj：这个对象将代替Function类里的this对象
//   args：这个是数组，它将作为参数传给Function

// -- apply()方法会将数组参数转换为参数列表，
// 例：arguments([param1, param2, ...])作为第二个参数传入后，会转换为(param1, param2, ...)的形式传入apply对象

window.onload = function() {

    console.log("-- Run onload()");

    // Case 1
    console.log("=============== Case 1");
    var student = new Student("Fang", 28, 6);
    student.show();

    // Case 2
    console.log("=============== Case 2");
    var myObj = new MyObj("Fang");
    console.log("-- Call func without apply(): " + getInfo());
    console.log("-- Call func use apply(): " +  getInfo.apply(myObj));

    // Case 3
    console.log("=============== Case 3");
    var blackCat = new BlackCat();
    Cat.apply(blackCat, ["Tom"]);
    blackCat.shout();
    blackCat.showColor();

    // Case 4
    console.log("=============== Case 4");
    var arrUtil = new ArrUtil();
    var sliceArr = arrUtil.slice.apply([1, 2, 3 ,4], [1]);
    console.log("-- slice.apply result: ");
    console.log(sliceArr);
}

// Case 1
function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Student(name, age, grade) {
    Person.apply(this, arguments);
    this.grade = grade;
    this.show = function() {
        console.log("-- Obj Student.property.name: " + this.name);
        console.log("-- Obj Student.property.age: " + this.age);
        console.log("-- Obj Student.property.grade: " + this.grade);
    };
}

// Case 2
function MyObj(name) {
    this.name = name;
    this.show = function() {
        return "-- Obje MyObj.show(): " + name;
    }
}

function getInfo() {
    if(this.show) {
        return this.show();
    } else {
        return "-- Func show() is undefined.";
    }
}

// Case 3
function Cat(name) {
    this.name = name;
    this.shout = function() {
        console.log("-- Cat " + name + " shout!");
    };
}

function BlackCat() {
    this.color = "Black";
    this.showColor = function() {
        console.log("-- Cat " + this.name + "'s color is " + this.color);
    }
}

// Case 4
function ArrUtil() {
    this.slice = function(i) {
        return this.slice(i);
    };
}