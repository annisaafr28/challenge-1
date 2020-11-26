class Tanah {
    constructor(p,l,h,n) {
        this.panjang = p
        this.lebar = l
        this.harga = h
        this.ppn = n
    }

    luas = () => {
        return this.panjang * this.lebar
    }

    hargaTanah = () => {
        return this.panjang * this.lebar * this.harga
    }

    totalPPN = () => {
        return this.panjang * this.lebar * this.harga * this.ppn / 100
    }
}

let tanah = new Tanah(20.5,30,1500000,15)
console.log("Luas Tanah = " + tanah.luas());
console.log("Harga Tanah = " + tanah.hargaTanah());
console.log("Total PPN = " + tanah.totalPPN());
console.log("Harga Akhir = " + (tanah.hargaTanah() + tanah.totalPPN()));