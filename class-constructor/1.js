// Membuat class
class person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    showDetails(name) {
        console.log(`Hello ${name}, my name is ${this.firstName}`);
    }
}

const bagus = new person("Bagus", "Maulana", "16 years old");
bagus.showDetails('Suwendo');
console.log(bagus);