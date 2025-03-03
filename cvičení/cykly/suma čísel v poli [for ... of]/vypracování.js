function sumSeznam(seznam){ // funkce co přijímá poole, budeme vždy počítat s tím že je to pole plné čísel
    let sum = 0; // založíme proměnnou, která bude počítat kolik tam pro zatím bylo v poli, musíme ji založit jako 0 protože zatím jsme nic nepočítali
    for (i of seznam){ // uděláme cyklus co projde celé pole kvůli této syntaxe "for ... of" která uloží prvek do proměnné i (projde od indexu 0 do posledního)
        sum += i; // přidá to k proměnné sum to co i, což je nějaké číslo v tom poli
    }

    return sum; //vrátí výsledek
}

console.log(sumSeznam([0,1,5,4,8,1])); //vypíše, teď ot vypíše 19