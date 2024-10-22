class Employee {
    constructor(nama, gaji) {
        this.nama = nama;
        this.gaji = gaji;
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

// Buat dua instance dari class Manager
const manager1 = new Manager('Lamira Yumna', 1000000, 'Marketing');
const manager2 = new Manager('Silmi Faris', 1550000, 'Marketing');

// Tampilkan detail dan hitung gaji tahunan
manager1.showDetails();
manager2.showDetails();