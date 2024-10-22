// Soal 4. Validasi nama kantor cabang tidak boleh sama (Menggunakan set). #
class Bank {
    constructor(namaBank) {
        this.namaBank = namaBank;
        this.kantorCabang = new Set();
    }

    tambahNamaBank() {
        console.log(`Nama Bank: ${this.namaBank}`);
    }

    get getTambahKantorCabang() {
        return this.kantorCabang;
    }

    set setTambahKantorCabang(namaCabang) {
        if (this.kantorCabang.has(namaCabang)) {
            console.log(`Cabang ${namaCabang} sudah ada. Setiap bank yang mempunyai cabang hanya dapat memiliki 1 cabang pada setiap daerah`);
        } else {
            this.kantorCabang.add(namaCabang);
            console.log(`Cabang ${namaCabang} telah ditambahkan`);
        }   
    }

    get getHapusKantorCabang() {
        return this.kantorCabang;
    }

    set setHapusKantorCabang(namaCabang) {
        if (this.kantorCabang.has(namaCabang)) {
            this.kantorCabang.delete(namaCabang);
            console.log(`Cabang ${namaCabang} telah dihapus`);
        } else {
            console.log(`Cabang ${namaCabang} tidak ditemukan`);
        }
    }

    tampilkanSemuaKantorCabang() {
        if (this.kantorCabang.size > 0) {
            console.log(`Kantor Cabang ${this.namaBank}:`);
            let index = 1;
            this.kantorCabang.forEach((cabang) => {
                console.log(`${index}. ${cabang}`);
                index++;
            });
        } else {
            console.log(`Tidak ada kantor cabang untuk ${this.namaBank}`);
        }
    }
}

// Contoh yang memenuhi syarat
const bank1 = new Bank("Bank MANDIRI");
console.log(bank1.namaBank);

bank1.setTambahKantorCabang = "Cirebon";
bank1.setTambahKantorCabang = "Jakarta";
bank1.setTambahKantorCabang = "Jogjakarta";
bank1.setTambahKantorCabang = "Cimahi";
bank1.setTambahKantorCabang = "Semarang";

bank1.tampilkanSemuaKantorCabang();

bank1.setHapusKantorCabang = "Cimahi";

bank1.tampilkanSemuaKantorCabang();

// Contoh yang tidak memenuhi syarat
const bank2 = new Bank("Bank NKRI");
console.log(bank2.namaBank);

bank2.setTambahKantorCabang = "Bandung";
bank2.setTambahKantorCabang = "Semarang";
bank2.setTambahKantorCabang = "Riau";
bank2.setTambahKantorCabang = "Bali";
bank2.setTambahKantorCabang = "Kuningan";
bank2.setTambahKantorCabang = "Papua";
bank2.setTambahKantorCabang = "Bandung"; // (Nama kantor cabang sama)

bank2.tampilkanSemuaKantorCabang();

bank2.setHapusKantorCabang = "Bali";
bank2.setHapusKantorCabang = "Riau";
bank2.setHapusKantorCabang = "Kalimantan";

bank2.tampilkanSemuaKantorCabang();