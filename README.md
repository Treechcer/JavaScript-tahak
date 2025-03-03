# Tahák na JavaScript

## Obsah

- [Úvod](#úvod)
- [Základy](#základy)
  - [Výpis do konzole](#výpis-do-konzole)
  - [Komentáře](#komentáře)
  - [Proměnné](#proměnné)
  - [Aritmetické operace](#aritmetické-operace)
  - [Speciální využití aritmetických operátorů](#speciální-využití-aritmetických-operátorů)
  - [Inkrementace a dekrementace](#inkrementace-a-dekrementace)
  - [Kombinované zápisy operátorů](#kombinované-zápisy-operátorů)
- [Větvení](#větvení)
  - [Podmínky](#podmínky)
  - [Kombinace podmínek](#kombinace-podmínek)
  - [Pravdivostní tabulka](#pravdivostní-tabulka)
  - [Logické operátory](#logické-operátory)
- [Funkce](#funkce)
- [Rozsah](#rozsah)
- [Cykly](#cykly)
  - [Cyklus `for`](#cyklus-for)
  - [Cyklus `while`](#cyklus-while)
  - [Cyklus `do ... while`)](#cyklus-s-podmínkou-po-každém-opakování-do--while)
  - [Cyklus `for ... in`)](#cyklus-na-procházení-vlastností-objektu-for--in)
  - [Cyklus `for ... of`](#cyklus-pro-procházení-hodnot-v-iterovatelných-objektech-for--of)
- [Seznamy](#seznamy)
- [OOP (Objektově Orientované Programování)](#oop-objektově-orientované-programování)
  - [Začátek OOP](#začátek-oop)

## Úvod

Toto je textové vysvětlení programovacího jazyka JavaScript, často zkracovaný jen na JS. JS je primárně určen na webové stránky a webové aplikace.

# Základy

## Výpis do konzole

```js
console.log("Ahoj Světe!");
```

Tento příkaz (funkce / metoda ale k nim později) vypíše do konzole prohlížeče „Ahoj Světe!“ - bez těch uvozovek. To proto, že příkaz "console.log()" vypíše všechno v uvozovkách. 

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

**pozn. více řádkové komentáře začínají `\*` a končí `*/`*

## Proměnné

```js
var x = 5; // celé číslo (int)
var t = 5.555; // desetinné číslo (float)
var slovo = "Ahoj Světe!"; // text (string)
var pravda = true; // boolean
```

V JS je mnoho datových typů, např. celé číslo (int), číslo s desetinnou čárkou (float), znaky (string) a logická hodnota (boolean neboli hodnota obsahující pouze pravdu `true` nebo nepravdu `false`). Všechny tyto hodnoty nemusí být nijak speciálně označeny, až na string, text má vždy uvozovky, je jedno jaké (`"`, `'` a \` ) dokud je stejnými ukončím, text může obsahovat jak znaky (A,b,C,d,e,f..) tak i čísla (0,1,2..) a lze provádět s nimi aritmetické operace pokud obsahují pouze čísla protože se automaticky převedou na čísla (int nebo float, podle potřeby). Každá proměnná v JS se vytváří (deklaruje) se slovem `var`, `let` nebo `const`. Rozdíl mezi var a let není pro začátečníky důležitý ale oboje založí proměnnou, která se dá použít a je automaticky (dynamicky) daný datový typ, proměnné se můžou i v jejich životech změnit datový typ, může začít např. jako string a pak být int. `Const` je konstata, také se automaticky (dynamicky) vybere datový typ, konstatny nelze měnit, po založení nejde upravit, předělat apod.

**pozn. JS obsahuje více datových typů ale ostatní nejsou v tuto chvíli důležité*

**pozn.0 \` (alt gr + ý / alt gr + 7) má i speciální vlastnosti není úplně stejný jako ostatní ale nemělo by prohození uvozovek z \` na " nebo naopak rozbít kód*

**pozn.1 boolenovy hodnoty je název pro hodnoty nabývající 1 nebo 0 nebo můžou také být dané (což je častější v programování) jako true nebo false*


## Aritmetické operace

Aritmetické operace lze používat s čísly ale stejné znaky (operátory) mohou dělat i jiné věci než jen aritmetické operace – to ale probereme v další kapitole.

```js
var x = 5 + 10; // x = 15
var y = 7;
var z = x + y; // 22
var t = 5 * 2; // 10
var u = 10 / 2; // 5
var mocnina = 2 ** 3; // 8, 2^3
var mocnina2 = 3 ** 2; // 9, 3^2
var odmocnina = 4 ** 0.5; // 2, 4^0.5
var modulo = 10 % 3; // 1
```

`+` plus

`-` mínus

`*` násobení

`/` dělení

`**` mocnina a odmocnina (podle druhého čísla)

`%` zbytek po dělení (modulo)

### Speciální využití arimetický operátorů

Plus (+) lze použít i na spojení (concatinade) stringů

```js
var str1 = "Ahoj ";
var str2 = "Světe!";
console.log(str1 + str2); // výstup:Ahoj Světe!

var str3 = "Ahoj";
var str4 = "Světe!";
console.log(str3 + str4); // výstup:AhojSvěte!
```

Dvě plus (++) před nebo za proměnnou obsahující čísla ji inkrementuje, podle pozice je chvíle kdy se to stane.

```js
var x = 1;
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

Tady lze vidět rozdíl a to ten kdy se proměnná (v tomto případě x) zvětší. Před x se to splní jako první věc, lze si to představit jako násobení v matematice že se to udělá první a za x se to provede po všech operací, lze si to představit jako sčítání v matematice.

**pozn. to stejné funguje s mínusem (x--, --x)*

`++` inkrementace

`--` dekrementace

## Další zápis inkrementace 

```js
var x = 1;
//x++ == x += 1
x += 1; // 2 .. x = x + 1
```

Kombinovaný zápis (+=) je možné využít na inkrementaci o jakékoliv číslo.

**pozn. kombinovaný zápis má i varianty: `-=`, `*=`, `/=`. Vždy to je jako `x = x + n` kdy n je jakékoliv číslo, tento zápis platí pro všechny operace jen s tím že se operace mění.*

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

**pozn. `if` a `else if` se spustí vždy když jejich podmínka je pravdivá a spustí se vždycky ten první pravdivý, `else` se spustí pokud žádný jiný nebyl pravdivý*

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


**pozn. jedno rovná se (=) je znak pro přiřazení ne pro porovnávání a v podmínce vyvolá chybu.*


**vysvětlení:*

```js
console.log(5 == "5") // vypíše true protože to převede "5" na 5 a 5 a 5 je to stejné
console.log(5 === "5") // vypíše false protože to nepřevede "5" na 5 a "5" a 5 není to stejné
```

**pozn. lze vypsat výsledek podmíněk, vždy výsledek je boolenská hodnota a proto jenom true nebo false*

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

**pozn. logická funkce AND se také nazývá loigický součin*

### Pravdivostní tabulka OR:

OR
| A   | B   | Y   |
| --- | --- | --- |
| 0   | 0   | 0   |
| 0   | 1   | 1   |
| 1   | 0   | 1   |
| 1   | 1   | 1   |

Y = A + B

**pozn. logická funkce OR se také nazývá loigický součet*

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

Booleanské hodnoty lze i negovat, negace je když změní jednu hodnotu na druho (true na false a naopak). 

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
    consol.elog("pravda");
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

V dvoukomplementním zápisu se musí přidat ještě +1 aby to bylo správně negované. Takže výsledek v JS bude 0110 místo 0101.

JS používá "dvoukomplementní zápis" proto je výsledek záporné číslo. Vysvětlení dvoukomplementního zápisu níže.

Negace 1010 (BIN) je tedy -11 (DEC).


dvoukomplementní zápis je k zápisu čísel v binární formě, záporné číslo v této formě je nějaké číslo celé negovane a +1 k tomu celému (musí být daný počet bitů). např.: 

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

## Funkce

S funkcemi jsme se setkali už na začátku s funkcí "console.log()" (pro upřesnění, console.log() je metoda ale s jejím využít je jako funkce). Funkce je část kódu, která se dá znovu zavolat pomocí jejího jména a pokud přijímá nějaké parametry tak název s parametry. Funkce dokud nebude zavolaná nic neudělá, bude jenom "přehlédnuta počítačem" dokud ji nezavoláme.

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
console.log(nazev3(1)) // vypíše 2
let vracenaHodnota = nazev3(10); // proměnná vracenaHodnota bude obsahovat 11 protože vrácena hodnota pomocí return se uloží do ní 

var x = 4;
nazev3(x) //vrátí 5

```

**pozn.0 nelze opakovat jména funkcí, jméno je možné mít pouze jedno*

**pozn.1 `return` neboli vrácení proměnných z funkcí je velice důležitá část programování, dobrá praktika programování je dělat funkce, které něco vrací a nebo mají vedlejší efekt, není dobré používat všechny hodnoty jako "globální" a měnit je všude (což je způsob programování s funkcemi jenom s vedlejším efektem) ale jen ve funkcích kde by měli mít přístup. Funkce s vedlejším efektem jsou funkce co nic nevrací ale změní něco na obrazovce nebo podobné věci (příklad takovéto funkce je console.log() ), tyto funkce jsou také důležité a není špatné takové funkce zakládat ale neměly by to být jediné funkce, jaké budeme dělat aby se kód dal lépe opravovat a abychom se vyhnuli chybnosti. Globální proměnné nejsou vždy špatné ale je dobré jich mít co nejméně a jen ty nejpodstatnější.*

## Rozsah

Rozsah je lokální (lze použít proměnnou pouze v té funkci) a globální (lze proměnnou použít všude) nebo se také dá rozlišit jako blokový (proměnná je pouze použitelná v bloku založení) a funkční (proměnná je pouze použitelná ve funkci založení). Tady jde vidět rozdíl mezi var a let, var je založení proměnné v rozsahu na funkci přičemž let je v rozsahu pro kód bloku.

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

## Cykly

### Cyklus s určitým počtem opakování (for)

Cyklus s určitým počkem opakování je `for`. 

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

**vysvětlení zápisu: první věc v závorce (např. `let i = 0;`) je část kódu co se spustí přesně jednou a to na začátku před cyklem a proměnnou založí (deklaruje) proměnnou `i` (nebo jinou proměnnou), která se bude rovnat tím za rovná se, tady by to byla `0`, druhá je podmínka (např. `i < 10;`), která se vyhodnocuje po každé iteraci (opakování) dokud výsledek není false, až je tak to skončí a třetí část (např `i++`) se vyhodnocuje po každé zkontrování podmínky, nejčastěji tam je nějaká inkrementace.

**pozn. jedno z nejčastějších využití pro počítání indexu u polí / seznamů (v JS seznamů v jiných jazicích to můžou být správně pole ale v konverzaci je to celkem jedno a není úplně chab říct oboje nebo opak).*

### Cyklus s neurčeným počtem opakování (while)

Cyklus s neurčeným počtem opakování (`while`) se vyhodnocuje po každé interace (projití cyklu) a dokud je pravda (true) tak do té doby jede dále, s false končí. 

**pozn. cyklus s neurčitým počtem opakováním je často nazývám také cyklus s podmínkou před každým opakováním*

**pozn.0 lze udělat nekonečný cyklus, těm se snažíme vždy vyhnout*

```js
let i = 0
while (i < 10){
    console.log(i)
    i++
}

// zde je cyklus, který vypíše čísla od 0 do 9
```

**pozn.1 všechny `for` cykly se dají řepsat na `while` cykly ale ne všechny `while` jdou na `for`* 

### Cyklus s podmínkou po každém opakování (do ... while)

Tento cyklus (`do ... while`) se vždy spustí aspoň jednou a po prvním projití (iteraci) se zkontroluje podmínka a bude se opakovat dokud je podmínka true až je false přestane.

```js
var i = 0
do{
    console.log(i)
    i++
} while (i < 10)

// vypíše 0 až 9

var j = 10

do{
    console.log(j)
    j++
} while (j < -5)

//vypíše to 10 a cyklus skončí
```

### Cyklus na procházení vlastností objektu (for ... in)

K OOP (objektově orientované programování) a objektům se dostaneme později ale kdyby jsme chtěli vypsat vlastnosti a jejich hodnoty od nějakého objektu jedna z možností je využít Cyklus na procházení vlastností objektu (`for ... in`) cyklus.

```js
var obj = {jmeno: "Petr", vek: 25}
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

**pozn. seznamy budou vysvětla v další kapitole*

**pozn.0 seznamy a pole jsou skoro to stejné v kontextu JS je možné je prohodit, takže někde bude napsané pole a někde seznam ale je to to stejné*

```js
var seznam = [1, 2, 3, 4, 5];
for (let index of seznam) {
  console.log(index);
} // vypíše (každá hodnota bude na novém řádku): 1 2 3 4 5 
```

## Seznamy

Seznam je datový typ proměnné, který umožňuje uložit více dat do jedné proměnné, proměnné nemusí mít ani stejný datový typ, takže tam může být string, int apod. Seznamy jsou indexované, první index je 0 a poslední je `n-1`, přičemž n je počet prvků v seznamu

```js
var seznam = [0,5,7,"Ahoj",["seznam", "pole"], 0.54]
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
var x = prompt("jaké je dneska počasí?");

console.log(x);

/*
Při výstupu můžu vyjít cokoliv, protože uživatel může žádat cokoliv s vstup
není nijak ošetřen. Na ošetření vstupu se používá while / do ... while cyklus
*/
var y = 0;
while (y == 0 || y == 5){
    y = prompt("zadej číslo mimo 0 a 5")

/*
tento vstup je ošetřen že uživatel může žádat cokoliv až na 0 a 5, protože 0 a 5 udělá to že se stránka zeptá znovu. Tady nám nevadí že prompt vrací string protože porovnáváme s == a ne s třemi ===.
*/
}
```

**pozn. `prompt` vrací `string`, převést string na číslo jsou další `funkce` a `metody`*

### Number()

Number je konstruktor třídy `Number()`, když si něho zavoláme string obsahující čísla založí nám číslo, jak `int` tak i `float`.

```js
var x = "1234";
x = Number(x)

/*
převede x z textu "1234" na celé číslo 1234
*/

var y = 0.5;
y = Number(y)

/*
převede y na desetiné číslo 0.5
*/
```

### parseInt() a parseFloat()

`ParseInt` a `parseFloat` jsou funkce co dělají podobnou věc, jedna převede na `int` (parseInt) a jedna převede na `float` (parseFloat).

```js
var x = "15.5";
var y = 17.3;
var z = 13

x = parseInt(x) // x je 15 protože se převádí na celé číslo 
y = parseFloat(y) // žádná změna 
y = parseInt(y) // y je 17
z = parseFloat(z) // z je 13 protože je to celé číslo a nemá desetiné místo 
```

# OOP (Objektově Orientované Programování)

Objektově orientované programování (`OOP`) je programovací paradigma, které využívá `objekty`, `třídy`, `metody` apod. s objekty jsme se už setkali v dávnější kapitole o Cyklech s cyklem `for...in` ale to není všechno, každá proměnná v JS je objekt nějaké třídy, například celé číslo (INT) je objekt třídy `number`, to stejné i float (v JS `float` i `int` jsou objekt stejné třídy, k změně aby to bylo jako jiné třídy jsou funkce `parseInt()` a `parseFloat()`, což nezmění třídu ale dosáhne efektu podobného a to toho že to buď bude jako int nebo float po použití), string je zase objekt třídy `String`. Každá třídu může mít pod sebou i metody (např. třída `console` a její metoda `log`, která přijímá nějaký string, co má vytisknout). V JS jsou dva hlavní způsoby jak si udělat objekt, jeden je pomocí `třídy` a `konstruktorů` a druhá je pomocí `deklarování` (založení) proměnné, která obsahuje nějaké `vlastnosti` a jejich `atributy` (k nim za chvíli).

OOP je založeno na 4 pilířích (vysvětlené budou v nějaké jejich vlastní kapitole):
1. Encapsulation (Zapouzdření)
2. Abstraction (Abstrakce)
3. Inheritance (Dědičnost)
4. Polymorphism (Polymorphismus)

## Začátek OOP

Základní objektů je nejdůležitější část OOP protože bez nich by to bylo jenom "normální" `funkční` (= používání funkcí jako hlavní věc v tomto paradigma) nebo `imperativní` (= toto paradigma používá jen základní funkčnosti programování jako větvení apod.). Pro založení objektu je důležité znám význam "vlastností" a "atributů". `Vlastnost` je něco jako název proměnné, něco jako naše X, Y nebo Z a `atribut` je hodnota té proměnné, což tam může být cokoliv (i další objekt, což staví hierarchii tak i dědičnosti, jeden z hlavních pilířů OOP ale i složitější datové typy, které si my jako programátoři zakládáme). Zde je jak se to syntakticky správně zakládá (zatím bez tříd, kontruktorů nebo metod).

**pozn. tento typ zakládání objektů se často v jiných jazicích jako např. Python nazávají dictionary (slovník)* 

```js
var clovek = {
    jmeno: "Adam",
    vek: 25,
    povolani: "policajt"
};

/*zde jsem založil objekt jménem clovek s atributy jmeno, vek a povolani s
atributy "Adam", 25 a "policajt". Všimněte si že přiřazování v zákládání objektu je `:` a ne `=`.
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
(zabírání hodně místa v paměti, zpomalení a procházení objektu je o dost pomalejší
protože obsahuje více dat... Sice procházení objektů je O(n) náročnosti
(lineární časová složitost) ale je to více a více náročnější čím více je tam
objektů s vlastností, lineárně náročnější, což v 90% aplikací nevadí a nijak
smysluplně to neovlivní dobu projití celého kódu - lehké optimalizace budou
v nějaké další kapitole i s notacemi O (O-notion, big O notation)) a také kvůli
toho kolik textu přidá na psaní.

K přístupu objektů v objektu přistupujeme stejně jak u polí, zde je
 příklad.
*/

console.log(obj.obj2.hodnota);

/*
Vypíše to "vnitrni hodnkta" protože jsme přistoupili z objektu "obj" k objektu "obj2"
a jeho vlastnosti "hodnota" s atributem "vnitrni hodnota". 

Kdyby tam v objektu byl další objekt budeme postupovat stejně abychom ho mohli použít.
*/
```
