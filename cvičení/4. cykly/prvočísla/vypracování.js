function prvoCislo(n){
    for (let i = 1; i <= n; i++){ // musíme projít všechna čísla od 1 do n (večetně n)
        var jePrvoCislo = true; // musíme si vytvořit hodnotu, která nám bude kontrolovat, jestli vůbec je to prvočíslo. Tuto hodnotu musíme na začátku "resetovat"... Prvně počítáme, že číslo je prvočíslo, protože my tady v cyklu budem kontrolovat jestli není.

        for (let j = 2; j < i; j++){ // musíme projít všechny dělitele, tedy čísla od 2 do i-1 (od dvou do i-1 protože kdyby tam bylo i nebo 1, vždy to vyhodnotí číslo jako neprvočíslo)
            if (i % j == 0){ //zde kontrolujeme, jestli i je dělitelné číslem j beze zbyteku
                jePrvoCislo = false; // pokud je dělitelné, změníme, že to není prvočíslo, protože už má aspoň jednoho dělitele
                break; // můžeme ukončit cyklus, protože už není potřeba ho projíždět dál, protože víme, že výsledek už nezměníme
            }
        }

        if (jePrvoCislo){ //když číslo je prvošílo, vypíšeme ho
            console.log(i + " je prvočíslo")
        }
    }
}

prvoCislo(1000); //vypíše prvočísla od 1 do zadaného čísla (v tomto případě 1000)