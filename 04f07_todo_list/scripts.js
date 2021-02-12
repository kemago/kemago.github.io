/*
SZÁMLÁLÓ
1. FELADAT
Másold le a fent látható HTML oldalt:
    2 különálló fejléc (header),
    1 gomb (button).
Készíts egy eseményfigyelőt (EventListener), 
    ami a gomb megnyomását követően megnöveli 
    a második fejléc által megjelenített értéket 
    (kezdeti érték: 0)!

(Segítség) Bármely HTML elem tartalma szöveg (string) formátumú.
(Segítség) A számot tárolhatod egy változóban.
*/

let szamAHeaderben = $("#szamHeader").val();

let ujSzam = Number(szamAHeaderben)

function kattintasNoveles() {
    ujSzam = ujSzam + 1
    $("h3").text(ujSzam)
}

$('#novelesGomb').click(function () {
    kattintasNoveles()
})

/*
2. FELADAT
(Szorgalmi) Készíts egy működö “Csökkentés” gombot!
*/

function kattintasCsokkentes() {
    ujSzam = ujSzam - 1
    $("h3").text(ujSzam)
}

$('#csokkenesGomb').click(function () {
    kattintasCsokkentes()
})