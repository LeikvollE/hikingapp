//Div-en som skal vise informasjon om hyttene
var hyttediv = document.getElementById("listemedhytter");

function finnHytter() { //funksjon for å generere liste over hytter
  var areaSelect = document.getElementById("areaSelect");
  var sted = areaSelect.options[areaSelect.selectedIndex].value;
  var hytteliste = [];

  for (var i = 0; i < hytter.length; i++) {
    var j = 0;
    if (hytter[i][1] === sted) {
      hytteliste.push(hytter[i]);
    }
  }
  skrivUtHytter(hytteliste);
}

//Midlertidig funksjon for å skrive ut hytter på siden
function skrivUtHytter(liste){
    hyttediv.innerHTML = "";
    for(var i = 0; i < liste.length; i++){
        //for(var j = 0; j < liste[i].length; j++){
            //Skriver foreløpig bare ut navnet på hytten, formatering må gjøres f.eks. Stor bokstav i navnet til hytten
            hyttediv.innerHTML += '<div class="hytter">' + liste[i][2] + '</div>';
        //}
    }
}
