var vyska = 1.77; // zde je natvrdo zadaná výška 177cm, pro změnu výstupu budeme muset změnit 1.77 na jinou hodnotu (např. 1.99 atd.)
var hmotnost = 80; // zde je zadaná na tvrdo hmotnost 80 kg, platí to stejné se změnou jako výše

var vypocet = (hmotnost / (vyska ** 2)); // zde se vypočítá BMI podle jeho vzorce
console.log(vypocet); // zde se vypíše číslo BMI v hranici zhruba 15 - 32, více či méně by to být nemělo nebo ne o moc

// v tomto případě to vypíše "25.53544639152223" což je podle BMI tabulky nadváha

// pozn. k tomuto kódu se ještě vrátíme a budeme ho používat ve větvení a ještě později.
