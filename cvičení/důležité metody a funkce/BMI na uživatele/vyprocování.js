function userDefinedBMI(){ 
    let hmotnost = Number(prompt("kolik vážíš (v kg)")) //zeptáme se uživatle kolik váží a uložíme to do proměnné
    let vyska = Number(prompt("kolik měříš (v metrech)")) //zeptáme se kolik měří a uložíme to do proměnné
    
    let vypocet = (hmotnost / (vyska ** 2)); //výpočet BMI

    if (vypocet <= 18.5){
        document.write("podváha") // document.write() vypíše ten text do HTML, funguje podobně jako console.log jen je to v tom HTML elementu vypsané místo konzole, blíže se o něm budeme bavit někdy v pozdější kapitole 
      }
      else if(vypocet > 18.5 && vypocet <= 24.9){  
        document.write("normální váha")
      }
      else if(vypocet > 24.9 && vypocet <= 29.9){ 
        document.write("nadváha")
      }
      else{ 
        document.write("obezita") 
      }

      /*
      pozn.: v tomto kódu můžeme napsat cokoliv do těch prompt, i když to je text tak to projde dál, což tuto problematiku budeme řešit v dalším příkladu (převod
      měn s uživatelem)
      */

    return vypocet 
}

console.log(userDefinedBMI());