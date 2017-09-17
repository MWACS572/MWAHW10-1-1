/**
 * Created by Owner on 9/16/2017.
 */
let bankAccount:{money:number, deposit:(value:number)=>void}={
    money:2000,
    deposit:function(value:number):void{
       this.money +=value;
    }
};

let myself:{name:string, bankAccount:{money:number, deposit:(value:number)=>void}, hobbies:[string, string]} = {
    name:"Nolawe",
    bankAccount:bankAccount,
    hobbies:["Basketball", "Movies"]
};

myself.bankAccount.deposit(3000);
console.log(myself);