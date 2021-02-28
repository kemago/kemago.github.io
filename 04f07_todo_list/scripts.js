/*
SZÁMLÁLÓ
1. FELADAT
Az Add todo gombra kattintva a szövegdoboz 
tartalma kerüljön a lista végére
*/

// érték kiolvasása az input mezőből
szovegAzInputFieldben = $("#inputField").val();

// érték kiírása egy h3 elembe, ellenőrzésképpen
/*function inputSzovegKiiras() {
    console.log($("h3").text(szovegAzInputFieldben))
}
inputSzovegKiiras()
*/

// ez a függvény jól működik
function adjHozzaEgyLit() {
    // érték kiolvasása az input mezőből
    szovegAzInputFieldben = $("#inputField").val();
    $("ul").append('<li>' + szovegAzInputFieldben + '</li>')
    // reset input field
    $("#inputField").val('');
}

$('.addGomb').click(function () {
    adjHozzaEgyLit()
})

// ez automatikusan hozzátesz egy li-t, de csak egyszer
//adjHozzaEgyLit()