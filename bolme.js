function bol() {
    const s1 = Number(document.getElementById("sayi1").value);
    const s2 = Number(document.getElementById("sayi2").value);

    if (s2 === 0) {
        document.getElementById("sonuc").innerHTML = "Sıfıra bölünmez!";
        return;
    }

    document.getElementById("sonuc").innerHTML = s1 / s2;
}

