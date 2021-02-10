console.log('My name is Ago.');

/* 1/1. feladat
Hozz létre egy ciklust, ami kiírja a számokat 0-tól 9-ig
*/

for (let index = 0; index < 10; index++) {
    console.log(index);
}

// Ciklusok
/* 1/2. feladat
Módosítsd az előző ciklust, hogy 1-től 10-ig írja ki a számokat.
*/
for (let index = 1; index <= 10; index++) {
    console.log(index);
}

/* 1/3. feladat
Írd ki a 0 és 20 közötti páros számokat (zárt intervallum).
*/
for (let index = 0; index < 22; index = index + 2) {
    console.log(index);
}


// Függvények
/* 2/1. feladat
Használd az imént megismert for ciklust (for loop), 
és hozz létre egy függvényt, ami kiírja az első N számot!

printNumbersTill(20); // kimenet: 1, 2, ...., 20
printNumbersTill(15); // kimenet: 1, 2, ...., 15
*/

function printNumbersTill(number) {
    for (let index = 0; index < number+1; index++) {
        console.log(index)
    }
}

printNumbersTill(10)

/* 2/2. feladat
Hozz létre egy függvényt, ami egy nevet kap paraméterként, 
majd visszatér egy személyes üdvözléssel!

getGreetingTo('Mark');              // kimenet: semmi
console.log(getGreetingTo('Mark')); // kimenet: 'Hello Mark!'
*/

function getGreetingTo(name) {
    udvozles = ("Hello " + name + '!')
    return udvozles
}

console.log(getGreetingTo('Mark'))

// For ciklusok és tömbök
/* 3/1. feladat
Hozz létre egy függvényt, ami egy tömböt kap paraméterként, 
majd sorban kiírja minden elemét!*/

let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  };

printValues([0, 3, 6, 7, 9])


/* 3/2. feladat
Módosítsd a korábbi printValues függvényed, 
hogy for ciklus helyett forEach ciklust használjon!*/

let myArray = [10, 13, 16, 17, 19]

myArray.forEach((numbers2) =>
    {
      console.log(numbers2);
    });