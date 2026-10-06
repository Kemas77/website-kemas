function konversiSuhu() {
    let celsius = document.getElementById("celsius").value;

    let fahrenheit = (celsius * 9 / 5) + 32;
    let reamur = celsius * 4 / 5;
    let kelvin = Number(celsius) + 273.15;

    document.getElementById("hasil").innerHTML =
        "<p>Fahrenheit: " + fahrenheit + " °F</p>" +
        "<p>Reamur: " + reamur + " °R</p>" +
        "<p>Kelvin: " + kelvin + " K</p>";
}

console.log("Program konversi suhu dimulai");

console.log("Program selesai");