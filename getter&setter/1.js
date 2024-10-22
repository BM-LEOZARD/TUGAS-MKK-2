// Soal 1. Validasi firstName dan lastName tidak boleh kosong, age lebih dari nol. #
class person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get first() {
        return this.firstName;
    }

    set first(value) {
        if (value.length == 0) {
            console.log('Nama depan tidak boleh kosong');
        } else {
            this.firstName = value;
        }
    }

    get last() {
        return this.lastName;
    }

    set last(value) {
        if (value.length == 0) {
            console.log("Nama belakang tidak boleh kosong");
        } else {
            this.lastName = value;
        }
    }

    get getAge() {
        return this.age;
    }

    set setAge(value) {
        if (value < 0) {
            console.log("Umur tidak boleh kurang dari 0");
        } else {
            this.age = value;
        }
    }

    showDetails() {
        console.log(`Hello my name is ${this.firstName}`);
    }
}

// Contoh yang memenuhi syarat
const objek1 = new person("Bagus", "Maulana", "16");
objek1.showDetails();
console.log(`Nama depan: ${objek1.first}`);
console.log(`Nama belakang: ${objek1.last}`);
console.log(`Umur: ${objek1.getAge}`);

// Contoh yang tidak memenuhi syarat
objek1.first = ''; // (FirstName kosong)
objek1.last = ''; // (LastName kosong)
objek1.setAge = -1; // (Umur kurang dari 0 tahun)