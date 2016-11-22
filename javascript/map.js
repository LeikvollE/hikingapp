//Hoved variabel for kartet, kartet lages i div-en med id 'map'
//Setter kartet sin fokus over Hordaland
var map = L.map('map').setView([60.535, 5.924722], 10);

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