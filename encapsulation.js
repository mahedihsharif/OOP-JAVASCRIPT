class Tiger{
    #speed=100
    constructor(name){
        this.name = name;
    }
    run(){
        console.log(`I am ${this.name}. I am runnig at ${this.#speed} mph`)
    }
}
const royel=new Tiger('Royel Bengal');
royel.run();