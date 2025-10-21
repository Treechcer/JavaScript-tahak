var kliknutiPocet = 0 //musíme založit nějakou hodnotu, která začně na 0 aby jsme mohli klikat

function pocet(){
    kliknutiPocet++; //musíme tu hodnotu zvěši protože jsme klikli
    document.getElementById("text").textContent = kliknutiPocet; //nastavujeme ten text na počet klknutí neboli tu hodnotu
    
    /*
    šlo by udělat i kdyby to bylo jenom takto, protože by se ta hodnota prvně zvětšila a pak by se vypsala
    
    document.getElementById("text").textContent = ++kliknutiPocet;
    */
}