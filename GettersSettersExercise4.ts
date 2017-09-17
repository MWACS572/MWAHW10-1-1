/**
 * Created by Owner on 9/16/2017.
 */
class Person{
    private _firstName:string;
    get firstName(){
        return this._firstName;
    }
    set firstName(value:string){
        this._firstName = value;
    }
}

let person = new Person();
person.firstName = "Nolawe";
console.log(person.firstName);
