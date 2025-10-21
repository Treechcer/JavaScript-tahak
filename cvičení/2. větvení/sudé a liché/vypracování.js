var cislo = 5; // číslo, u kterého zjistíme jestli je sudé nebo liché

var vysledek = cislo % 2; // zjistíme celo číselný zbytek čísla, víme že když číslo je dělitelné 2 (2,4,8..) (vrátí 0) tak je sudé a když není (1,3,5..) je liché (vrátí 1)

var cislo = "sude"; // předpokládáme že číslo je sudé, lze to i prohodit ale to musí pak i kód být prohozen

if(vysledek == 1){ // když je zbytek 1, tak víme že číslo není sudé a protoho "jeSude" změní na false protže je liché
  cislo = "liche" // změní proměnnou aby obsahovalo že je liché
}
// tady nemusíme dát else nebo else if protože jsme předpokládali že je sudé, kdybychom to ale nepředpokládali, museli bychom tady dát ještě else nebo else if

console.log(cislo); //v tomto případě vypíše liché protože číslo je liché
