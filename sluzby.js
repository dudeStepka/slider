function selectTable() {
    let selectedPravo = document.forms[0].Sluzba.selectedIndex;

    switch (selectedPravo) {
        case 1:
            turnOff();
            document.getElementById("CizineckePravo").style.display = "block";
            break;

        case 2:
            turnOff();
            document.getElementById("AutorskePravo").style.display = "block";
            break;


            // case 2:
            //     ;
            //     turnOff();
            //     break;

            // case 3:
            //     ;
            //     turnOff();
            //     break;

            // case 4:
            //     ;
            //     turnOff();
            //     break;

            // case 5:
            //     ;
            //     turnOff();
            //     break;

            // case 6:
            //     turnOn();
            //     break;

    }

}

function turnOff() {
    document.getElementById("CizineckePravo").style.display = "none";
    document.getElementById("AutorskePravo").style.display = "none";
    // document.getElementById("CizineckePravo").style.display = "none";
    // document.getElementById("CizineckePravo").style.display = "none";

}