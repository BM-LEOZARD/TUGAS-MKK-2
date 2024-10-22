// Membuat class
class rekeningBank {
    constructor(nomorRekening, saldo = 0) {
        this.nomorRekening = nomorRekening;
        this.saldo = saldo;
    }

    setorUang(jumlah) {
        if (jumlah > 0) {
            this.saldo += jumlah;
            console.log(`Setoran sebesar Rp ${jumlah.toLocaleString()} berhasil pada No.Rekening ${this.nomorRekening}.`);
        } else {
            console.log("Jumlah setoran harus lebih dari 0.");
        }
        this.tampilkanSaldo();
    }

    tarikUang(jumlah) {
        if (jumlah > 0 && jumlah <= this.saldo) {
            this.saldo -= jumlah;
            console.log(`Penarikan sebesar Rp ${jumlah.toLocaleString()} berhasil pada No.Rekening ${this.nomorRekening}.`);
        } else {
            console.log("Jumlah penarikan tidak valid atau melebihi saldo.");
        }
        this.tampilkanSaldo();
    }

    tampilkanSaldo() {
        console.log(`Saldo saat ini: Rp ${this.saldo.toLocaleString()} pada No.Rekening ${this.nomorRekening}`);
    }
}

// Membuat tiga instance dari class rekeningBank
const akun1 = new rekeningBank("123-456-789", 500000);
const akun2 = new rekeningBank("987-654-321", 750000);
const akun3 = new rekeningBank("456-789-123", 1000000);

// Tampilkan saldo setiap akun
akun1.tampilkanSaldo(500000);
akun2.tampilkanSaldo(750000);
akun3.tampilkanSaldo(1000000);

// Setorkan sejumlah uang ke masing-masing rekening
akun1.setorUang(200000);
akun2.setorUang(150000);
akun3.setorUang(500000);

// Tarik sejumlah uang dari masing-masing rekening
akun1.tarikUang(100000);
akun2.tarikUang(300000);
akun3.tarikUang(250000);