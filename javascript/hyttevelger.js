//Div-en som skal vise informasjon om hyttene
var hyttediv = document.getElementById("listemedhytter");
var valgteHytter = [];

function finnHytter() { //funksjon for å generere liste over hytter
    var areaSelect = document.getElementById("areaSelect"); //dropdown for turområde
    var sted = areaSelect.options[areaSelect.selectedIndex].value; //henter valgt område
    var hytteliste = []; //variabel for hytter i valgt område

    for (var i = 0; i < hytter.length; i++) { //går gjennom alle hyttene til turlaget og legger til de som ligger i valgt område til hyttelisten.
        if (hytter[i][1] === sted) {
            hytteliste.push(hytter[i]);
        }
    }
    skrivUtHytter(hytteliste);
}

//Midlertidig funksjon for å skrive ut hytter på siden
function skrivUtHytter(liste) {
    hyttediv.innerHTML = "";  //tømmer innhold i hyttediv

    for (var i = 0; i < liste.length; i++) {  //skriver ut alle elementer i liste over hytter
        hyttediv.innerHTML += '<div class="hytter" onclick="hytteInfo(' + liste[i][5] + ')" id="hytte' + liste[i][5] + '"><img src="' + liste[i][3] + '"><b>' + liste[i][2] + '</b></div>';
    }
}

//funksjon for å skrive ut info om valgt hytte.
function hytteInfo(hytteId) {
    var infohytte1 = document.getElementById("infohytte1");         //elementet til info om hytte 1 og 2
    var infohytte2 = document.getElementById("infohytte2");
    var hytteElement = document.getElementById("hytte" + hytteId);

    for (var i = 0; i < hytter.length; i++) { //skriver ut i infoboksen. kun hytte 1 foreløpig.
        if (hytter[i][5] === hytteId) {
            if(erValgt(hytter[i])){  //sjekker om hytte[i] er valgt fra før. fjerner i det tilfellet klassen "valgt" for å endre utseendet.
                hytteElement.className = hytteElement.className.replace(/\bvalgt\b/,'');
                if (hytter[i][5]===valgteHytter[0][5]) {  //
                  valgteHytter.splice(0,1);
                }else {
                  valgteHytter.splice(1,1);
                }
                break;
            }else {
              hytteElement.className += " valgt"; //legger til klassen "valgt" på hytter som er valgt for å endre utseendet.
            }

            if(valgteHytter.length === 2){          //dersom 2 hytter er valgt fra før, fjernes den siste fra arrayet. ellers blir den nye hytta lagt til i arrayet
                document.getElementById("hytte" + valgteHytter[0][5]).className = document.getElementById("hytte" + valgteHytter[0][5]).className.replace(/\bvalgt\b/,'');
                valgteHytter[0] = valgteHytter[1];
                valgteHytter.pop();
                valgteHytter.push(hytter[i])
            } else {
                valgteHytter.push(hytter[i]);
            }
            break;
        }
    }

    infohytte1.innerHTML = "<center><b>" + valgteHytter[0][2] + "</b></center><br>" + "<center>" + valgteHytter[0][4] + "</center>"; //legger til info i infoboksen
    if (valgteHytter.length === 2) {    //dersom 2 hytter er valgt blir info om begge lagt til i infoboksen.
      infohytte2.innerHTML = "<center><b>" + valgteHytter[1][2] + "</b></center><br>" + "<center>" + valgteHytter[1][4] + "</center>";
    }

    if(valgteHytter.length === 2){    //tegner inn rute på kart dersom 2 hytter er valgt
        routeControl.setWaypoints([
            valgteHytter[0][0],
            valgteHytter[1][0]
        ]);
    }else {
      for (var i = 0; i < startSteder.length; i++) {  //finner startsted for tur til hytte dersom kun 1 hytte er valgt
        if (startSteder[i][2] === valgteHytter[0][5]) {
          routeControl.setWaypoints([
              valgteHytter[0][0],
              startSteder[i][0]
          ]);
        }
      }
    }
}

function erValgt(hytte) {                 //sjekker om hytte er valgt
    var ant = valgteHytter.length;
    for(var i = 0; i < ant; i++) {
        if (valgteHytter[i][5] === hytte[5]) return true;
    }
    return false;
}
