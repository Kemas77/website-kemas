let nama = "Kemas M. Rhafa F.";
let nilai = 85;
let angka = 10;

console.log("Nama: " + nama);
console.log("Nilai: " + nilai);

try {
    let hasil = nilai + angka;
    console.log("Hasil: " + hasil);
} catch (error) {
    console.error("Error:", error.message);
}

if (nilai >= 75) {
    console.log("Nilai Lulus");
} else {
    console.log("Nilai Tidak Lulus");
}

document.getElementById("hasil").innerHTML =
    "Nama: " + nama + "<br>" +
    "Nilai: " + nilai + "<br>" +
    "Status: Lulus";

console.log("Program tetap berjalan");