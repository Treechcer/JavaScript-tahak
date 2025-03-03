var EUR = 10; // protože ještě neznáme způsob vstupu uživatele musíme to nastavené na tvrdo

var CZK = EUR * 25.08; //musíme to vynásobit číslem 25.08 protože ve chvíli psaní je jedno euro 25.08 Kč, toto proměnnou uloží a my s ní můžeme dělat další věci.

console.log(CZK); // zde vypíšeme proměnnou lze použít i document.write() aby to bylo vidět v HTML souboru ale to si myslím že není důležité a bude to mít podobný efekt.

// toto lze udělat s jakoukoliv měnou ale zatím to necháme takhle základní protože to by potřebovalo složitější věci v programování co jsme ještě neprobrali.

//pozn.: lze udělat i opak ale protože EUR > Kč tak musíme ty Kč dělit EUR jako `CZK / 25.08` což vypočítá kolik máme eur z daného počtu Kč 