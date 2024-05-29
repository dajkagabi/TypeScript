//CONSOLE
console.log("Hello TypeScript!");
//STRING, NUMBER,
let message: string = 'Hello';
let age: number = 22;
console.log(message, age);
//LOGIKAI
let Person: boolean = false;
console.log(Person);

//TÖMB
let number: number[] = [1, 2, 45, 27, 35, 40];
let names: string[] = ["Alice", "Bob", "Charlie", "Jessia"];
console.log(names, number);

let fruits: Array<string> = ["Apple", "Orange", "Banana"];
console.log(fruits);

let ids: Array<Number> = [1, 2, 0,];
console.log(ids);

//INDEX
let Fruits: string[] = ["Orange", "Pear", "Lemon", "Cherry", "Peach"];
console.log(Fruits[0]);
console.log(Fruits[1]);
console.log(Fruits[4]);

//forEach
let num = [5, 78, 15, 22, 99];
num.forEach(function (value) {
    console.log(value);
});



//MAP
let gyumolcsok: string[] = ["körte", "szőlő", "citrom", "cseresznye", "görögdinnye", "sárgadinnye", "sárgabarack", "ribizli", "eper"];
let gyumocshossz = gyumolcsok.map((gyumolcsok) => gyumolcsok.length);
console.log(gyumocshossz);



//OBJEKTUM
let fruit: { name: string, } = { name: "Apple", };
console.log(fruit);

//Köszöntő függvény
function greet(name: string): void {
    console.log("Szia " + name + "!");
}
greet("Gabriella");

//Összeadó függvény
function add(a: number, b: number): number {
    return a + b;
}
let result: number = add(5, 5);
console.log("A végeredmény: " + result);

//Osztály
class Autok {
    marka: string;
    nev: string;
    ev: number;

    constructor(marka: string, nev: string, ev: number) {
        this.marka = marka;
        this.nev = nev;
        this.ev = ev;
    }

    kiiratas(): void {
        console.log("Márka: " + this.marka + ", Név: " + this.nev + ", Év: " + this.ev);
    }
}

let auto1: Autok = new Autok("Toyota", "Corolla", 2020);
let auto2: Autok = new Autok("Ford", "Mustand", 2018);
let autok3: Autok = new Autok("Tesla", "Model S", 2021);
auto1.kiiratas();
auto2.kiiratas();
autok3.kiiratas();

//Vezérlők

//For 
let vegetables: string[] = ["Tomato", "Cucumber", "Lettuce"];
for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}

//If else
function korellenorzes(kor: number): string {
    if (kor >= 18) {
        return "A korod megfelelő";
    } else {
        return "Még fiatal vagy!";
    }
}


//Switch
let day: number = 4;

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
for (let i in list){
    console.log(i);
}

//While
let szamolas : number = 0;
while (szamolas < 5) {
    console.log(`Számol: ${szamolas}`);
    szamolas++;
}

//Do-While
var n:number = 6;
do {
    console.log(n);
    n--;
}while(n>=0);


//Try-catch
try {
    let x:number = 15;
    let y:number = 5;
    let result:number = x/y;
    console.log("Az eredmény: ", result);
} catch (error) {
    console.log("Hiba történt: ", error);
}
