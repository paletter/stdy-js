// Remark

// -- 定义与apply相同，只是传参有差别，具体细节参考func_apply
// 如果不传参数只传对象，apply与call的使用是没差别的

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
    console.log("-- Call func use apply(): " +  getInfo.call(myObj));
}

// Case 1
function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Student(name, age, grade) {
    Person.call(this, name, age);
    // Person.call(this, name, age)可以用Person.apply(this, argument)代替，
    // 但需保证Student参数的顺序与Person一致才有意义
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