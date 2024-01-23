// İsim isteme ve Çağırma
var name = prompt("Adınız Nedir?");
document.getElementById("myName").innerHTML = name;

// Saat ve Gün{   

function zaman(){   
    var tarih=new Date();

    var saat=tarih.getHours();
    var dakika=tarih.getMinutes();
    let saniye = tarih.getSeconds() 

    var gun=tarih.getDay();
    var gunbilgisi = "";

    switch (gun) {
        case 1:
            gunbilgisi = "Pazartesi"
            break;
        case 2:
            gunbilgisi = "Salı"
            break;
        case 3:
            gunbilgisi = "Çarşamba"
            break;
        case 4:
            gunbilgisi = "Perşembe"
            break;
        case 5:
            gunbilgisi = "Cuma"
            break;
        case 6:
            gunbilgisi = "Cumartesi"
            break;
        case 7:
            gunbilgisi = "Pazar"
            break;
    }

    document.getElementById("myClock").innerHTML = `${saat}:${dakika}:${saniye}  ${gunbilgisi}`;
}

setInterval(zaman,1000);