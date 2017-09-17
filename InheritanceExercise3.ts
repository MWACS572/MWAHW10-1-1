/**
 * Created by Owner on 9/16/2017.
 */
class baseObject{
    width:number = 0;
    length:number = 0;
}

class rectangle extends baseObject{

    constructor(){
        super();
        this.width = 5;
        this.length = 2;
    }
    calcSize(){
        return this.width*this.length;
    }
}

let rec = new rectangle();
console.log(rec.calcSize());