function cikar() {
    const s1 = Number(document.getElementById("sayi1").value);
    const s2 = Number(document.getElementById("sayi2").value);

    if (s1 < s2) {
        alert("İlk sayı ikinci sayıdan küçük olamaz");
    } else {
        document.getElementById("sonuc").innerHTML = s1 - s2;
    }
}

