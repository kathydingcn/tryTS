/* 

function greeting(template:TemplateStringsArray,name:string,age:any){
 
    console.log(template);
    console.log(name);
    console.log(age);
}

var myname:any = 'dingkding';
var myage = function():string{
    return  '18';
}

greeting`hello myname is ${myname}, i am ${myage()}`;

 
class Person {
    x:number;
    constructor(x:number, y:number){
        this.x = x;
        console.log("this.x is ", this.x);
        console.log("y is ", y);
    }
    myclass = 'english';
  myApp(name:string){
    console.log(`hahahahhah, ${name}`);
  }
  myApp2(age:number){
    console.log(`aggggggg, ${age}`);
  }
}

var zhangsan: Person = new Person(12,13);
zhangsan.myApp('ddddddd');
zhangsan.myApp2(20);
console.log(zhangsan.myclass); */
/* interface AnimalConstructor{
    new():Animal;
}

class Animal{
    constructor(){
        console.log('animal');
    }
}
class Penguin extends Animal{
    constructor(){
        super();
        console.log('Penguin');
    }
}
class Line extends Animal{
    constructor(){
        super();
        console.log('Line');
    }
}
class Zoo{
    AnimalClass: AnimalConstructor;  //class might be Penguin or Line
    constructor(AnimalClass:AnimalConstructor ){
        this.AnimalClass = AnimalClass;
       
     
    }
}
var zoo1 = new Zoo(Penguin); */
 
/* function test(first:number, ...args:number[]){
    console.log(first);
    console.log(args);
     
 
}

var arr = [1,2,3,4,5];
// let foo = new Set(arr);
test(28,...arr); */

 
/* var arr = [3,5,6,4];

function fun1([num1,num2,...other]){
    console.log(num1);
    console.log(num2);
    console.log(other);
}

fun1(arr); */

/* function getStock(name:string){
    this.name = name;
    var timer = setInterval(function(){
        console.log('name is', this.name);
    }, 1000);
    
    clearInterval(timer);
}
 
var stock = getStock("ibm"); */

// var myArr=[1,2,3,9,8];

/* myArr.forEach((item,index)=>{
    console.log(item);
}); */

 

/* for (var n in myArr){
    console.log(n);
    console.log(myArr[n]);
} */
/* for (var n of myArr){
    console.log(n);
    if(n===3){
        break;
    }
} */

/* class Person{
    constructor(public age:number){
        console.log('in person parent');
    }
    eat(){
        console.log('eat',  this.age);
    }
}
class Employee extends Person{
    constructor(age:number, code:string){
        super(age);
    }
    work(){
        super.eat();
    }
}

var workers: Array<Employee> = [];
var p1 = new Person(77);
 
 
 
workers[0] = new Employee(99,'ddd');
 
workers[0].work(); */

/* interface IPerson{
    name: string;
    age: number;
}
class Person{
    constructor(public config:IPerson){
        
    }
}
var p1=new Person({
    name: 'zhangsan',
    age:22
}); */

import {prop1} from './a';
import {way1} from './a';
import {class1} from './a';
 
/* interface Animal{
     eat():string;    
}
class Sheep implements Animal{
    eat(){
        return "sheep....";
    }
}
var s1 = new Sheep();
console.log(s1.eat()); */

way1();
var c1 = new class1();
console.log(c1.a1);
 
 
console.log(prop1);