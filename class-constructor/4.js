class Bank {
    constructor(namaBank) {
        this.namaBank = namaBank;
        this.kantorCabang = [];
    }

    tambahNamaBank() {
        console.log(`Nama Bank: ${this.namaBank}`);
    }

    tambahKantorCabang(namaCabang) {
        this.kantorCabang.push(namaCabang);
        console.log(`Cabang ${namaCabang} telah ditambahkan.`);
    }

    hapusKantorCabang(namaCabang) {
        const index = this.kantorCabang.indexOf(namaCabang);
        if (index !== -1) {
            this.kantorCabang.splice(index, 1);
            console.log(`Cabang ${namaCabang} telah dihapus.`);
        } else {
            console.log(`Cabang ${namaCabang} tidak ditemukan.`);
        }
    }

    tampilkanSemuaKantorCabang() {
        if (this.kantorCabang.length > 0) {
            console.log(`Kantor Cabang ${this.namaBank}:`);
            this.kantorCabang.forEach((cabang, index) => {
                console.log(`${index + 1}. ${cabang}`);
            });
        } else {
            console.log(`Tidak ada kantor cabang untuk ${this.namaBank}.`);
        }
    }
}

// Membuat instance dari class Bank
const bankSaya1 = new Bank('Bank MANDIRI');
const bankSaya2 = new Bank(`Bank BNI`);

// Menambahkan beberapa kantor cabang(1)
bankSaya1.tambahNamaBank();
bankSaya1.tambahKantorCabang('Cirebon');
bankSaya1.tambahKantorCabang('Jogjakarta');
bankSaya1.tambahKantorCabang('Aceh');

// Menampilkan semua kantor cabang(1)
bankSaya1.tampilkanSemuaKantorCabang();

// Menghapus salah satu kantor cabang(1)
bankSaya1.hapusKantorCabang('Aceh');

// Menampilkan semua kantor cabang lagi (1)
bankSaya1.tampilkanSemuaKantorCabang();

// Menambahkan beberapa kantor cabang(2)
bankSaya2.tambahNamaBank();
bankSaya2.tambahKantorCabang('Jakarta');
bankSaya2.tambahKantorCabang('Bandung');
bankSaya2.tambahKantorCabang('Indramayu');
bankSaya2.tambahKantorCabang('Pati');
bankSaya2.tambahKantorCabang('Semarang');

// Menampilkan semua kantor cabang (2)
bankSaya2.tampilkanSemuaKantorCabang();

// Menghapus salah satu kantor cabang (2)
bankSaya2.hapusKantorCabang('Indramayu');

// Menampilkan semua kantor cabang lagi (2)
bankSaya2.tampilkanSemuaKantorCabang();

// Menghapus 2 kantor cabang (2)
bankSaya2.hapusKantorCabang('Semarang');
bankSaya2.hapusKantorCabang('Jakarta');

// Menampilkan semua kantor cabang sekali lagi (2)
bankSaya2.tampilkanSemuaKantorCabang();