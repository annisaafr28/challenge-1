class Lingkaran {
    constructor(r) {
        this.jari_jari = r
    }

    luas = () => {
        return 3.14 * this.jari_jari * this.jari_jari
    }

    keliling = () => {
        return 2 * 3.14 * this.jari_jari
    }
}

class Tabung extends Lingkaran {
    constructor(r,t) {
        super(r)
        this.tinggi = t
    }

    volume = () => {
        return 3.14 * (this.jari_jari ** 2) * this.tinggi
    }

    luasPermukaan = () => {
        return 2 * 3.14 * this.jari_jari * (this.jari_jari + this.tinggi)
    }

    luasSelimut = () => {
        return 2 * 3.14 * this.jari_jari *  this.tinggi
    }
}

class Kerucut extends Lingkaran {
    constructor(r,t) {
        super(r)
        this.tinggi = t
    }

    volume = () => {
        return 1/3 * 3.14 * (this.jari_jari ** 2) * this.tinggi
    }

    luasPermukaan = () => {
        return 3.13 * this.jari_jari * (this.jari_jari + this.tinggi)
    }

    luasSelimut = () => {
        return 3.14 * this.jari_jari * this.jari_jari
    }
}

class Bola extends Lingkaran {
    constructor(r) {
        super(r)
    }

    volume = () => {
        return 4/3 * 3.14 * (this.jari_jari ** 3)
    }

    luasPermukaan = () => {
        return 4 * 3.14 * (this.jari_jari ** 2) 
    }
}

let bola = new Bola(15)
console.log("Volume Bola = " + bola.volume());
console.log("Luas Permukaan Bola = " + bola.luasPermukaan());

console.log("---------------------------")

let kerucut = new Kerucut(10,40)
console.log("Volume Kerucut = " + kerucut.volume());
console.log("Luas Permukaan Kerucut = " + kerucut.luasPermukaan());
console.log("Luas Selimut Kerucut = " + kerucut.luasSelimut());

console.log("---------------------------")

let tabung = new Tabung(7.5,50)
console.log("Volume Tabung = " + tabung.volume());
console.log("Luas Permukaan Tabung = " + tabung.luasPermukaan());
console.log("Luas Selimut Tabung = " + tabung.luasSelimut());