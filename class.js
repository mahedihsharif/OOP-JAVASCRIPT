class Person{
    constructor(name, work, salaray){
        this.name=name;
        this.work=work;
        this.salaray=salaray
    }
    getName(){
        if(this.salaray > 5000){
            return this.salaray;
        }
        return 'His salaray is cheaper than .....'
    }
    
}
const person1=new Person('madedi','student', 1000);
console.log(person1.getName())
 
 //function oriented..
//  function Buisnessman(name, work, salaray){
//      this.name=name;
//      this.work=work;
//      this.salaray=salaray
//  }
  