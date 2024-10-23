function helloWorld() {
    var b = document.getElementById("hello").innerHTML === "Dit is een test!"; // 3 keer = is om te kijken of de waarde en het datatype gelijk zijn

    if (b) {
        document.getElementById("hello").innerHTML = "Hello World!";
    }
    else {
        document.getElementById("hello").innerHTML = "Dit is een test!";
    }
}

function darkLight(){
    var element = document.body; //alle info in de body opslagen voor later gebruik
    var tijd = (new Date()).getHours(); //haalt enkel de uren op van de huidige tijd

    if (tijd > 20){
        element.classList.toggle("dark-mode"); //dark-mode wordt toegepast
    }
    else {
        element.classList.toggle("light-mode"); //light-mode wordt toegepast
    }

    //element.classList.toggle("dark-mode"); //toggle tussen dark-mode en light-mode
    // doorzoekt classes die gelinkt kunnen worden aan de body 
    // indien darkmode niet is toegespast, zal deze toegepast worden, anders uit
}

function kleurInvert(){
    document.getElementById("Hw").style.filter = "invert(1)";
}

function kleurNormaal(){
    document.getElementById("Hw").style.filter = "invert(0)";
}

function saveInputPrintOutput(){
    var n = document.getElementById("naam").value;
    var p = document.getElementById("paswoord").value;
    document.getElementById("output").innerHTML = "Naam: " + n + " Wachtwoord: " + p;
}

function forLoop(){
    var som = 0;
    var getal = document.getElementById("n").value;
    for (i = 0; i <= getal; i++) {
        sum += i; // som = som + i
    }
    document.getElementById("outputSom").innerHTML = som;
}

function datum(){
    var datum = new Date();
    var vandaag = datum.getDate() + "/" + (datum.getMonth()+1) + "/" + datum.getFullYear();
    document.getElementById("outputDatum").innerHTML = vandaag;
}