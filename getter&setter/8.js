// Soal 8. Validasi noRekening dan namaNasabah tidak boleh sama (Menggunakan set). #

const usedRekeningNumbers = new Set();
const usedCustomerNames = new Set();

class BankAccount {
  constructor(nomorRekening, namaNasabah, saldo = 0) {
    this.nomorRekening = nomorRekening;
    this.namaNasabah = namaNasabah;
    this.saldo = saldo;
  }

  get getNoRek() {
    return this._nomorRekening;
  }

  set setNoRek(value) {
    if (usedRekeningNumbers.has(value)) {
      console.log(`No Rekening ${value} sudah digunakan`);
      } else {
        this._nomorRekening = value;
        usedRekeningNumbers.add(value);
      }
    }

  get getNamaNsbh() {
    return this._namaNasabah;
  }

  set setNamaNsbh(value) {
    if (usedCustomerNames.has(value)) {
      console.log(`Nama Nasabah '${value}' sudah digunakan`);
    } else {
      this._namaNasabah = value;
      usedCustomerNames.add(value);
    }
  }
  
  setorUang(jumlah) {
    if (jumlah > 0) {
      this.saldo += jumlah;
      console.log(`Setoran sebesar: Rp ${jumlah.toLocaleString()} berhasil pada (No.Rekening ${this.nomorRekening}, atas nama nasabah ${this.namaNasabah})`);
    } else {
      console.log("Jumlah setoran harus lebih dari 0");
    }
  }

  tarikUang(jumlah) {
    if (this.saldo === 0) {
      console.log(`Saldo saat ini: Rp 0. Tidak dapat menarik uang pada (No.Rekening ${this.nomorRekening}, atas nama nasabah ${this.namaNasabah})`);
    } else if (jumlah > 0 && jumlah <= this.saldo) {
      this.saldo -= jumlah;
      console.log(`Penarikan sebesar Rp ${jumlah.toLocaleString()} berhasil pada (No.Rekening ${this.nomorRekening}, atas nama nasabah ${this.namaNasabah})`);
    } else {
      console.log("Jumlah penarikan tidak valid atau melebihi saldo");
    }
  }

  transferUang(jumlah, rekeningTujuan) {
    if (this.saldo === 0) {
      console.log(`Saldo saat ini: Rp 0. Tidak dapat mentransfer uang pada (No.Rekening ${this.nomorRekening}, atas nama nasabah ${this.namaNasabah})`);
    } else if (jumlah > 0 && jumlah <= this.saldo) {
      this.saldo -= jumlah;
      rekeningTujuan.saldo += jumlah;
      console.log(`Transfer sebesar: Rp ${jumlah.toLocaleString()} ke (No.Rekening ${rekeningTujuan.nomorRekening}, atas nama nasabah ${rekeningTujuan.namaNasabah}) berhasil pada (No.Rekening ${this.nomorRekening}, atas nama nasabah ${this.namaNasabah})`);
      this.lihatSaldo();
      rekeningTujuan.lihatSaldo();
    } else {
      console.log("Jumlah transfer tidak valid atau melebihi saldo");
    }
  }

  lihatSaldo() {
    console.log(`Saldo saat ini: (No.Rekening ${this.nomorRekening}, Nasabah ${this.namaNasabah}) Sebesar Rp ${this.saldo.toLocaleString()}`);
  }
}
  
// Contoh yang memenuhi syarat
const akun1 = new BankAccount("001", "Bagus", 500000);
const akun2 = new BankAccount("002", "Gofur", 300000);
const akun3 = new BankAccount("003", "Refy", 0);
const akun4 = new BankAccount("004", "Aziz", 100000);

akun1.setNoRek = '001';
console.log(`No Rekening: ${akun1.getNoRek}`);
akun1.setNamaNsbh = 'Bagus';
console.log(`No Rekening: ${akun1.getNamaNsbh}`);

akun2.setNoRek = '002';
console.log(`No Rekening: ${akun2.getNoRek}`);
akun2.setNamaNsbh = 'Gofur';
console.log(`No Rekening: ${akun2.getNamaNsbh}`);

akun3.setNoRek = '003';
console.log(`No Rekening: ${akun3.getNoRek}`);
akun3.setNamaNsbh = 'Refy';
console.log(`No Rekening: ${akun3.getNamaNsbh}`);

akun4.setNoRek = '004';
console.log(`No Rekening: ${akun4.getNoRek}`);
akun4.setNamaNsbh = 'Aziz';
console.log(`No Rekening: ${akun4.getNamaNsbh}`);

akun1.lihatSaldo();
akun1.setorUang(200000);
akun1.lihatSaldo();
akun1.tarikUang(100000);
akun1.lihatSaldo();
akun1.transferUang(100000, akun2);
akun3.lihatSaldo();
akun3.tarikUang(10000);
akun3.transferUang(10000, akun1);
akun4.lihatSaldo();
akun4.tarikUang(50000);
akun4.lihatSaldo();
akun4.transferUang(50000, akun2);

// Contoh yang tidak memenuhi syarat
akun1.setNoRek = '004'; // (No Rekening sama)
akun2.setNamaNsbh = 'Refy'; // (Nama Nasabah sama)