function prevodMeny(){
    do{
        var mena = prompt("na kterou měnu chceš převádět (EUR pro CZK na EUR, CZK pro EUR na CZK"); //zeptá se co chceš převádět
    }while(mena !== "CZK" && mena !== "EUR") // tady se to bude ptát tak dlouho doku uživatel nenapíše buĎ EUR nebo CZK, protože když se mena nerovná ani jedno je to true a zeptá se to znovu, pokud je to jedno z těch dvou tak je to false a znovu to nejde

    do{
        var kolikMeny = prompt("kolik máš zadané měny"); //zeptá se kolik chceš přávadět
    }while(Number(kolikMeny) <= 0)

    if (mena == "EUR"){
        document.write("EUR: " + kolikMeny / 25.08); // převod z CZK na EURa
    }
    else{
        document.write("CZK: " + kolikMeny * 25.08); // převod z EUR na CZK
    }
}

prevodMeny()