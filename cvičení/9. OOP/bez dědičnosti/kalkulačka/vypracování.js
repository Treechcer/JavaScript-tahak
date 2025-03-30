class kalkulacka{
    static add(a,b){
        return a + b
    }
    static sub(a,b){
        return a - b
    }
    static multiply(a,b){
        return a * b
    }
    static devision(a,b){
        if (b == 0){
            return "nelze dělit nulou"
        }
        return a / b
    }
}

function pocitani(){
    var operace = document.getElementById("operace").value;
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var result = 0;
    if (operace == "plus"){
        result = kalkulacka.add(num1, num2);
    }
    if (operace == "minus"){
        result = kalkulacka.sub(num1, num2);
    }
    if (operace == "krat"){
        result = kalkulacka.multiply(num1, num2);
    }
    if (operace == "deleni"){
        result = kalkulacka.devision(num1, num2);
    }

    document.getElementById("vysledek").textContent = result;
}