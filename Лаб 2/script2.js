//1 task
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello () {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`); 
    }
}

let misha = new User("misha", 20);
misha.hello();

//2 task
function User_func(name, age) {
        this.name = name;
        this.age = age;
    }
User_func.prototype.hello = function() {
    console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`); 
}

let nastya = new User_func("nastya", 15);
nastya.hello();

//3+4 task
class User_with_tel {
    _tel;
    #age;
    get tel() {
        return this._tel;
    }
    set tel(value) {
        if ((value[0] != "+") || (value[1] != "7") || (value.length != 12))
            throw new Error("Bad telephone number");
        else {
            for (let i = 2; i < 12; i++){
                if (('0' > value[i]) || (value[i] > '9'))
                    throw new Error("Bad telephone number");
            }
            this._tel = value;
        }
    }
    get age() {
        return this.#age;
    }
    set age(value) {
        if ((value < 1) || (value > 100)){
            throw new Error("Invalid age");
        } else {
            this.#age = value;
        }
    }
    constructor(name, age, tel) {
        this.name = name;
        this.age = age;
        this.tel = tel;
    }
    hello () {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`); 
    }   
}

try{
    let krutoi_anatoly = new User_with_tel("anatoly_krut", 34, "+79154982475")
    //let krutoi_anatoly = new User_with_tel("anatoly_krut", 134, +79154982475)
    //let krutoi_anatoly = new User_with_tel("anatoly_krut", 34, 79154982475)
    krutoi_anatoly.hello()
}catch(error) {console.log("Ошибка!", error.message)}

//Task 5
class Student extends User {
    #knowledge = 0;
    constructor(name, age){
        super(name, age);
    }
    hello() {
        console.log(`Hi! My name is ${this.name}. I am ${this.age} years old. And I am a student!`);
        console.log(`My secret knowledge is ${this.#knowledge}`)
    }
    learn() {
        this.#knowledge++;
    }
}

student = new Student("vaska", 21)
student.hello()
student.learn()
student.hello()

//Task 6
Array.prototype.reverse = function () {
this.push(...this.slice());
  return this;
};

let array = [1,2,3,4,5]
array.reverse()
console.log(`Alert after reverse is ${array}`)