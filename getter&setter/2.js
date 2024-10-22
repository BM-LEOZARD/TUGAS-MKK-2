// Soal 2. Validasi panjang dan lebar lebih dari nol. #
class PersegiPanjang {
    constructor(panjang, lebar) {
        this.panjang = panjang;
        this.lebar = lebar;
    }

    get getPanjang() {
        return this.panjang;
    }

    set setPanjang(value) {
        if (value <= 0) {
            console.log("Nilai panjang harus lebih tinggi dari angka 0");
        } else {
            this.panjang = value;
        }
    }

    get getLebar() {
        return this.lebar;
    }

    set setLebar(value) {
        if (value <= 0) {
            console.log("Nilai lebar harus lebih tinggi dari angka 0");
        } else {
            this.lebar = value;
        }
    }

    hitungLuas() {
        return this.panjang * this.lebar;
    }

    hitungKeliling() {
        return 2 * (this.panjang + this.lebar);
    }
}

// Contoh yang memenuhi syarat
const persegiPanjang1 = new PersegiPanjang(4, 8);
console.log(`Luas Persegi Panjang: ${persegiPanjang1.hitungLuas()}`);
console.log(`Keliling Persegi Panjang: ${persegiPanjang1.hitungKeliling()}`);

// Contoh yang tidak memenuhi syarat
persegiPanjang1.setPanjang = -4; // (Panjang kurang dari 0)
persegiPanjang1.setLebar = -1; // (Lebar kurang dari 0)