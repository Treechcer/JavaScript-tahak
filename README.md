# Tahák na JavaScript

## Úvod

Toto je textové vysvětlení programovacího jazyka JavaScript, často zkracovaný jenom na JS. JS je primárně určen na webovové stránky a webové aplikace.

# Základy

## Výpis do konzole

```js
console.log("Ahoj Světe!");
```

Tento příkaz (funkce / metoda ale k nim později) vypíše do konzole prohlížeče „Ahoj Světe!“ - bez těch uvozovek. To protože příkaz "console.log()" vypíše všechno v uvozovkách. 

**pozn. každý příkaz v JS by měl mít na konci řádku ; ale nemusí, výjimky později*

## Komentáře

Komentář je část v kódu, která může obsahovat cokoliv, jak slova tak i části kódu. Komentáře slouží napsaní poznámky pro ostatní nebo sebe v budoucnosti, také je lze použít k odstraněné kódu kde je chyba aby se nespustil. 

Komentáře se píšou takto:
```js
// toto je jedno řádkový komentář

/*
toto je
komentář na
více čádků
*/
```

**pozn. více řádkové komentáře začínají /\* a končí \*/*

## Proměnné

```js
var x = 5; // celé číslo (int)
var t = 5.555; // desetinné číslo (float)
var slovo = "Ahoj Světe!"; // text (string)
var pravda = true; // boolean
```

V JS je hodně datových typů, např. celé číslo (int), číslo s desetinnou čárkou (float), znaky (string) a boolova hodnota (hodnota obsahující pouze pravdu **true** nebo nepravdu **false**). Všechny tyto hodnoty nemusí být nějak speciálně vyznačené až na string, text má vždy uvozovky, je jedno jaké (", ', \` ) dokud je stejnými ukončím, text může obsahovat jak znaky (A,b,C,d,e,f..) tak i čísla (0,1,2..) a lze provádět s nimi aritmetické operace pokud obsahují pouze čísla protože se automaticky převedou na čísla. Každá proměnná v JS se vytváří (deklaruje) se slovem "var", "let" nebo "const". Rozdíl mezi var a let není pro začátečníky důležitý ale oboje založí proměnnou, která se dá použít a je automaticky (dynamicky) daný datový typ. Const je konstata, také se automaticky (dynamicky) vybere datový typ, konstatny nelze měnit, po založení nejde upravit, předělat apod.

**pozn.0 JS obsahuje více datových typů ale ostatní nejsou v tuto chvíli důležité*

**pozn.1 \` (alt gr + ý / alt gr + 7) má i speciální vlastnosti není úplně stejný jako ostatní ale nemělo by prohození uvozovek z \` na " nebo naopak rozbít kód*

**pozn.1 boolenovy hodnoty je název pro hodnoty nabývající 1 nebo 0 nebo můžou také být dané (což je častější v programování) jako true nebo false*


## Aritmetické operace

Aritmetické operace lze používat s čísli ale stejné znaky (operátory) můžou dělat i jiné věci než jen aritmetické operace ale to v další kapitole.

```js
var x = 5 + 10; // x = 15
var y = 7;
var z = x + y; // 22
var t = 5 * 2; // 10
var u = 10 / 2; // 5
var mocnina = 2 ** 3; // 8
var odmocnina = 4 ** 0.5; // 2
var modulo = 10 % 3; // 1
```

\+ plus

\- mínus

\* násobení

\/ dělení

\** mocnina a odmocnina (podle druhého čísla)

\% zbytek po dělení (modulo)

### Speciální využití arimetický operátorů

```js
var str1 = "Ahoj ";
var str2 = "Světe!";
console.log(str1 + str2); // výstup:Ahoj Světe!
```

Plus (+) lze použít i na spojení (concatinade) stringů

```js
var x = 1;
x++;
++x;
```

Dvě plus (++) před nebo za proměnnou obsahující čísla ji inkrementuje, podle pozice je chvíle kdy se to stane.

**Vysvětlení:*
```js
let x = 5;
let y = ++x;
console.log(x); // 6
console.log(y); // 6
```

```js
let x = 5;
let y = x++; 
console.log(x); // 6
console.log(y); // 5
```

Tady lze vidět rozdíl a to ten kdy se proměnná (v tomto případě x) zvětší. Před x se to splní jako první věc, lze si to představit jako násobení v matematice že se to udělá první a za x se to provede po všech operací, lze si to představit jako sčítání v matematice.

**pozn. to stejné funguje s mínusem (x--, --x)*

++ inkrementace

-- dekrementace

## Další zápis inkrementace 

```js
var x = 1;
x++; // 2
x += 1; // 3 .. x = x + 1
```

Kombinovaný zápis (+=) je možné využít na inkrementaci o jakékoliv číslo.

**pozn. kombinovaný zápis má i varianty: -=, *=, /=. Vždy to je jako: "x = x + n" kdy n je jakékoliv číslo, tento zápis platí pro všechny operace jen s tím že se oeprace mění.*

# Větvení

Větvení je základní a velice důležitá věc v programování, dovoluje nám aby náš program se mohl rozhodovat. Vždy když podmínka je pravda (true - boolenské hodnoty) tak se udělá všechen kód co je v bloku kódu pod rozhodnutím.

```js
if (podminka){
    udelatNeco()
}
else if (podminka2){
    udelatNecoJineho()
}
else{
    udelatNecoDalsiho()
}
```

Tady je jednoduché schéma jak zapisovat větvení.

## Podmínky

Podmínky obsahují porovnávání, lze použít tyto v JS:

== - rovnost s převodem datového typu (vysvětlení později) 

=== - rovnost bez převodu datového typu 

!= - nerovnost s převodu datového typu 

!== - nerovnost bet převodu datového typu 

\>= - levá strana je větší nebo rovna pravé straně 

\> - pravá strana je větší levé straně (když obě budou stejné výsledek je false) 

\<= - levá strana je větší nebo rovna jak pravá 

\< - levá strana je větší jak pravá 


**pozn. jedno rovná se (=) je znak pro přiřazení ne pro porovnávání a v podmínce vyvolá chybu.*


**vysvětlení:*

```js
console.log(5 == "5") // vypíše true
cosnole.log(5 === "5") // vypíše false
```

**pozn. lze vypsat výsledek podmíněk, vždy výsledek je boolenská hodnota a proto jenom true nebo false*

### Kombinace podmínek

Podmínky kombinovat pomocí && (alt gr + c) a || (alt gr + w). && je logická funkce AND (a), která je pravda pokud oba jsou vstupy jsou pravda. || je logická funkce OR (nebo), která funguje když je aspoň jedna pravda. 


### Pravdivostní tabulka AND:

AND
| A   | B   | Y   |
| --- | --- | --- |
| 0   | 0   | 0   |
| 0   | 1   | 0   |
| 1   | 0   | 0   |
| 1   | 1   | 1   |

Y = A * B

1 = true

0 = false


### Pravdivostní tabulka OR:



OR
| A   | B   | Y   |
| --- | --- | --- |
| 0   | 0   | 0   |
| 0   | 1   | 1   |
| 1   | 0   | 1   |
| 1   | 1   | 1   |

Y = A + B

V JS kódu v podmínkách se používá:
```js
//AND
if(true && false){ // vždy to bude lež protože 1 * 0 = 0 (false), lze tam dát i porovnávání, např. "x < 3 && y > 7"
    neco()
}

//OR
if (true || false){ // vždy bude pravda protože 1 + 0 = 1 (pravda), lze tam také dát i porovnávaní jako u AND

}
```

**pozn. lze kombinovat && a || i v jednom výrazu*

**pozn.0 použití jednoho znaku (&, |) je zcela něco jiného, dvě znamenají logický AND / OR ale jedno znamená bitový AND / OR*

**vysvětlení pozn.0*
```js
let a = 10;  // 1010 (binárně)
let b = 8;   // 1000 (binárně)

let vysledek = a & b;

/*
1010
1000
----
1000

vysledek bude 8
*/

```

## Funkce

S funkcemi jsme se setkali už na začátku s funkcí "console.log()" (pro upřesnění, console.log() je metoda ale s jejím využít je jako funkce). Funkce je část kódu, která se dá znovu zavolat pomocí jejího jména a pokud přijímá nějaké parametry tak s parametry. Funkce dokud nebudu zavolaná nic neudělá, bude jenom "přehlédnuta počítačem" dokud ji nezavoláme.

```js
function nazev(){ //vytvoření funkce bez parametrů

}

function nazev2(parametr, paramentr0, .. ,parametrN){ //vytvoření funkce s parametry, může jich tam být kolik chcememe, 1 až N

}

function nazev3(param){ // funkce s názvem "nazev3" co přijímá jeden parametr
    param++; 
    return param //return je určen k vracení proměnných zpátky, nusí tam být pokud chceme proměnné zase použít protože kvůli rozsahu proměnné, k rozsahu v další kapitole
}

nazev() // zavolaní funkce nazev bez parametrů
nazev2(parametr, paramentr0, .. ,parametrN) // zavolaní funkce nazev2 s parametry
nazev3(5) // vrátí 6

var x = 4;
nazev3(x) //vrátí 5

```

**pozn. nelze opakovat jména funkcí, jméno je možné mít pouze jedno*

## Rozsah

Rozsah je lokální (lze použít proměnnou pouze v té funkci) a globální (lze proměnnou použít všude) nebo se také dá rozlišit jako blokový (proměnná je pouze použitelná v bloku založení) a funkční (proměnná je pouze použitelná ve funkci založení). Tady jde vidět rozdíl mezi var a let, var je založení proměnné v rozsahu na funkci přičemž lez je v rozsahu pro kód bloku.

**pozn. kód bloku začíná vždy s { a končí vždy s }*
**pozn.0 const má stejný rozsah jako let*

```js
function tVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // funguje protože x je v rozshu na funkci
}

function tLet() {
    if (true) {
        let y = 20;
    }
    console.log(y);  // nefunguje protože y je v rozshu na kód bloku založení
}

tVar();
tLet();
```

