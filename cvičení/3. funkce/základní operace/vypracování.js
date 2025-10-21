function Secteni(a,b){ // přijimámé proměnné a, b ale nekontrolujeme jestli jsou čísla, což je složitejší, takže předpokládáme že je to vždy číslo
  let vysledek = a + b; // založíme proměnnou vysledek tak aby nebyl globální (let) a sečteme a i b
  return vysledek;
}

function Odecteni(a,b){
  let vysledek = a - b; // založíme proměnnou vysledek tak aby nebyl globální (let) a odečteme b od a
  return vysledek;
}

function Nasobeni(a,b){ 
  let vysledek = a * b; // založíme proměnnou vysledek tak aby nebyl globální (let) a vynásobíme a i b mezi sebou
  return vysledek;
}

function Deleni(a,b){
  if (b != 0){ // protože nejde dělit nulou tak musíme toto ošetřit, proto kontrolujeme jestli b NENÍ nula, jestli je vrátíme 0
    let vysledek = a / b;
    return vysledek;
  }
  return 0;
}

var x = Secteni(2,3);
console.log(x); // vypíše 5

console.log(Odecteni(5,3)); // vypíše 2

console.log(Nasobeni(2,6)); // vypíše 12

console.log(Deleni(6,2)) // vypíše 3

console.log(Deleni(5,0)) // vypíše 0 neboli že to není možné (bylo by možné nastavit i jiné věci jako výstup, např. string s tím že to není možné)
