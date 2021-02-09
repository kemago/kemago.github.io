let nevem = "Ago"
let azEnKorom = 52
console.log('A javascript is betöltött.')
console.log("User: " + nevem)
console.log("Az én korom: " + azEnKorom)


// egy soros komment
/* Több
soros
komment 
*/

if (azEnKorom >= 21) {
    console.log("Amerikában is elég idős vagy az alkoholhoz.")
} else if (azEnKorom >= 18) {
    console.log("Már elég idős vagyok ahhoz, hogy igyak Európában")
}  else {
    console.log("Még nem léphetsz dohányboltba.")
}

let masikKor = 17

if (masikKor >= 18) {
    console.log("A másik is elég idős ahhoz, hogy igyon egy sört")
}

console.log("Ez itt a vége.")

// jQuery-rész
let szovegAzOldalon = $("h1").text()
console.log(szovegAzOldalon)

let azUjSzoveg = "Ezt jQuery-vel változtattuk meg."
console.log($("h1").text(azUjSzoveg))

console.log($(".sarga").css("background-color"))
$("li").css("background-color", "lime")
$(".sarga").css('backgorund-color', 'magenta')

$("p").text('alma')

$("p").html('alma, ami <strong>nagyon</strong> fontos')

$("ul").append("<li>ujabb elem</li>")