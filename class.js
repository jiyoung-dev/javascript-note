'use strict';

/** 클래스 구조 
 * class person {
 *  name;  // field
 *  speak();  // method 
 * }
*/

// 1. class 정의 

// class 선언 
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // method
  speak(){
    console.log(`Hello, ${this.name}`);  // this: 생성될 오브젝트
  }
}

// object (인스턴스) 생성 
const joy = new Person('joy', 20);
console.log(joy.name);
console.log(joy.age);
joy.speak();

// 2. Getter and Setters
class User {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;  // this.age는 getter 함수를 호출하고, age는 할당되기 전에 setter 함수를 호출한다. 
  }

  get age(){  
    return this._age;
  }

  set age(value){  // value를 받아와 값을 설정하는곳 (Setter 함수 호출)
    this._age = value;
  }
}

const user1 = new User('Joy', 'Lee', 20);
console.log(user1.age);

// 3. Inheritance (상속)
class Shape{
  constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw(){
    console.log(`drawing ${this.color} color`);
  }

  getArea(){
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  // 오버라이딩 
  getArea(){
    return (this.width * this.height) / 2; // 부모 클래스에 정의된 함수가 아닌, 새롭게 오버라이딩된 함수가 실행된다.
  }

  // 오버라이딩 + super
  draw(){
    // 오버라이딩 하면서 부모클래스에 있는 함수도 호출함
    super.draw();
    console.log('🔺');
  }
}

const square = new Shape(5, 5, 'red');
square.draw();
console.log(square.getArea());
// drawing red color
// 25

const triangle = new Triangle(5, 5, 'pink');
triangle.draw();
console.log(triangle.getArea());
// drawing pink color
// 12.5

// 참고 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects