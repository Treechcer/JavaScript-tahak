function hledaniCisla(seznam, hledaneCislo){ //založení funkce co přijímá pole a hledané čislo (budeme předpokládat že to vždy je pole a číslo)
    let najito = false; // musíme udělat proměnnou, která nám bude sledovat jestli jsme to už našli
    let i = 0; // musíme si založit nějaké číslo pro index, protože to děláme s while cyklem
    while (!najito){ //tady máme cyklus, který bude interovat (procházet) dokud je proměnná najito false, až bude true přestane (protože jí negujeme)
        if (seznam[i] == hledaneCislo){ // tady kontrolujeme jestli to číslo na pozici i je to, které hledáme, když ano obrátíme (negujeme) proměnnou najito
            najito = !najito // obrácení (negace) proměnné najito
        }
        else if(i > seznam.length){ // tady kontrolujeme jestli už je i větší jak délka seznamu, protože jestli je víme že už tam to číslo být nemůže
            break; // break dělá to že přeruší cyklus i kydby podmínka byla stále true / pravda, protože my tady děláme jnom break mohla by to být podmínka cyklu a fungovalo by to stejně
        }
        else{ // a když jsme neprošli celý cyklus a také jsme zjisitli že i jetě není větší jak délka seznamu tak ho zvětšíme aby jsme mohli jít znovu a posunout se o jeden index
            i++; // inkrementace (zvětšní) proměnné i o jedna
        }
    }

    if (najito){ // tady to vrátí index (pozici) toho čísla pokud jsme číslo našli
        return i;
    }
    else{ // tady se vrátí false pokud jsme číslo nenašli
        return false;
    }
}

console.log(hledaniCisla([0,1,2,3,4,5,6,7,8,9,10], 10)); //výstup 10 (protože 10 jke na indexu / pozici 10)
console.log(hledaniCisla([0,1,2,3,4,5,6,7,8,9,10], 25)); //výstup false protože tam 25 není