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
//$("li").css("background-color", "lime")
//$(".sarga").css('backgorund-color', 'magenta')

$("p").text('alma')

$("p").html('alma, ami <strong>nagyon</strong> fontos')

$("ul").append("<li>ujabb elem</li>")

$("li:last-of-type").remove()

function adjHozzaEgyLit() {
    $("ul").append("<li>ujabb elem</li>")
}

function toroljEgyLit() {
    $("li:last-of-type").remove()
}

$('#hozzaado').click(adjHozzaEgyLit)

$('#torlo').click(toroljEgyLit)

$("li:last-of-type").toggleClass('sárga')


for (let i = 0; i < 100; i++) {
    $("ul").append('<li> Nem csalok többet a vizsgán. </li>')
}

let szinek = ['orange', 'magenta', 'red', 'brown', 'green', 'blue', 'teal']

function egySzinDoboz(szin) {
  $('.kontener').append('<div class="doboz"></div>')
  $('.kontener div:last-of-type').css('background-color', szin)
}



egySzinDoboz('lime')
egySzinDoboz('pink')

szinek.forEach(egySzinDoboz)