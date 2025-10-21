function main(){// funkce se sputí po kliknutí na tlačítko
    const regEx = /^\w+@\w+\.\w+$/ /*způsob jak hledat emaily s tím co 
    jsem vysvětloval -- není to perfektní ale k tomu by byly potřeba věci 
    co nejsou vysvětlené v tom dokumentu, takže na velkou část emailů to 
    funguje*/
    let text = document.getElementById("vstup").value // uloží hodnotu do text proměnné
    if (text.match(regEx)){ //když ho najde tak to vrátí něco jiného než null proto to funguje jako true
        document.getElementById("valid").textContent = "validní" //změní text na validní
    }
    else{ //a když to je null tak to jde sem
        document.getElementById("valid").textContent = "nevalidní" //změní text na nevalidní
    }
}