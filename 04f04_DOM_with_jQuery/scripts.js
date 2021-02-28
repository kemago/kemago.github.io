/* Feladatok
1. feladat
Hozz létre egy tömböt, ami tartalmazza a saját neved, 
valamint azon kívül néhány másik nevet is
*/

names = ['Ago', 'Ami', 'Bali', 'Peti', 'Réka', 'Bálint']

/* 2. feladat
A forEach ciklus használatával 
add hozzá a neveket egy listához (<ul>)
 */

function egyElemKiiras(listItem) {
    $( '.myList' ).append( ´<li>´${names}</li>' );
    $( '.myList div: last-of-type' ).css('font-weight', 'bold')
} 

names.forEach(egyElemKiiras);

// azt nem értem, hogy miért a tömbváltozó nevét írja ki...
// most már tudom, az a fránya 3. fajta idézőjel kell

/* 3. feladat 
Hozd létre a következő objektumot:
let additionalBlock = {
  title: "Beillesztve JavaScripttel",
  text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
};

*/

let additionalBlock = {
  title: "Beillesztve JavaScripttel",
  text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
};

/* 4. feladat 
Adj új tartalmat az oldal végéhez: 
a title legyen egy fejlécben (pl. <h1>), 
a text pedig egy bekezdésben (<p>)};
*/

$('body').append(
    <h1>${additionalBlock}.title</h1>´´
  );

$('body').append(
    '<p>additionalBlock.text</p>'
);