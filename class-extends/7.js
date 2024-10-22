class Product {
    constructor(idProduk, name, price) {
        this.idProduk = idProduk;
        this.name = name;
        this.price = price;
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

// Membuat instance dari class ElectronicProduct
const laptop = new ElectronicProduct('M3400', 'Laptop Asus vivobook pro 14 oled', 15000000, 3);
const smartphone = new ElectronicProduct('SM-A556ELBCXID', 'Smartphone Samsung A55 5G', 5000000, 5);

// Membuat instance dari class ElectronicProduct (1)
console.log(`Nama Idproduk: ${laptop.idProduk}`);
console.log(`Nama Barang: ${laptop.name}`);
console.log(`Harga Barang: Rp ${laptop.price.toLocaleString()}`);
console.log(`Masa Garansi: ${laptop.masaGaransi} Tahun`);
console.log(laptop.hitungTotalHarga(2));

// Membuat instance dari class ElectronicProduct (2)
console.log(`Nama Idproduk: ${smartphone.idProduk}`);
console.log(`Nama Barang: ${smartphone.name}`);
console.log(`Harga Barang: Rp ${smartphone.price.toLocaleString()}`);
console.log(`Masa Garansi: ${smartphone.masaGaransi} Tahun`);
console.log(smartphone.hitungTotalHarga(2));