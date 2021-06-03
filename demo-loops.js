var sayi = Math.floor((Math.random() * 10) + 1)
var hak, can
var tahmin, sayac = 0
can = Number(prompt("Kaç kerede bilebilirsiniz?"))
hak=can
//console.log(sayi) activate for seeing random number

while (hak > 0) {
    hak--
    sayac++
    var tahmin = Number(prompt("Tahmin?"))
    if (tahmin == sayi) {
        console.log(`Tebrikler ${sayac} defada bildiniz`)
        console.log(`Puanınız: ${100 - (sayac - 1) * (100/can)}`)
        break
    }
    else if (tahmin > sayi) {
        console.log("Aşağı")
    }
    else {
        console.log("yukarı")
    }
    if (hak == 0) {
        console.log(`Hakkınız bitti. Tuttuğum sayı: ${sayi}`)
    }
}


