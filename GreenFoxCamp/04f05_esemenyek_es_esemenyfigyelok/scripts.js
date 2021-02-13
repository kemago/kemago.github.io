/*
A. ESEMÉNYEK ÉS ESEMÉNYFIGYELŐK
1. FELADAT
Írj egy scriptet a body végén:
    rendelj egy eseményfigyelőt (event listener) a gombhoz
    írd ki az “Igen, most rámkattintottál” üzenetet 
        a parancssorra (console), mikor a felhasználó rákattint a gombra
Ezt átírtam, mert hülyeség a konzolra írogatni... 
        */

function kattintasKiiras() {
    $("h1").text('Igen, most rám kattintottál')
}

$('#esemenyGomb').click(function () {
    kattintasKiiras()
})

/* 2. FELADAT
Adj egy másik gombot is a weboldalhoz
Mikor a felhasználó rákattint a második gombra, 
változtasd meg az első gomb feliratát
*/

function kattintasKiiras2() {
    $("#esemenyGomb2").text('Most meg ide kattintottál')
}

$('#esemenyGomb2').click(function () {
    kattintasKiiras2()
})

/* 3. FELADAT
Adj egy harmadik gombot a weboldalhoz
Mikor a felhasználó rákattint erre a gombra, 
változtasd meg mindhárom gomb háttérszínét
*/

function szinValtoztatas() {
    $("#esemenyGomb").css('background-color', 'lightgreen') ;
    $("#esemenyGomb2").css('background-color', 'lightblue') ;
    $("#esemenyGomb3").css('background-color', 'orange') ;

    $(".gomb").text('Most meg átszínezted a gombok hátterét')
    
}

$('#esemenyGomb3').click(function () {
    szinValtoztatas()
})

/* 
B. FUNKCIÓK ESEMÉNYFIGYELŐKHÖZ
1. FELADAT

Adj egy beviteli mezőt az előző weboldaladhoz!
Az elem alapértelmezett (default) értéke legyen “blue”
Mikor a felhasználó rákattint az utolsó gombra:
    a beviteli mező értéke legyen kiolvasva,
    a gomb háttérszíne (background-color) legyen megváltoztatva a megadott színre!
Próbáld ki, működik-e különböző színekkel!

*/
// érték kiolvasása az input mezőből
szovegADobozban = $("#inputBox").val();

// érték kiírása egy h3 elembe, ellenőrzésképpen
function inputSzovegKiiras() {
    console.log($("h3").text(szovegADobozban))
    
}

inputSzovegKiiras()

$('#esemenyGomb3').click(function () {
    szovegADobozban = $("#inputBox").val();
    $("#esemenyGomb3").css('background-color', szovegADobozban) ;
    $("#esemenyGomb3").css('color', "white") ;

    $("#esemenyGomb3").text('Most meg kék lett a háttér, fehér betűkkel')

})

/*2. FELADAT - SZORGALMI
Most, hogy a gomb színe megváltozik, bármikor, 
mikor új szín kerül az input mezőbe,
    Változtasd meg a gomb működését, 
        hogy az első változtatás után ne lehessen rákattintani!
    Így legfeljebb csak egyszer változtathatjuk meg a gomb színét.
*/

