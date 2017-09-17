/**
 * Created by Owner on 9/16/2017.
 */
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
person.firstName = "Nolawe";
console.log(person.firstName);
