# Tahák na JavaScript

## Úvod

Toto je textové vysvětlení programovacího jazyka JavaScript, často zkracovaný jenom na JS. JS je primárně určen na webovové stránky a webové aplikace.

# Základy

## Výpis do konzole

```js
console.log("Ahoj Světe!");
```

Tento příkaz (funkce ale k nim později) vypíše do konzole prohlížeče „Ahoj Světe!“ - bez těch uvozovek. To protože příkaz "console.log()" vypíše všechno v uvozovkách. 

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

**pozn. více řádkové komentáře začínají /\* a konří \*/*

## Proměnné

```js
var x = 5; // celé číslo (int)
var t = 5.555; // desetinné číslo (float)
var slovo = "Ahoj Světe!"; // text (string)
var pravda = true; // boolean
```

V JS je hodně datových typů, např. celé číslo (int), číslo s desetinnou čárkou (float), znaky (string) a boolova hodnota (hodnota obsahující pouze pravdu **true** nebo nepravdu **false**). Všechny tyto hodnoty nemusí být nějak speciálně vyznačené až na string, text má vždy uvozovky, je jedno jaké (", ', \` ) dokud je stejnými ukončím, text může obsahovat jak znaky (A,b,C,d,e,f..) tak i čísla (0,1,2..) a lze provádět s nimi aritmetické operace pokud obsahují pouze čísla protože se automaticky převedou na čísla. 

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
