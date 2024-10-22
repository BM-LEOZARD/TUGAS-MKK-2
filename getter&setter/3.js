// Soal 3. Validasi nomorRekening tidak boleh sama (Menggunakan set). #
const usedRekeningNumbers = new Set();

class rekeningBank {
    constructor(nomorRekening, saldo = 0) {
        this.nomorRekening = nomorRekening;
        this.saldo = saldo;
    }

    get getNoRekening() {
        return this._nomorRekening;
    }

    set setNoRekening(value) {
        if (usedRekeningNumbers.has(value)) {
            console.log(`Nomor Rekening ${value} sudah digunakan`);
        } else {
            this._nomorRekening = value;
            usedRekeningNumbers.add(value);
        }
    }

    setorUang(jumlah) {
        if (jumlah > 0) {
            this.saldo += jumlah;
            console.log(`Setoran sebesar Rp ${jumlah.toLocaleString()} berhasil pada No.Rekening ${this.nomorRekening}.`);
        } else {
            console.log("Jumlah setoran harus lebih dari 0");
        }
        this.tampilkanSaldo();
    }

    tarikUang(jumlah) {
        if (jumlah > 0 && jumlah <= this.saldo) {
            this.saldo -= jumlah;
            console.log(`Penarikan sebesar Rp ${jumlah.toLocaleString()} berhasil pada No.Rekening ${this.nomorRekening}`);
        } else {
            console.log("Jumlah penarikan tidak valid atau melebihi saldo");
        }
        this.tampilkanSaldo();
    }

    tampilkanSaldo() {
        console.log(`Saldo saat ini: Rp ${this.saldo.toLocaleString()} pada No.Rekening ${this.nomorRekening}`);
    }
}

// Contoh yang memenuhi syarat
const akun = new rekeningBank("123-456-789", 500000);

akun.setNoRekening = '123-456-789';
console.log(`No Rekening: ${akun.getNoRekening}`);

akun.tampilkanSaldo();
akun.setorUang(200000);
akun.tarikUang(100000);

// Contoh yang tidak memenuhi syarat
akun.setNoRekening = '123-456-789';