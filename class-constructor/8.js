class BankAccount {
  constructor(nomorRekening, namaNasabah, saldo = 0) {
    this.nomorRekening = nomorRekening;
    this.namaNasabah = namaNasabah;
    this.saldo = saldo;
  }

  setorUang(jumlah) {
    if (jumlah > 0) {
      this.saldo += jumlah;
      console.log(`Setoran sebesar: Rp ${jumlah.toLocaleString()} berhasil pada (No.Rekening ${this.nomorRekening}, atas nama nasabah ${this.namaNasabah}).`);
    } else {
      console.log("Jumlah setoran harus lebih dari 0.");
    }
  }

  tarikUang(jumlah) {
    if (this.saldo === 0) {
      console.log("Saldo saat ini: Rp 0. Tidak dapat menarik uang.");
    } else if (jumlah > 0 && jumlah <= this.saldo) {
      this.saldo -= jumlah;
      console.log(`Penarikan sebesar Rp ${jumlah.toLocaleString()} berhasil pada (No.Rekening ${this.nomorRekening}, atas nama nasabah ${this.namaNasabah}.)`);
    } else {
      console.log("Jumlah penarikan tidak valid atau melebihi saldo.");
    }
  }

  transferUang(jumlah, rekeningTujuan) {
    if (this.saldo === 0) {
      console.log("Saldo saat ini: Rp 0. Tidak dapat mentransfer uang.");
    } else if (jumlah > 0 && jumlah <= this.saldo) {
      this.saldo -= jumlah;
      rekeningTujuan.saldo += jumlah;
      console.log(`Transfer sebesar: Rp ${jumlah.toLocaleString()} (ke No.Rekening ${rekeningTujuan.nomorRekening}, atas nama nasabah ${rekeningTujuan.namaNasabah}) berhasil.`);
      this.lihatSaldo();
      rekeningTujuan.lihatSaldo();
    } else {
      console.log("Jumlah transfer tidak valid atau melebihi saldo.");
    }
  }

  lihatSaldo() {
    console.log(`Saldo saat ini: (No.Rekening ${this.nomorRekening}, Nasabah ${this.namaNasabah}) Sebesar Rp ${this.saldo.toLocaleString()}`);
  }
}

// Membuat beberapa instance dari class BankAccount
const akun1 = new BankAccount("001", "Kaisar", 500000);
const akun2 = new BankAccount("002", "Gofur", 300000);

// Melakukan beberapa operasi
akun1.lihatSaldo();
akun1.setorUang(200000);
akun1.lihatSaldo();
akun1.tarikUang(100000);
akun1.lihatSaldo();
akun1.transferUang(300000, akun2);

// Mencoba menarik dan mentransfer dengan saldo 0
const akun3 = new BankAccount("003", "Refy", 0);
akun3.lihatSaldo();
akun3.tarikUang(10000);
akun3.transferUang(10000, akun1);

// Mencoba menarik dan mentransfer dengan saldo 100000
const akun4 = new BankAccount("004", "Aziz", 100000);
akun4.lihatSaldo();
akun4.tarikUang(50000);
akun4.lihatSaldo();
akun4.transferUang(50000, akun2);