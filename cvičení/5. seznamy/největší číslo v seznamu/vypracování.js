function Max(seznam){ 
    max = seznam[0]; // vezmeme první prvek a dáme ho do maxima (protože když dáme 0 nebo jiné číslo je možné že by to pole obsahovalo pouze menší a funkce by vrátila špatný výsledek 
    for (i of seznam){ //projdeme celé pole a uložíme prvky po každé iterací (opakování) do i
       if (max < i){ // když i je větší jak maximum uložíme ho jako maximum
           max = i;
       }
    }
    
    return max; // vrátíme maximum neboli největší číslo 
}

console.log(Max([1,2,3,9,2])) // vypíše 9
