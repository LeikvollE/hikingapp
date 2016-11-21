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

function skrivUtHytter(liste){
    for(var i = 0; i < liste.length; i++){
        for(var j = 0; j < liste[i].length; j++){
            console.log("" + liste[i][j]);
        }
    }
}
