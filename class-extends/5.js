class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    bookDetails() {
        console.log(`Judul buku: ${this.title}`);
        console.log(`Nama sang pengarang: ${this.author}`);
        console.log(`Tahun di terbitkan: ${this.year}`);
    }
}

class Ebook extends Book {
    constructor(title, author, year, hargaBuku) {
        super(title, author, year);
        this.hargaBuku = hargaBuku;
    }
    
    bookDetails() {
        super.bookDetails();
        console.log(`Harga buku: Rp ${this.hargaBuku.toLocaleString()}`);
    }
}

// Membuat instance class dari Ebook
const ebook1 = new Ebook("Bawang Merah dan Bawang Putih", "Yudhistira Ikranegara", 2017, 15000);

// Menampilkan detail ebook
ebook1.bookDetails();