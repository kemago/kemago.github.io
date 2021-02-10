console.log('My name is Ago.');

for (let index = 0; index < 10; index++) {
    console.log(index);
}

for (let index = 1; index <= 10; index++) {
    console.log(index);
}

for (let index = 0; index < 22; index = index + 2) {
    console.log(index);
}

//1. feladat

function printNumbersTill(number) {
    for (let index = 0; index < number+1; index++) {
        console.log(index)
    }
}

printNumbersTill(10)

//2. feladat

function getGreetingTo(name) {
    udvozles = ("Hello " + name + '!')
    return udvozles
}

console.log(getGreetingTo('Mark'))

