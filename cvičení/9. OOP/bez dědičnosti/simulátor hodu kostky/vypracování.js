class kostka {
    hod() {
        return Math.ceil(Math.random() * 6); 
    }
}

function hozeni(){
    var kost = new kostka();
    document.getElementById("vysledek").textContent = kost.hod()
}