class BMI {
    constructor(bb,tb) {
        this.berat = bb
        this.tinggi = tb
    }


    bmi = () => {
        return this.berat / ( this.tinggi * this.tinggi )
    }
    
}
let hasil = new BMI(90,1.7)
console.log("BMI Rhodey = " + hasil.bmi())

if (hasil <= 18.5){
    console.log("Keterangan = Kekurangan berat badan")
} else if (hasil <= 24.9){
    console.log("Keterangan = Normal")
} else if (hasil <= 29.9){
    console.log("Keterangan = Kelebihan berat badan")
} else {
    console.log("Keterangan = Kegemukan")
}