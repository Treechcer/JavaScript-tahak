var pi = 1 // musíme začíná na jedné protože řada žácíná 1-1/3..
isPlus = false // začínáme na flade protože nechceme sčítat jako první 

for (let i = 3; i <= 10000; i+=2){ // tady jdeme od 3 (první číslo v řadě po 1) do 10000 (může to být jakkoliv jiné číslo jen čím je menší tím má i menší přesnost)
    if (isPlus){ // pokud isPlus je true tak budeme sčítat 
        pi += 1/i //protože sčítáme zlomek 1/n potřebujeme ho tady sčíst
    }
    else{ // v tuto chvíli víme že isPkus musí být falše s proto budeme odečítat 
        pi -= 1/i //protože odčítáme zlomek 1/n potřebujeme ho tady odečíst 
    }
    isPlus = !isPlus //obrácení polarity isPlus (true na false a false na true)
}

console.log(4 * pi) // protože jsme vypočítali 1/4 π tak to musíme vynásobit 4 abychom došli na celý odhad π