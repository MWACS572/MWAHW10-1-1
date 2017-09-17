/**
 * Created by Owner on 9/16/2017.
 */
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Nolawe",
    bankAccount: bankAccount,
    hobbies: ["Basketball", "Movies"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
