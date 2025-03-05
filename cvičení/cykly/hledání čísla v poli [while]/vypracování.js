function hledaniCisla(seznam, hledaneCislo){ //založení funkce, která přijímá pole a hledané číslo (budeme předpokládat že to vždy je pole a číslo)
    let najito = false; // musíme vytvořit proměnnou, která nám bude sledovat, jestli jsme to už našli
    let i = 0; // musíme si vytvořit proměnnou, nějaké číslo pro index, protože to děláme pomocí while cyklu
    while (!najito){ //tady máme cyklus, který bude iterovat (procházet), dokud je proměnná najito false, až bude true přestane (protože jí negujeme)
        if (seznam[i] == hledaneCislo){ // tady kontrolujeme, jestli to číslo na pozici i je to, které hledáme, pokud ano obrátíme (negujeme) proměnnou najito
            najito = !najito // obrácení (negace) hodnoty najito
        }
        else if(i > seznam.length){ // tady kontrolujeme, jestli už je i větší než délka seznamu, protože jestli je víme že už tam to číslo být nemůže
            break; // break přeruší cyklus, i kdyby podmínka byla stále true (pravda), protože zde používáme pouze break, mohla by to být podmínka cyklu a fungovalo by to stejně
        }
        else{ // a pokud jsme neprošli celý cyklus a také jsme zjtisitli že i ještě není větší než délka seznamu tak ho zvětšíme abychom mohli jít znovu a posunout se o jeden index
            i++; // inkrementace (zvětšení) proměnné i o jedna
        }
    }

    if (najito){ // tady to vrátí index (pozici) toho čísla pokud jsme číslo našli
        return i;
    }
    else{ // tady se vrátí false, pokud jsme číslo nenašli
        return false;
    }
}

console.log(hledaniCisla([0,1,2,3,4,5,6,7,8,9,10], 10)); //výstup 10 (protože 10 je na indexu / pozici 10)
console.log(hledaniCisla([0,1,2,3,4,5,6,7,8,9,10], 25)); //výstup false, protože tam 25 není