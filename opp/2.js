// Membuat Class (Constructor Function)
function PersegiPanjang(panjang, lebar) {
    this.panjang = panjang;
    this.lebar = lebar;

    // Hitung luas persegi panjang method
    this.hitungLuas = function() {
        return this.panjang * this.lebar;
    };

    // Hitung keliling persegi panjang method
    this.hitungKeliling = function() {
        return 2 * (this.panjang + this.lebar);
    };
}

// Membuat objek PersegiPanjang berdasarkan class
const persegiPanjang1 = new PersegiPanjang(10, 5);

// Hitung luas dan keliling persegi panjang 
console.log(`Luas: ${persegiPanjang1.hitungLuas()}`);
console.log(`Keliling: ${persegiPanjang1.hitungKeliling()}`);