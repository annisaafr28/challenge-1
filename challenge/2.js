class Barang {
    constructor(n,h,j) {
        this.nama = n
        this.harga = h
        this.jumlah = j
    }

    beras = () => {
        return this.nama = this.harga * this.jumlah
    }
    
    gula = () => {
        return this.nama = this.harga * this.jumlah
    }

    telur = () => {
        return this.nama = this.harga * this.jumlah
    }

    minyak = () => {
        return this.nama = this.harga * this.jumlah
    }
}

let hargaBeras = new Barang("Beras",10000,5)
console.log("Harga Beras = " + hargaBeras.beras());

let hargaGula = new Barang("Gula",14000,5)
console.log("Harga Gula = " + hargaGula.gula());

let hargaTelur = new Barang("Telur",20000,2)
console.log("Harga Telur = " + hargaTelur.telur());

let hargaMinyak = new Barang("Minyak Goreng",9000,10)
console.log("Harga Minyak Goreng = " + hargaMinyak.minyak());

console.log("Total Belanja = " + (hargaBeras.beras() + hargaGula.gula() + hargaTelur.telur() + hargaMinyak.minyak()));