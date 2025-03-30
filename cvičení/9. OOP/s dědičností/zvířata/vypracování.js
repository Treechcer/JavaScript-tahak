class zvire{ //založení hlavní třídy ze které se dědí
    constructor(zvuk, zvire, jmeno){ // založení základních hodnot co potřebujeme 
        this.zvuk = zvuk;
        this.zvire = zvire;
        this.jmeno = jmeno;
    }

    vydejZvuk(){ //metoda, která vypíše co je to za zvíře a jaký dělá zvuk
        console.log(this.zvire, "dělá tento zvuk", this.zvuk)
    }

    vypisJmeno(){ //metoda co vypíše jmén
        console.log("jmenuju se", this.jmeno)
    }
}

class pes extends zvire{ //založení třídy pes, která dědí ze zvířete
    constructor(zvuk, jmeno, rasa){
        super(zvuk, "pes", jmeno) //vždycky v této třídě bude kočka, nemusíme nijak přijímat "zvíře" a proto tam dám natvrdo "pes"
        this.rasa = rasa
    }

    vypisRasu(){ //bonusová metoda aby šlo ukázat že může mít další metody
        console.log("tento pes má rasu:", this.rasa)
    }
}

class kocka extends zvire{ //založení třídy kocka, která dědědí ze zvířete
    constructor(zvuk, jmeno){
        super(zvuk, "kočka", jmeno) //vždycky v této třídě bude kočka, nemusíme nijak přijímat "zvíře" a proto tam dám natvrdo "kočka"
    }
}

var pesObj = new pes("štěk", "žeryk", "Německý ovčák"); //založení objektu třídy pes
pesObj.vypisJmeno(); //vypíše "jmenuju se žeryk"
pesObj.vydejZvuk(); //vypíše "pes dělá tento zvuk štěk"
pesObj.vypisRasu(); //vypíše "tento pes má rasu: Německý ovčák"

var kockaObj = new kocka("mňau", "micka"); //založení objektu třídy kočka
kockaObj.vypisJmeno(); //vypíše "jmenuju se micka"
kockaObj.vydejZvuk(); //vypíše "kočka dělá tento zvuk mňau"