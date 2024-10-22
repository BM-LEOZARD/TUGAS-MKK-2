// soal 5. Validasi title tidak boleh kosong, harga harus number. #
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get ttl() {
        return this.title;
    }

    set ttl(value) {
        if (value.length == 0) {
            console.log("Nama title buku tidak boleh kosong");
        } else {
            this.title = value;
        }
    }

    bookDetails() {
        console.log(`Title buku: ${this.title}`);
        console.log(`Nama sang pengarang: ${this.author}`);
        console.log(`Tahun di terbitkan: ${this.year}`);
    }
}

class Ebook extends Book {
    constructor(title, author, year, hargaBuku) {
        super(title, author, year);
        this.hargaBuku = hargaBuku;
    }

    get price() {
        return this.hargaBuku.toLocaleString();
    }

    set price(value) {
        if (typeof value !== 'number' || isNaN(value)) {
            console.log("Harga buku harus berupa angka/number");
        } else {
            this.hargaBuku = value;
        }
    }
    
    bookDetails() {
        super.bookDetails();
        console.log(`Harga buku: Rp ${this.hargaBuku.toLocaleString()}`);
    }
}

// Contoh yang memenuhi syarat
const ebook = new Ebook("Bawang Merah dan Bawang Putih", "Yudhistira Ikranegara", 2017, 15000);
ebook.bookDetails();

// Contoh yang tidak memenuhi syarat
ebook.ttl = ''; // (Title kosong)
ebook.author = 'Ahmad Yani';
console.log(`Nama sang pengarang: ${ebook.author}`);
ebook.year = 2005;
console.log(`Tahun di terbitkan: ${ebook.year}`);
ebook.price = 'Lima Puluh Ribu'; // (Harga bukan number)