function barvy(){
    let element = document.getElementById("tlacitko").style.color //uložíme barvu našeho tlačítka do proměnné "element"
    if (element == "black"){ //když je barva černá, tak se předělá na červenou.. ostatní dělají to stejné jenom s jinými barvy
        zmena("red")
    }
    else if (element == "red"){
        zmena("green")
    }
    else if (element == "green"){
        zmena("blue")
    }
    else if (element == "blue"){
        zmena("black")
    }
}

function zmena(barva){ //funkce, která přijímá brarvu na kterou se má změnit, je to jenom abstrakce aby se psalo méně řádků, mohlo by tam být vždycky jenom getElementById...
    document.getElementById("tlacitko").style.color = barva
}