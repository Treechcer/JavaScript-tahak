function Min(seznam){
    let min = seznam[0]; //vezmene první věc v seznamu, protože ať vybyerem jakékoliv číslo vždy může být to číslo menší 
    for (let i = 0; i < seznam.length; i++){ //prodejeme všechna čísla od nuly do délky seznamu ale bez té délky (tudíž v délce 5 jdeme jen do 4 např.)
        if (seznam[i] < min){ //když číslo na pozici i v seznamu je menší než naše nejmenší číslo tak ho do naší proměnné na nejmenší čísla uložíme
            min = seznam[i];
        }
    }

    return min; //vracíme nejmenší číslo
}

console.log(Min([5,-1,47,8,5,552,4,55,4,1,5,8,54,-4])) //vypíše -4