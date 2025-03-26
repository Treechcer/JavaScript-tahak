# Tahák na JavaScript

## udělat (to-do list)

- [x] základy
- [x] větvení
- [x] funkce
- [x] cykly
- [x] DOM (Document Object Model)
- [ ] RegEx (regulární exprese)
- [x] vysvětlení OOP
- [x] základy OOP
- [ ] pokročilejší OOP
- [ ] mít příklady ke všemu
- [ ] a více
  
## Obsah

- [Tahák na JavaScript](#tahák-na-javascript)
  - [udělat (to-do list)](#udělat-to-do-list)
  - [Obsah](#obsah)
  - [Úvod](#úvod)
- [Základy](#základy)
  - [Výpis do konzole](#výpis-do-konzole)
  - [Komentáře](#komentáře)
  - [Proměnné](#proměnné)
  - [Aritmetické operace](#aritmetické-operace)
    - [Speciální využití aritmetický operátorů](#speciální-využití-aritmetický-operátorů)
  - [Další zápis inkrementace](#další-zápis-inkrementace)
- [Větvení](#větvení)
  - [Podmínky](#podmínky)
    - [Kombinace podmínek](#kombinace-podmínek)
    - [Pravdivostní tabulka AND:](#pravdivostní-tabulka-and)
    - [Pravdivostní tabulka OR:](#pravdivostní-tabulka-or)
  - [Binární součet (OR), binární součin (AND) a binární negace](#binární-součet-or-binární-součin-and-a-binární-negace)
    - [Logická funkce XOR](#logická-funkce-xor)
    - [Negované logické funkce](#negované-logické-funkce)
  - [Funkce](#funkce)
  - [Rozsah](#rozsah)
  - [Cykly](#cykly)
    - [Cyklus s určitým počtem opakování (for)](#cyklus-s-určitým-počtem-opakování-for)
    - [Cyklus s neurčeným počtem opakování (while)](#cyklus-s-neurčeným-počtem-opakování-while)
    - [Cyklus s podmínkou po každém opakování (do ... while)](#cyklus-s-podmínkou-po-každém-opakování-do--while)
    - [Cyklus na procházení vlastností objektu (for ... in)](#cyklus-na-procházení-vlastností-objektu-for--in)
    - [cyklus pro procházení hodnot v iterovatelných objektech (for ... of)](#cyklus-pro-procházení-hodnot-v-iterovatelných-objektech-for--of)
  - [Seznamy](#seznamy)
  - [Důležité metody a funkce](#důležité-metody-a-funkce)
    - [prompt()](#prompt)
    - [Number()](#number)
    - [parseInt() a parseFloat()](#parseint-a-parsefloat)
- [DOM (Document Object Model)](#dom-document-object-model)
- [Hledání prvků v DOM](#hledání-prvků-v-dom)
  - [Jedno selektorové metody](#jedno-selektorové-metody)
  - [více selektorové vyhledávání](#více-selektorové-vyhledávání)
    - ["#ID"](#id)
    - [".class"](#class)
    - ["tag"](#tag)
    - [parent child](#parent-child)
  - [rozdělování čárkou a nerozdělování rozdíl](#rozdělování-čárkou-a-nerozdělování-rozdíl)
  - [hledání prvků v dom](#hledání-prvků-v-dom-1)
    - [další metody](#další-metody)
  - [tabulka všech metod k shánění elementů z DOM](#tabulka-všech-metod-k-shánění-elementů-z-dom)
    - [query selektory](#query-selektory)
    - [getElementBy..()](#getelementby)
  - [Důležité metody pro interakci s DOM](#důležité-metody-pro-interakci-s-dom)
- [přidání interaktivity na stránku](#přidání-interaktivity-na-stránku)
  - [další vlastnosti](#další-vlastnosti)
- [OOP (Objektově Orientované Programování)](#oop-objektově-orientované-programování)
  - [Začátek OOP](#začátek-oop)

## Úvod

Toto je textové vysvětlení programovacího jazyka JavaScript, často zkracovaný jen na JS. JS je primárně určen na webové stránky a webové aplikace.

**pozn. jsou tady i příklady ke kapitolám ve složkách podle názvu kapitoly, k procvičení kde je zadání.txt, které obsahuje zadání a pro kontrolu, inspiraci atd. je tam pak i řešení v .HTML a .JS souborech, protože toto je založené převážně na JS tak HTML není stylované nijak pořádně ale JS kód by měl obsahovat i nějaké komentáře na vysvětlení kódu*

# Základy

## Výpis do konzole

```js
console.log("Ahoj Světe!");
```

Tento příkaz (funkce / metoda ale k nim později) vypíše do konzole prohlížeče „Ahoj Světe!“ - bez těch uvozovek. To proto, že příkaz "console.log()" vypíše všechno v uvozovkách, čísla apod. 

**pozn. každý příkaz v JS by měl mít na konci řádku středník (;) ale nemusí, výjimky později*

## Komentáře

Komentář je část v kódu, která může obsahovat cokoli, jak slova, tak i části kódu. Komentáře slouží k napsaní poznámky pro ostatní nebo pro sebe v budoucnosti, také je lze použít k dočasnému odstranění kódu, kde je chyba, aby se nespustil 

Komentáře se píšou takto:
```js
// toto je jedno řádkový komentář

/*
toto je
komentář na
více řádků
*/
```

**pozn. více řádkové komentáře začínají `/*` a končí `*/`*

## Proměnné

```js
let x = 5; // celé číslo (int)
let t = 5.555; // desetinné číslo
let slovo = "Ahoj Světe!"; // text (string)
let pravda = true; // boolean
```

V JS je mnoho datových typů, např. celé číslo (int), číslo s desetinnou čárkou (stále patří pod int - Number - ale budu je nazývat float kvůli zvyku z ostatních jazyků), znaky (string) a logická hodnota (boolean neboli hodnota obsahující pouze pravdu `true` nebo nepravdu `false`). Všechny tyto hodnoty nemusí být nijak speciálně označeny, až na string, text má vždy uvozovky, je jedno jaké (`"`, `'` a \` ) dokud je stejnými ukončím, text může obsahovat jak znaky (A,b,C,d,e,f..) tak i čísla (0,1,2..) a lze provádět s nimi aritmetické operace pokud obsahují pouze čísla protože se automaticky převedou na čísla (int nebo float, podle potřeby). Každá proměnná v JS se vytváří (deklaruje) se slovem `var`, `let` nebo `const`. Rozdíl mezi var a let není pro začátečníky důležitý ale oboje založí proměnnou, která se dá použít a je automaticky (dynamicky) daný datový typ, proměnné se můžou i v jejich životech změnit datový typ, může začít např. jako string a pak být int. `Const` je konstanta, konstanty nelze měnit, po založení nejde upravit, předělat apod.

**pozn. JS obsahuje více datových typů ale ostatní nejsou v tuto chvíli důležité*

**pozn.0 \` (alt gr + ý / alt gr + 7) má i speciální vlastnosti není úplně stejný jako ostatní ale nemělo by prohození uvozovek z \` na " nebo naopak rozbít kód*

**pozn.1 booleovy hodnoty je název pro hodnoty nabývající 1 nebo 0 nebo můžou také být dané (což je častější v programování) jako true nebo false*

**pozn.2 lepší je využívat let pro začátečníky než var*

## Aritmetické operace

Aritmetické operace lze používat s čísly ale stejné znaky (operátory) mohou dělat i jiné věci než jen aritmetické operace – to ale probereme v další kapitole.

```js
let x = 5 + 10; // x = 15
let y = 7;
let z = x + y; // 22
let t = 5 * 2; // 10
let u = 10 / 2; // 5
let mocnina = 2 ** 3; // 8, 2^3
let mocnina2 = 3 ** 2; // 9, 3^2
let odmocnina = 4 ** 0.5; // 2, 4^0.5
let modulo = 10 % 3; // 1
```

`+` plus

`-` mínus

`*` násobení

`/` dělení

`**` mocnina a odmocnina (podle druhého čísla)

`%` zbytek po dělení (modulo)

**pozn. odmocnina to je když použijeme 1/n kdy n je jakou chceme odmocninu*

### Speciální využití aritmetický operátorů

Plus (+) lze použít i na spojení (concatenate) stringů

```js
let str1 = "Ahoj ";
let str2 = "Světe!";
console.log(str1 + str2); // výstup:Ahoj Světe!

let str3 = "Ahoj";
let str4 = "Světe!";
console.log(str3 + str4); // výstup:AhojSvěte!
```

Dvě plus (++) před nebo za proměnnou obsahující čísla ji inkrementuje, podle pozice je chvíle kdy se to stane. Před proměnnou to udělá jako první za ní jako poslední.

```js
let x = 1;
x++;
++x;
```

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

Tady lze vidět rozdíl a to ten kdy se proměnná (v tomto případě x) zvětší. Před x se to splní jako první věc a za x se to provede po všech operací.

**pozn. to stejné funguje s mínusem (x--, --x)*

`++` inkrementace

`--` dekrementace

## Další zápis inkrementace 

```js
let x = 1;
//x++ == x += 1
x += 1; // 2 .. x = x + 1
```

Kombinovaný zápis (`+=`) je možné využít pro přičtení jakékoliv číslo k proměnné.

**pozn. kombinovaný zápis má i varianty: `-=`, `*=`, `/=`. Vždy to je jako `x = x + n` kdy n je jakékoliv číslo, tento zápis platí pro všechny operace jen s tím že se operace mění.*

# Větvení

Větvení je základní a velice důležitá věc v programování, dovoluje nám aby náš program se mohl rozhodovat. Vždy když podmínka je pravda (true - booleovská hodnoty) tak se
spustí kód v tom bloku kódu.

```js
if (podminka){
    udelatNeco()
}
else if (podminka2){
    udelatNecoJineho()
}
... // zde může být kolik potřebujete else if
else{
    udelatNecoDalsiho()
}
```

Tady je jednoduché schéma jak zapisovat větvení.

**pozn. `if` a `else if` se spouští když je pravdivý, spustí se první pravdivý, takže když je pevní podmínka pravdivá a třeba pátá, spustí se pouze ta první, `else` se spustí pokud žádný jiný nebyl pravdivý*

## Podmínky

Podmínky obsahují porovnávání, lze použít tyto v JS:

`==` - rovnost s převodem datového typu (vysvětlení později) 

`===` - rovnost bez převodu datového typu 

`!=` - nerovnost s převodu datového typu 

`!==` - nerovnost bez převodu datového typu 

`>=` - levá strana je větší nebo rovna pravé straně 

`>` - pravá strana je větší levé straně (když obě budou stejné výsledek je false) 

`<=` - levá strana je větší nebo rovna jak pravá 

`<` - levá strana je větší jak pravá 


**pozn.0 jedno rovná se (=) je znak pro přiřazení ne pro porovnávání. Udělá to chybu.*

**pozn.1 je lepší využívat `===` a `!==` v podmínkách než `==` a `!=` hlavně když nevíte rozdíl*


**vysvětlení:*

```js
console.log(5 == "5") // vypíše true protože to převede "5" na 5 a 5 a 5 je to stejné
console.log(5 === "5") // vypíše false protože to nepřevede "5" na 5 a "5" a 5 není to stejné
```

**pozn. lze vypsat výsledek podmínek, vždy výsledek je boolenská hodnota a proto jenom true nebo false*

### Kombinace podmínek

Podmínky můžeme kombinovat pomocí && (alt gr + c) a || (alt gr + w). && je logická funkce AND (a), která je pravda pokud oba jsou vstupy jsou pravda. || je logická funkce OR (nebo), která funguje když je aspoň jedna pravda ale i když oboje jsou pravda. 


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

**pozn. logická funkce AND se také nazývá logický součin*

### Pravdivostní tabulka OR:

OR
| A   | B   | Y   |
| --- | --- | --- |
| 0   | 0   | 0   |
| 0   | 1   | 1   |
| 1   | 0   | 1   |
| 1   | 1   | 1   |

Y = A + B

**pozn. logická funkce OR se také nazývá logický součet*

V JS kódu v podmínkách se používá:
```js
//AND
if(true && false){ // vždy to bude lež protože 1 * 0 = 0 (false), lze tam dát i porovnávání, např. "x < 3 && y > 7"
    neco()
}

//OR
if (true || false){ // vždy bude pravda protože 1 + 0 = 1 (pravda), lze tam také dát i porovnávaní jako u AND
    neco2()
}
```

**pozn. lze kombinovat && a || i v jednom výrazu*

**pozn.0 použití jednoho znaku (&, |) je zcela něco jiného, dvě znamenají logický AND / OR ale jedno znamená bitový AND / OR*

Booleanské hodnoty lze i negovat, negace je když změní jednu hodnotu na druhou (true na false a naopak). 

Not (!)
| A   | Y   |
| --- | --- |
| 0   | 1   |
| 1   | 0   |

```js
if (true){ // vždy bude pravda a vejde do větvení
    console.log("pravda");
}

if (!true){ // nikdy nebude pravda a nikdy to nevejde do větvení protože true se vždy neguje na false
    consol.log("pravda");
}

//negace lze využít i na proměnné obsahují boolovy výrazy (true, false)
```

## Binární součet (OR), binární součin (AND) a binární negace

BInární součet (|) a binární součin (&) a jak fungují.

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
let vysledek2 = a | b;
/*
1010
1000
----
1010
výsledek 2 je 10
*/

let a = 10;  // 1010 BIN
let vysledek = ~a;  // bitová negace, invertování (obrácení) bitů 

/*
  a = 10 (DEC) = 1010 (Bin)

  Bitová negace (invertování bitů):
    1010  (a = 10)
  změna na:
    0101  (negace bitů)

V dvoukomplementním zápisu se musí přidat ještě +1 aby to bylo správně negované. Takže výsledek v JS bude 0110 místo 0101, protože se přidalo + 0001.

JS používá "dvoukomplementní zápis" proto je výsledek záporné číslo. Vysvětlení dvoukomplementního zápisu níže.

Negace 1010 (BIN) je tedy -11 (DEC).


dvoukomplementní zápis je k zápisu čísel v binární formě, záporné číslo v této formě je nějaké číslo celé negovane a
+1 k tomu celému (musí být daný počet bitů). např.: 

(pro 4 bity)
5:
0101

negované:
1010 (10)
+1

1011 což je -5 v dvoukomonentovém zápisu, proto JS vyhodí obrácenou polaritu znaménka.
*/

console.log(vysledek);  // výsledek je -11
```

### Logická funkce XOR

XOR je logická funkce, která je pravdivá pouze a tehdy kdy je jenom jedna strana pravdivá. Je to pokročilejší logická funkce a dá se sestavit z jednoduchých logických funkcí (AND, OR a NOT (v tomto případě jen OR a AND)). Zapisuje se pomocí `^`.

XOR
| A   | B   | Y   |
| --- | --- | --- |
| 0   | 0   | 0   |
| 0   | 1   | 1   |
| 1   | 0   | 1   |
| 1   | 1   | 0   |

Y = (A * !B) + (!A * B)

```js
let a = true;
let b = false;

if ((a && ~b) || (~a && b)){ // půjde dale protože je to true

}

b = true

if ((a && ~b) || (~a && b)){ // neprojde, protože je to false

}
```

Také je i binární XOR.

```js
console.log(5 ^ 3); 

/*

5 DEC = 101 BIN
3 DEC = 011 BIN
----------------
        110 - 6 DEC
```

### Negované logické funkce

I logické lze negovat, zde je NAND.

NAND
| A   | B   | Y   |
| --- | --- | --- |
| 0   | 0   | 1   |
| 0   | 1   | 1   |
| 1   | 0   | 1   |
| 1   | 1   | 0   |

Y = !(A * B)

BIN NAND = `~(A & B)`

NAND je jako OR ale obrácený, ve smyslu toho že Y je otočený o "180°". Je to kvůli toho že když je ta funkce negována tak její Y bez negace před ní se počítá jako Y = `!A + !B`

**pozn. negace obrací znaménko, z + je * a naopak*

NOR
| A   | B   | Y   |
| --- | --- | --- |
| 0   | 0   | 1   |
| 0   | 1   | 0   |
| 1   | 0   | 0   |
| 1   | 1   | 0   |

Y = !(A + B) = !A * !B

BIN NOR = `~(A | B)`

XNOR
| A   | B   | Y   |
| --- | --- | --- |
| 0   | 0   | 1   |
| 0   | 1   | 0   |
| 1   | 0   | 0   |
| 1   | 1   | 1   |

Y = !((A * !B) + (!A * B))
Y = (!A + B) * (A + !B)

také je možný:

Y = (!A * !B) + (A * B)

**pozn. my jako programátoři si musíme udělat i XNOR protože XOR logická funkce v JS neexistuje, dá se udělat jako zápis Y*

## Funkce

S funkcemi jsme se setkali už na začátku s funkcí "console.log()" (pro upřesnění, console.log() je metoda ale v tomto případě to nevadí, metody jsou potom v OOP). Funkce je část kódu, která se dá znovu zavolat pomocí jejího jména a pokud přijímá nějaké parametry tak její název se doplní parametry v závorce, která je prázdná a musí tam být když tam nejsou parametry. Funkce dokud nebude zavolaná nic neudělá, bude jenom "přehlédnuta počítačem" dokud ji nezavoláme.

```js
function nazev(){ //vytvoření funkce bez parametrů

}

function nazev2(parametr, parametr0, .. ,parametrN){ //vytvoření funkce s parametry, může jich tam být kolik chceme, 1 až N

}

function nazev3(param){ // funkce s názvem "nazev3", která přijímá jeden parametr
    param++; 
    return param //return je určen k vracení proměnných zpátky, musí tam být pokud chceme proměnné zase použít protože kvůli
                 // rozsahu proměnné, k rozsahu v další kapitole
}

nazev() // zavolaní funkce nazev bez parametrů
nazev2(parametr, parametr0, .. ,parametrN) // zavolaní funkce nazev2 s parametry
nazev3(5) // vrátí 6, protože ve funkci se číslo inkrementuje (zvětší)
console.log(nazev3(1)) // vypíše 2
let vracenaHodnota = nazev3(10); // proměnná vracenaHodnota bude obsahovat 11
                                 // protože vrácena hodnota pomocí return se uloží do ní 

var x = 4;
nazev3(x) //vrátí 5

```

**pozn.0 nelze mít dvě funkce se stejným názvem ve stejném rozsahu (scope)*

**pozn.1 `return` neboli vrácení proměnných z funkcí je velice důležitá část programování, dobrá praktika programování je dělat funkce, které něco vrací a nebo mají vedlejší efekt, není dobré používat všechny hodnoty jako "globální" a měnit je všude (což je způsob programování s funkcemi jenom s vedlejším efektem) ale jen ve funkcích kde by měli mít přístup. Funkce s vedlejším efektem jsou funkce co nic nevrací ale změní něco na obrazovce nebo podobné věci (příklad takovéto funkce je console.log() ), tyto funkce jsou také důležité a není špatné takové funkce zakládat ale neměly by to být jediné funkce, jaké budeme dělat aby se kód dal lépe opravovat a abychom se vyhnuli chybnosti. Globální proměnné nejsou vždy špatné ale je dobré jich mít co nejméně a jen ty nejpodstatnější, protože hodně jich vede k neudržitelnosti kódu.*

## Rozsah

Rozsah je lokální (lze použít proměnnou pouze v té funkci) a globální (lze proměnnou použít všude) nebo se také dá rozlišit jako blokový (proměnná je pouze použitelná v bloku založení) a funkční (proměnná je pouze použitelná ve funkci založení). Tady jde vidět rozdíl mezi var a let, var je založení proměnné v rozsahu na funkci přičemž let je v rozsahu pro kód bloku.

**pozn. kód bloku začíná vždy s { a končí vždy s }*

**pozn.0 const má stejný rozsah jako let*

```js
function tVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // funguje protože x je v rozsahu na funkci
}

function tLet() {
    if (true) {
        let y = 20;
    }
    console.log(y);  // nefunguje protože y je v rozsahu na kód bloku založení
}

tVar();
tLet();
```

## Cykly

### Cyklus s určitým počtem opakování (for)

Cyklus s určitým počtem opakování je `for`, používáme ho vždycky když víme kolikrát potřebujeme iterací (opakování). 

```js
for (let i = 1; i <= 10; i++){
    console.log(i) // vypíše to čísla od 1 do 10
}

for (let i = 1; i < 10; i++){
    console.log(i) // vypíše to čísla od 1 do 9
}

for (let i = 10; i >= 1; i--){
    console.log(i) // vypíše to čísla od 10 do 1
}
```

**vysvětlení zápisu: první věc v závorce (např. `let i = 0;`) je část kódu co se spustí přesně jednou a to na začátku před cyklem a proměnnou založí (deklaruje) proměnnou `i` (nebo jinou proměnnou), která se bude rovnat tím za rovná se, tady by to byla `0`, druhá je podmínka (např. `i < 10;`), která se vyhodnocuje po každé iteraci (opakování) dokud výsledek není false, až je tak to skončí a třetí část (např `i++`) se vyhodnocuje po každé zkontrolování podmínky, nejčastěji tam je nějaká inkrementace.

**pozn. jedno z nejčastějších využití pro počítání indexu u polí / seznamů (v JS seznamů v jiných jazycích to můžou být správně pole ale v konverzaci je to celkem jedno a není úplně chyba říct oboje nebo opak).*jso

### Cyklus s neurčeným počtem opakování (while)

Cyklus s neurčeným počtem opakování (`while`) se vyhodnocuje před každou iterace (projití cyklu) a dokud je pravda (true) tak do té doby jede dále, s false končí. 

**pozn. cyklus s neurčitým počtem opakováním je často nazývám také cyklus s podmínkou před každým opakováním*

**pozn.0 lze udělat nekonečný cyklus, těm se snažíme vždy vyhnout (např. while(true) - nikdy nebude nepravda)*

```js
let i = 0
while (i < 10){
    console.log(i)
    i++
}

// zde je cyklus, který vypíše čísla od 0 do 9
```

**pozn.1 všechny `for` cykly se dají přepsat na `while` cykly ale ne všechny `while` jdou na `for`* 

### Cyklus s podmínkou po každém opakování (do ... while)

Tento cyklus (`do ... while`) se vždy spustí aspoň jednou a po prvním projití (iteraci) se zkontroluje podmínka a bude se opakovat dokud je podmínka true až je false přestane.

```js
let i = 0
do{
    console.log(i)
    i++
} while (i < 10)

// vypíše 0 až 9

let j = 10

do{
    console.log(j)
    j++
} while (j < -5)

//vypíše to 10 a cyklus skončí
```

### Cyklus na procházení vlastností objektu (for ... in)

K OOP (objektově orientované programování) a objektům se dostaneme později ale kdyby jsme chtěli vypsat vlastnosti a jejich hodnoty od nějakého objektu jedna z možností je využít Cyklus na procházení vlastností objektu (`for ... in`) cyklus.

```js
let obj = {jmeno: "Petr", vek: 25}
for (let keyValues in obj){
    console.log(keyValues, obj[keyValues])
}

/* výstup tohoto je název vlastnosti (jmeno, vek..) a jejich vlastnost v tomto objektu, takže výstup je:
jmeno Petr
vek 25
*/
```

**pozn. není důležité ještě chápat objekty a OOP protože to je pokročilejší v programování než to co jsme doposud se učili*

### cyklus pro procházení hodnot v iterovatelných objektech (for ... of)

Tento cyklus může procházet iterovatelné objekty (to jsou objekty jako stringy (text), seznamy apod.), tento cyklus je určen pro procházení převážně seznamů.

**pozn. seznamy budou vysvětleny v další kapitole*

**pozn.0 seznamy a pole jsou skoro to stejné v kontextu JS je možné je prohodit, takže někde bude napsané pole a někde seznam ale je to to stejné*

```js
let seznam = [1, 2, 3, 4, 5];
for (let index of seznam) {
  console.log(index);
} // vypíše (každá hodnota bude na novém řádku): 1 2 3 4 5 
```

## Seznamy

Seznam je datový typ proměnné, který umožňuje uložit více dat do jedné proměnné, proměnné nemusí mít ani stejný datový typ, takže tam může být string, int apod. Seznamy jsou indexované, první index je 0 a poslední je `n-1`, přičemž n je počet prvků v seznamu, tudíž je možné procházet pole pomocí indexů (název proměnné + hranaté závorky + čísla. např seznam[0] je prvek na indexu 0 atd.).

```js
let seznam = [0,5,7,"Ahoj",["seznam", "pole"], 0.54]
console.log(seznam[0]) // 0
console.log(seznam[2]) // 7

// když chceme vypsat prvek z pole, které je v poli uděláme to takto:

console.log(seznam[4][0]) // vypíše string "seznam" z seznamu co je na indexu 4
```

**pozn. není omezení na počet seznamů v seznamech ale není doporučené využít více než 3, protože pak je to složité to využívat*

## Důležité metody a funkce

Chtěl bych napsat zde pár důležitých metod a funkcí před začátkem OOP protože si myslím že je to důležité pro napsání kódů.

### prompt()

Prompt je funkce, která vyzve uživatele aby odpověděl na otázku co mu programátor (my) zadáme.

```js
let x = prompt("jaké je dneska počasí?");

console.log(x);

/*
Při výstupu můžu vyjít cokoliv, protože uživatel může žádat cokoliv s vstup
není nijak ošetřen. Na ošetření vstupu se používá while / do ... while cyklus
*/
let y = 0;
while (y == 0 || y == 5){
    y = prompt("zadej číslo mimo 0 a 5")

/*
tento vstup je ošetřen že uživatel může žádat cokoliv až na 0 a 5, protože 0 a 5
udělá to že se stránka zeptá znovu. Tady nám nevadí že prompt vrací string protože porovnáváme s == a ne s třemi ===.
*/
}
```

**pozn.0 `prompt` vrací `string`, převést string na číslo jsou další `funkce` a `metody`*

**pozn.1 musíme tento kód tát do HTML jinak nebude fungovat*

```html
<!-- do HTML se kód (script) dává pomocí tagu script s src a název souboru nebo jeho adrese kde je uložený -->
<script src="místo-uložení.js"> </script>

<!-- nebo se také dá psát přímo do script tagu -->
<script>
let num = 0;
num++;
</script>
```

### Number()

Number je konstruktor třídy `Number()`, když si něho zavoláme string obsahující čísla založí nám číslo, jak `int` (i `float` protože patří k sobě do stejné třídy). 

**pozn. když ho zavoláme s neplatným string hodnot vrátí "NaN" - Not a Number*

```js
let x = "1234";
x = Number(x)

/*
převede x z textu "1234" na celé číslo 1234
*/

let y = 0.5;
y = Number(y)

/*
převede y na desetinné číslo 0.5
*/
```

### parseInt() a parseFloat()

`ParseInt` a `parseFloat` jsou funkce co dělají podobnou věc, jedna převede na `int` (parseInt) a jedna převede na `float` (parseFloat) - Number (int) s desetinou čárkou.

```js
let x = "15.5";
let y = 17.3;
let z = 13

x = parseInt(x) // x je 15 protože se převádí na celé číslo 
y = parseFloat(y) // žádná změna 
y = parseInt(y) // y je 17
z = parseFloat(z) // z je 13 protože je to celé číslo a nemá desetinné místo 
```
# DOM (Document Object Model)

DOM nám dovoluje upravovat `HTML stránku`. Všechno v HTML souboru je v `hierarchii` kde `head` je nejvýše a všechno vychází z něho, vypadá to nějak takto:


Document

├── HTML <br>
│   ├── head (hlavička dokumentu) <br>
│   │   ├── title (titulek / název) <br>
│   │   └── meta (meta informace)<br>
│   └── body (tělo / obsah)<br>
│       ├── header (hlavička / záhlaví)<br>
│       ├── main (hlavní obsah)<br>
│       │   └── section (sekce)<br>
│       │       ├── h1 (nadpis 1)<br>
│       │       └── p (paragraf)<br>
│       ├── aside (boční panel)<br>
│       └── footer (patička / zápatí)<br>

# Hledání prvků v DOM

K HTML prvkům se můžeme dostat více způsoby. Můžeme způsoby na hledání těchto prvků rozdělit na dva zpusoby, první hledající pouze podle jednoho selektoru (vstupů, napr. ID, třída apod.) nebo těch co hledají podle více.

## Jedno selektorové metody

`document.getElementByID(ID prvku)` je nejjednodušší způsob na hledání prvků v HTML, protože by měl vracet `pouze jeden` a to ten, který má ID, které tam dáme do závorky. 

**pozn.0 protože v HTML by se `ID nemělo opakovat` (i když to jde ale není to dobré, takže ho `neopakujte`), tak to vrátí `pouze první výskyt toho ID`, proto je dobré mít pouze jeden*

```html
    <!---> nějaký HTML kód <--->
    <p id="paragraf1"> já jsem paragraf 1 </p>
    <!---> nějaký HTML kód <--->
```

```js
    let p1 = document.getElementByID("paragraf1"); // vyhledá element s ID paragraf1 a uloží ho do proměnné p1 pomocí, které můžeme upravovat pak ten paragraf
    p.style.color = "blue"; // nastaví barvu na modrou pro paragraf1, může dělat více věcí ale to je asi nejlehčí na zobrazení
```

## více selektorové vyhledávání

`document.querySelector(selector)` je metoda, která vyhledává podle žádného selektoru (tabulka níže), kde vrátí první prvek se shodou selektoru. 

**pozn.1 když hledaný prvek neexistuje metoda vrací `null`*

|Selector|Popis|
|--------|-----|
|"#ID"   |vybere prvek podle ID|
|".class"|vybere prvek podle třídy|
|"tag"|vybere první prvek podle tagu|
|"parent child"| vybere prvního potomka daného rodiče|

**pozn.2 jsou i další ale ty nejsou zas tak důležité*

Pro použití více selektorů najednou se neodděluje nijak, s oddělením čárkou nebo mezerou to není to stejné ale k tomu později, jako např. `document.querySelector("#IDtag")`.

### "#ID"

`document.querySelector("#ID")` je vlastně stejný jako `getElementByID()`, takže vráti prvek s daným ID.

```js
    document.querySelector("#paragraf1")
```

**pozn. je stejný pouze pokud použijeme jenom ID, což `querySelector` umí i více najednou, tak má více možnost*

### ".class"

`document.querySelector(".class")` vrátí první prvek s danou třídou / class.

```js
    document.querySelector(".třída")
```

**pozn. není stejné jako `document.getElementsByClassName` protože ten vrací všechny prvky na rozdíl od `querySelector` ale k getElementsByClassName později*

### "tag"

`document.querySelector("tag")` vrací první prvek s daným HTML tagem (např. `<p>`, `<h1>` apod.), což toto je spíše vyhledávání využité s kombinací jiných selektorů.

```js
    document.querySelector("p")
```

**pozn. může to být jakýkoli tag v HTML*

### parent child 

`document.querySelector("parent child")` vrací první prvek co je potomek (child) od nějakého rodiče (patent), nejčastěji využívány v kombinaci s dalšími selektory.

```js
    document.querySelector("div p")
```

Tento kód vyhledává první paragraf v divu v celém HTML a pak ho vrátí.


## rozdělování čárkou a nerozdělování rozdíl

Při použití `document.querySelector()` můžeme dát do závor `"#cislo, p"`, `"#cislo p"` tak i dokonce `"p#cislo"`. Rozdíl v tom jsou že:

- `"#cislo, p"` znamená že hledáme prvek co je buď `paragraf` (neboli p) a `nebo` má ID `cislo`

- `"#cislo p"` znamená že hledáme prvek, který je `paragraf` (p) `a` je potom nějakého prvku s ID `cislo`

- `"p#cislo"` znamená že hledáme prvek co ve stejnou chvíli `paragraf` (p) `a taky` má ID `cislo`

**pozn. `"p#cislo"` nelze zapsat jako `"#cislop"`, protože tak by to hledalo prvek s ID `cislop`*

## hledání prvků v dom

Metody, jako např `document.querySelectorAll()` vrací více než jeden prvek, vrací přesně NodeList, který se chová jako pole / seznam. Tato metoda je stejná jako `querySelector()` ale vrací všechny prvky a ne jenom jeden, které se dají upravovat stejně jako prvky z těch ostatní metod.

```js
//příklad použití

    let prvky = document.querySelectorAll(".trida"); // všechny prvky co mají třídu "trida" se uloží to seznamu "prvky"
    for(let prvek of prvky){ //půjdeme od prvního (nultého) prvku do posledního prvku n-1 (m je délka pole)
        prvek.style.color = "blue"; // všem těmto prvkům změníme barvu na modrou 
    }
```

Metoda `document.querySelectorAll()` zase může mít stejné selektory jako `document.querySelector()` ale rozdíl je ten že vrátí všechny prvky místo prvního.

### další metody

`document.getElementsByClassName(trida)` tato metoda vrací všechny prvky podle zadané třídy v závorkách. `document.getElementsByTagName(tag)` tato metoda vrací všechny prvky podle zadaného HTML tagu v závorkách. `document.getElementsByName(name)` tato metoda vrací všechny prvky co mají stejný atribut `name`.

## tabulka všech metod k shánění elementů z DOM

### query selektory

|metoda|popis|
|:-------|:--------|
|document.querySelector(selektor) | Vybere a vrátí první |odpovídající prvek|
|document.querySelectorAll(selektor) | vybere všechny prvky a vrátí je |

### getElementBy..()

|metoda|popis|
|:-------|:--------|
|document.getElementById(id)|Vybere a vrátí první prvek s tímto ID (ID by se nemělo opakovat)|
|document.getElementsByClassName(trida)|Vybere a vrátí první prvek s touto třídou|
|document.getElementsByTagName(tag)|Vybere a vrátí první prvek s tímto HTML tagem|
|document.getElementsByName(name)|Vybere a vrátí první prvek s tímto specifickým name atributem|

**pozn. v těchto metodách se nepoužívají pro ID `#`, pro třídy `.` apod. protože už pro JS je jasné co má hledat a proto není třeba to upřesňovat selektory*

## Důležité metody pro interakci s DOM

Pro úpravu jakéhokoliv HTML tagu je důležité znát metody jak s je upravovat.

O první takovéto metodě jsme tady už mluvili, bylo to `/.style.color` např. pro úpravu barvy, pozadí. Lze takto měnit úplně všechno co je v HTML pod `<style>` tagem.

```HTML
<!--> nějaký HTML kód <--->
<p id="paragraf"> Ahoj </p>
<!--> nějaký HTML kód <--->
```

```js
document.getElementByID("paragraf").style.color = "green" //nastaví barvu na zelenou
document.getElementByID("paragraf").style.backgroundColor = "red" //nastaví barvu pozadí na červenou
```

Mezi další důležité metody patří `innerHTML` a `textContent`, tyto metody dělají dost podobnou věc, upravují text HTML tagu ale obě jinak. `innerHTML` je dobrý pokud potřebujeme manipulovat s HTML obsahem, protože dokáže přidat další HTML tagy, upravit strukturu apod. `textContent` dokáže pouze upravovat text toho prvku.

```HTML
<!--> nějaký HTML kód <--->
<p id="paragraf"> Ahoj </p>
<!--> nějaký HTML kód <--->
```

```js
document.getElementByID("paragraf").textContent = "Čau!" // změní paragraf z "Ahoj" na "Čau!"
```

# přidání interaktivity na stránku

Přidání interaktivity můžeme dosáhnout například tím že přidáme události (events) nebo vlastností, protože events jsou složitější téma, tak je pro zatím vynecháme a půjdeme na vlastnosti. Vlastnosti se dají přidat jak v HTML tak i v JS, příklad obou chvíli:

HTML
```HTML
<!-- > do názvu funkce dodáme nějakou funkci z našeho script <--->
<p onclick="názevFunkce()">
```

JS
```JS
let prvek = document.getElementByID("ID")
prvek.onclick = názevFunkce //bez závorek, protože s nimi by se ta funkce zavolala hned při spuštění stránky, což nechceme

//protože nemůžeme použít závorky, a tam dát parametry co ta funkce přijímá můžeme to udělat takto

prvek.onclick = () => {
    názevFunkce(argumenty)
}

//pravděpodobně je více způsobů ale myslím si že tento je nejlehčí
```

## další vlastnosti

|vlastnost|popis|
|:---------|:-------|
|onclick|spustí se vždy při kliknutí prvku|
|ondblclick|spustí se vždy při dvojitém kliknutí|
|onmousedown|spustí se vždy při kliknutí na prvku, spustí se hned po stisknutí ne jak u `onclick` že se spustí po puštění tlačítka|
|onmouseover|spustí se vždy při to co je kurzor v oblasti prvku|
|onmouseleave|spustí se vždy když kurzor opustí prvek|
|onscroll|spustí se vždy posouvání obsahu stránky nebo prvku|

samozřejmě je více vlastností co můžeme přidat k HTML prvkům ale toto si myslím že jsou nejdůležitější 

# RegEx (regulární exprese)

.

# OOP (Objektově Orientované Programování)

Objektově orientované programování (`OOP`) je programovací paradigma, které využívá `objekty`, `třídy`, `metody` apod. s objekty jsme se už setkali v dávnější kapitole o Cyklech s cyklem `for...in` ale to není všechno, většina proměnných je v JS je objekt nějaké třídy, například objekty typu `Object`, `Array`, `Function`, ale primitivní datové typy jako čísla nebo řetězce jsou zvláštní hodnoty, které nepatří přímo mezi objekty (primitivní datové typy). Každá třídu může mít pod sebou i metody (např. třída `console` a její metoda `log`, která přijímá nějaký string, co má vytisknout). V JS jsou dva hlavní způsoby jak si udělat objekt, jeden je pomocí `třídy` a `konstruktorů` a druhá je pomocí `deklarování` (založení) proměnné, která obsahuje nějaké `vlastnosti` a jejich `atributy` (k nim za chvíli).

OOP je založeno na 4 pilířích (vysvětlené budou v nějaké jejich vlastní kapitole):
1. Encapsulation (Zapouzdření)
2. Abstraction (Abstrakce)
3. Inheritance (Dědičnost)
4. Polymorphism (Polymorfizmus)

## Začátek OOP

Základní objektů je nejdůležitější část OOP protože bez nich by to bylo jenom "normální" `funkční` (= používání funkcí jako hlavní věc v tomto paradigma) nebo `imperativní` (= toto paradigma používá jen základní funkčnosti programování jako větvení apod.). Pro založení objektu je důležité znám význam "vlastností" a "atributů". `Vlastnost` je něco jako název proměnné, něco jako naše X, Y nebo Z a `atribut` je hodnota té proměnné, což tam může být cokoliv (i další objekt, což staví hierarchii tak i dědičnosti, jeden z hlavních pilířů OOP ale i složitější datové typy, které si my jako programátoři zakládáme). Zde je jak se to syntakticky správně zakládá (zatím bez tříd, konstruktorů nebo metod).

**pozn. tento typ zakládání objektů se často v jiných jazycích jako např. Python nazývají dictionary (slovník)* 

```js
var clovek = {
    jmeno: "Adam",
    vek: 25,
    povolani: "policajt"
};

/*zde jsem založil objekt jménem clovek s atributy jmeno, vek a povolani s
atributy "Adam", 25 a "policajt". Všimněte si že přiřazování v zakládání objektu je `:` a ne `=`.
*/

console.log(clovek.jmeno);
/* 
Vypíše atribut od vlastnosti jmeno, v tomto případě "Adam".
*/

var obj = {
    obj2:{
        hodnota: "vnitrni hodnota",
    },
};

/*
Lze i v objektu založit další objekt, toto lze dělat do nekonečna ale více
jak 3 nejsou doporučené kvůli
náročnosti s prací s výsledným datovým typem, náročnosti pro počítač 
a také kvůli toho kolik textu přidá na psaní.

K přístupu objektů v objektu přistupujeme stejně jak u polí, zde je
 příklad.
*/

console.log(obj.obj2.hodnota);

/*
Vypíše to "vnitrni hodnota" protože jsme přistoupili z objektu "obj" k objektu "obj2"
a jeho vlastnosti "hodnota" s atributem "vnitrni hodnota". 

Kdyby tam v objektu byl další objekt budeme postupovat stejně abychom ho mohli použít.
*/
```
