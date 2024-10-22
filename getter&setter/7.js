// Soal 7. Validasi nama harus string, harga harus number. #

class Product {
    constructor(idProduk, name, price) {
        this.idProduk = idProduk;
        this.name = name;
        this.price = price;
    }

    get nama() {
        return this.name;
    }

    set nama(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            console.log("Nama barang harus berupa string yang tidak boleh kosong");
        } else {
            this.name = value;
        }
    }

    get harga() {
        return this.price;
    }

    set harga(value) {
        if (typeof value !== 'number' || isNaN(value)) {
            console.log("Harga barang harus berupa angka/number");
        } else {
            this.price = value;
        }
    }

    hitungTotalHarga(kuantitas) {
        return this.price * kuantitas;
    }
}

class ElectronicProduct extends Product {
    constructor(idProduk, name, price, masaGaransi) {
        super(idProduk, name, price);
        this.masaGaransi = masaGaransi;
    }

    hitungTotalHarga(kuantitas) {
        const totalHarga = super.hitungTotalHarga(kuantitas);
        return `Total harga: Rp${totalHarga.toLocaleString()} dengan masa garansi ${this.masaGaransi} tahun`;
    }
}

// Contoh memenuhi syarat
const produk = new ElectronicProduct('E123', 'Laptop Asus vivobook pro 14 oled', 15000000, 2);

console.log(`Nama Idproduk: ${produk.idProduk}`);
console.log(`Nama Barang: ${produk.nama}`);
console.log(`Harga Barang: Rp${produk.harga.toLocaleString()}`);
console.log(`Masa Garansi: ${produk.masaGaransi} Tahun`);
console.log(produk.hitungTotalHarga(2));

// Contoh tidak memenuhi syarat

produk.idProduk = 'SM-A556ELBCXID';
console.log(`Nama Idproduk: ${produk.idProduk}`);
produk.nama = 123; // (Nama bukan string)
produk.harga = 'Lima Juta Rupiah'; // (Harga bukan number)
produk.masaGaransi = 5;
console.log(`Masa Garansi: ${produk.masaGaransi} Tahun`);
console.log(produk.hitungTotalHarga(2));