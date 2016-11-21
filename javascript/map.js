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