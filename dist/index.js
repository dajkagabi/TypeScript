"use strict";
//CONSOLE
console.log("Hello TypeScript!");
//STRING, NUMBER,
let message = 'Hello';
let age = 22;
console.log(message, age);
//LOGIKAI
let Person = false;
console.log(Person);
//TÖMB
let number = [1, 2, 45, 27, 35, 40];
let names = ["Alice", "Bob", "Charlie", "Jessia"];
console.log(names, number);
let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits);
let ids = [1, 2, 0,];
console.log(ids);
//INDEX
let Fruits = ["Orange", "Pear", "Lemon", "Cherry", "Peach"];
console.log(Fruits[0]);
console.log(Fruits[1]);
console.log(Fruits[4]);
//forEach
let num = [5, 78, 15, 22, 99];
num.forEach(function (value) {
    console.log(value);
});
//MAP
let gyumolcsok = ["körte", "szőlő", "citrom", "cseresznye", "görögdinnye", "sárgadinnye", "sárgabarack", "ribizli", "eper"];
let gyumocshossz = gyumolcsok.map((gyumolcsok) => gyumolcsok.length);
console.log(gyumocshossz);
//OBJEKTUM
let fruit = { name: "Apple", };
console.log(fruit);
//Köszöntő függvény
function greet(name) {
    console.log("Szia " + name + "!");
}
greet("Gabriella");
//Összeadó függvény
function add(a, b) {
    return a + b;
}
let result = add(5, 5);
console.log("A végeredmény: " + result);
//Osztály
class Autok {
    constructor(marka, nev, ev) {
        this.marka = marka;
        this.nev = nev;
        this.ev = ev;
    }
    kiiratas() {
        console.log("Márka: " + this.marka + ", Név: " + this.nev + ", Év: " + this.ev);
    }
}
let auto1 = new Autok("Toyota", "Corolla", 2020);
let auto2 = new Autok("Ford", "Mustand", 2018);
let autok3 = new Autok("Tesla", "Model S", 2021);
auto1.kiiratas();
auto2.kiiratas();
autok3.kiiratas();
//Vezérlők
//For 
let vegetables = ["Tomato", "Cucumber", "Lettuce"];
for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}
//If else
function korellenorzes(kor) {
    if (kor >= 18) {
        return "A korod megfelelő";
    }
    else {
        return "Még fiatal vagy!";
    }
}
//Switch
let day = 4;
switch (day) {
    case 0:
        console.log("Vasárnap");
        break;
    case 1:
        console.log("Hétfő");
        break;
    case 2:
        console.log("Kedd");
        break;
    case 3:
        console.log("Szerda");
        break;
    case 4:
        console.log("Csütörtök");
        break;
    case 5:
        console.log("Péntek");
        break;
    case 6:
        console.log("Szombat");
        break;
    default:
        console.log("A hét újra kezdődik.");
}
//For In
let list = [88, 44, 11, 33];
for (let i in list) {
    console.log(i);
}
//While
let szamolas = 0;
while (szamolas < 5) {
    console.log(`Számol: ${szamolas}`);
    szamolas++;
}
//Do-While
var n = 6;
do {
    console.log(n);
    n--;
} while (n >= 0);
//Try-catch
try {
    let x = 15;
    let y = 5;
    let result = x / y;
    console.log("Az eredmény: ", result);
}
catch (error) {
    console.log("Hiba történt: ", error);
}
//# sourceMappingURL=index.js.map