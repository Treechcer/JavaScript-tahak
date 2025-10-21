//stejný kód jak minule jako základ jenom bez výpisu

var vyska = 1.77;
var hmotnost = 80; 

var vypocet = (hmotnost / (vyska ** 2));

if (vypocet <= 18.5){ // kontrolo jestli je BMI menší jak 18.5
  console.log("podváha")
}
else if(vypocet > 18.5 && vypocet <= 24.9){ // kontroluje jestli BMI je mezi 18.5 až 24.9 
  console.log("normální váha")
}
else if(vypocet > 24.9 && vypocet <= 29.9){ // kontroluje jestli BMI je mezi 24.9 a 29.9
  console.log("nadváha")
}
else{ // když víme že ostatní "větve" jsou false v tomto případě je jasné že BMI je je větší jak 29.9 a tudíž je to nadváha
  console.log("obezita") 
}

//v tomto případě vypíšeme nadváha
