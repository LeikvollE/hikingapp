var redMarker = L.AwesomeMarkers.icon({ //Ikon for kart markøren for hytter
    icon: 'home',
    prefix: 'fa',
    markerColor: '#d82d20'
});

var blueMarker = L.AwesomeMarkers.icon({ //Ikon for kartmakøren til startsteder
    icon: 'car',
    prefix: 'fa',
    markerColor: 'blue'
});

function tegnPins() { //Blir kalt når siden laster, tegner markørene på kartet.
    var antHytter = hytter.length;
    var antStartTeder = startSteder.length;
    
    for(var i = 0; i < antStartTeder; i++){
        var marker = L.marker(startSteder[i][0], {icon: blueMarker}).bindPopup("<b>" + startSteder[i][1] + "</b>").addTo(map); //Setter en markør på kartet der hytte nr. i ligger
    }
    
    for(var i=0; i < antHytter; i++){
        var marker = L.marker(hytter[i][0], {icon: redMarker}).bindPopup("<b>" + hytter[i][2] + "</b>").addTo(map); //Setter en markør der startsted i ligger
    }
}
