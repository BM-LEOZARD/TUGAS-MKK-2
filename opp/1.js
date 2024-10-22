// Membuat objek dengan tipe data objek
const Bagus = {
    firstName: "Bagus",
    lastName: "Maulana",
    age: "16 years old"
};
const Diana = {
    firstName: "Diana",
    lastName: "Fungki",
    age: "17 years old"
};

// Membuat Class (Constructor Function)
function person(firstName, lastName, age) {
    this.firstName = firstName; //property
    this.lastName = lastName; //property
    this.age = age; //property

    //method
    this.showDetails = function (name) {
        console.log(`Hello ${name}, my name is ${this.firstName}, my full name is ${this.lastName}, i am age is ${this.age}`);
    }
}

// Membuat objek berdasarkan class
const bagus = new person("Bagus", "Maulana", "16  years old");
bagus.showDetails("Abi");

const diana = new person("Diana", "Fungki", "17 years old");
diana.showDetails("Kayla");