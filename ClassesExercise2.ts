/**
 * Created by Owner on 9/16/2017.
 */
class Car{
    acceleration:number;
    constructor(public name:string){
        this.acceleration = 0;
    }
    honk(){
        console.log(`$(this.name) is saying: Toooooot!`)
    }
    accelerate(speed:number){
        this.acceleration = this.acceleration + speed;
    }
}

let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);