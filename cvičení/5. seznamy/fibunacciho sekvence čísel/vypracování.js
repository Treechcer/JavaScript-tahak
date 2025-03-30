function fibunacci(kolik){ //založení funkce co přijímá jeden argument, předpokládáme že je to číslo
    let fib = [0,1]; // založíme seznam s čísly co jsou vždy jako základ a zbytek dopočítáme
    for (let i = 2; i < kolik; i++){ // zde je cyklus, který počítá od 2 (což je první index, kde nemáme číslo vždycky) do počtu čísel kolik chcem
        fib[i] = fib[i-1] + fib[i-2]; // zde se vypočítá kolik je další fib. číslo (pozn. lze to uděl s třemi proměnýma a prohozovat je, není to špatně jen jsem to tak neudělal)
    }

    let zlatyUhel = fib[fib.length-1] / fib[fib.length-2]; // zde vypočítáme zlatý úhel, protože nám stačí z posledních dvou bude to mimo cyklus a bude to nejpřesnější

    return {fib, zlatyUhel}; // zde vracíme obejkt, obsahující fib. sekvenci a výsledek zlatého úhlu, k objektům se dostaneme později
}

var x = fibunacci(5); // zde zavoláme funkci a uložíme objekt do proměnné x
console.log(x); // vypíše to něco jako: { fib: [ 0, 1, 1, 2, 3 ], zlatyUhel: 1.5 }