function validaceData(){
    const regEx = /\d{2}\.\d{2}\. \d{4}/
    var text = document.getElementById("textForm").value 
    if (text.match(regEx)){
        document.getElementById("validace").textContent = "validní"
    } 
    else{
        document.getElementById("validace").textContent = "nevalidní"
    }
}