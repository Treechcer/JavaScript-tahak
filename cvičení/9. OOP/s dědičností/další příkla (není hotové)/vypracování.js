class osoba{ //základní třída osoba 
    constructor(jmeno,vek){ //založení základního člověka
        this.jmeno = jmeno;
        this.vek = vek;
    }

    vypisJmena(){ //základní metoda na vyýpis jména
        console.log("jmenuju se", this.jmeno, "a je mi", this.vek)
    }
}

class student extends osoba{ //třída dědící z osoby, studden
    constructor(jmeno, vek, skola, rokStudia){ //tady je konstrukter kde využijeme i to z ososby ale přidáme nové věci
        super(jmeno, vek)
        this.skola = skola;
        this.rokStudia = rokStudia;
    }

    vypisSkoly(){ //základní metoda na výpis školy a kolik let studuje
        console.log("studju na", this.skola, "a stuju už", this.rokStudia, "roky")
    }
}

var osobaObj = new osoba("Petr", "54")
osobaObj.vypisJmena() // vypíše: jmenuju se Petr a je mi 54

var studentObj = new student("karel", "24", "vysoká škola", 3)
studentObj.vypisSkoly() // vypíše: studju na vysoká škola a stuju už 3 roky
studentObj.vypisJmena() // vypíše: jmenuju se karel a je mi 24