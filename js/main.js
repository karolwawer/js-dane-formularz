function pobierzDane() {
    var imie1 = document.getElementById("im");
    var nazwisko1 = document.getElementById("naz");
    var telefon1 = document.getElementById("tel");
    var daneImie = document.getElementById("name");
    var daneNazwisko = document.getElementById("surname");
    var daneTel = document.getElementById("phone");
 daneImie.textContent = imie1.value;
 daneNazwisko.textContent = nazwisko1.value;
 daneTel.textContent = telefon1.value;
}
var guzik = document.querySelector("button");
guzik.onclick = pobierzDane;