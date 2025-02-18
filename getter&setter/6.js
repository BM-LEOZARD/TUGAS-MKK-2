// Soal 6. Validasi nama harus string, gaji lebih dari nol. #

class Employee {
    constructor(nama, gaji) {
        this.nama = nama;
        this.gaji = gaji;
    }

    get Nama() {
        return this.nama;
    }

    set Nama(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            console.log("Nama pegawai harus berupa string yang tidak boleh kosong");
        } else {
            this.nama = value;
        }
    }

    get Gaji() {
        return this.gaji.toLocaleString();
    }

    set Gaji(value) {
        if (value < 0) {
            console.log("Gaji bulanan harus berupa nominal yang lebih tinggi dari 0 Rupiah");
        } else {
            this.gaji = value;
        }
    }

    hitungGajiTahunan() {
        return this.gaji * 12;
    }
}

class Manager extends Employee {
    constructor(nama, gaji, departemen) {
        super(nama, gaji);
        this.departemen = departemen;
    }

    hitungGajiTahunan() {
        const gajiTahunan = super.hitungGajiTahunan();
        const bonus = this.gaji * 12 * 0.1;
        return gajiTahunan + bonus;
    }

    showDetails() {
        const gajiTahunan = this.hitungGajiTahunan();
        console.log(`Nama pegawai: ${this.nama}`);
        console.log(`Gaji bulanan: Rp${this.gaji.toLocaleString()}`);
        console.log(`Manager: ${this.nama}`);
        console.log(`Departemen: ${this.departemen}`);
        console.log(`Bonus (10% dari gaji pokok): 0.1 atau sebesar Rp${(this.gaji * 0.10).toLocaleString()}`);
        console.log(`Gaji Tahunan: Rp${gajiTahunan.toLocaleString()}`);
    }
}

// Contoh yang memenuhi syarat
const manager = new Manager("Lamira Yumna", 1000000, "Marketing");
manager.showDetails();

// Contoh yang tidak memenuhi syarat

manager.Nama = 123; // (Nama bukan string)
manager.Gaji = -11000000; // (Gaji kurang dari 0 rupiah)
manager.Nama = 123; // (Nama bukan string)
manager.departemen = 'Administrasi';
console.log(`Departemen: ${manager.departemen}`);
console.log(`Bonus (10% dari gaji pokok): 0.1 atau sebesar Rp${(manager.gaji * 0.10).toLocaleString()}`);
console.log(`Gaji tahunan: Rp${(manager.hitungGajiTahunan()).toLocaleString()}`);