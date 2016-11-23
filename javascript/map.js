//Hoved variabel for kartet, kartet lages i div-en med id 'map'
//Setter kartet sin fokus over Hordaland
var map = L.map('map').setView([60.535, 5.924722], 10);

var distance;
var time;

//Henter norgeskart fra statkart, og legger det til i kartvariabelen slik at det vises til brukeren
L.tileLayer('http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norges_grunnkart&zoom={z}&x={x}&y={y}', {
    attribution: '<a href="http://www.kartverket.no/">Kartverket</a>' //Inneholder hvem som er eier av kartet
}).addTo(map);

//Henter turiststier fra turistforeningen, og legger det til i kartvariabelen. Siden stiene blir hentet etter norgeskartet vises de over kartet.
L.tileLayer('http://mt3.turistforeningen.no/prod/trail_summer/{z}/{x}/{y}.png', {
    attribution: '<a href="https://www.dnt.no/">DNT</a>'
}).addTo(map);

var routeControl = L.Routing.control({  //Hovedvariabel for rutekontrollen, styrer hvordan rutene kalkuleres og vises på kartet
/*    waypoints: [
        hogabu.location,
        alexgrieg.location
    ],*/
    showAlternatives: true,  //Viser alternative ruter, funker ikke mep mapzen (som vi foreløpig bruker)
    fitSelectedRoutes: true,
    show: false,  //Skjuler veibeskrivelser
    collapsible: false,  //Gjør det umulig å vise veibeskrivelsene
    draggableWaypoints : false,  //Gjør slik at brukeren selv ikke kan endre start/sluttsted på ruten
    addWaypoints : false,  //Gjør slik at brukeren ikke kan legge til flere punkter på ruten
    lineOptions: {  //Stil som ruten vises i
        styles: [
            {
                color: 'white',
                opacity: 0.8,
                weight: 8
            },
            {
                color: '#2676C6',
                opacity: 1,
                weight: 4
            }
        ]
    },
    router: L.Routing.mapzen('mapzen-N1c12tj', {  //API key, vi kan prøve å endre til routing-machine default hvis vi har tid senere
        costing: 'pedestrian'
    }),
    formatter: new L.Routing.mapzenFormatter(),
    summaryTemplate: '<div class="start">{name}</div><div class="info {costing}">{distance}, {time}</div>',  //Egentlig unødvendig siden vi ikke lar brukeren ha mulighet til å vise veibeskrivelser
    routeWhileDragging: false,  //Gjør at vi ikke rekalkulerer ruten hver gang brukeren trykker på den
}).addTo(map);

routeControl.on('routesfound', function (e) {
    distance = e.routes[0].summary.totalDistance;
    time = e.routes[0].summary.totalTime;
    document.getElementById("infotur").innerHTML = "<center><b>Rute</b></center><center>Tid: " + time.toString().toHHMMSS() + "</center><center>Lengde: " + distance.toFixed(1);//"<b>Lengde:</b> " + distance + " km, <b>Tid: </b>" + time.toString().toHHMMSS();
    if(valgteHytter.length === 2){
        document.getElementById("infotur").innerHTML += "<center>Høydeforskjell: " + Math.abs(valgteHytter[1][6] - valgteHytter[0][6]) + "m</center>";
    }
});

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);

    if (hours < 10) {
        hours = "" + hours;
    }
    if (minutes < 10) {
        minutes = "" + minutes;
    }
    if(hours == 0) {
        return minutes + 'min';
    }
    return hours + 't ' + minutes + 'min';
}