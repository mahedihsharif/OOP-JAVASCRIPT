class Person{
    constructor(name, work, salaray){
        this.name=name;
        this.work=work;
        this.salaray=salaray
    }
}
const person1=new Person('Mahedi', 'student', 1000);
console.log(person1)
 
 //function oriented..
 function Buisnessman(name, work, salaray){
     this.name=name;
     this.work=work;
     this.salaray=salaray
 }
 var person2=new Buisnessman('sayem', 'webdeveloper', 50000);
 console.log(person2.name)