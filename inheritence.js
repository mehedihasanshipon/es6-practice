class Parent{
    constructor(){
        this.parentName = 'Islam';
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.parentName;
    }
}
const child1 = new Child('Korim');
const child2 = new Child('Rahim');
console.log(child1.getFullName());
console.log(child2.getFullName());