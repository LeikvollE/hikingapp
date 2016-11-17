var map = L.map('map').setView([60.535, 5.924722], 10);

L.tileLayer('http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norges_grunnkart&zoom={z}&x={x}&y={y}', {
    attribution: '<a href="http://www.kartverket.no/">Kartverket</a>'
}).addTo(map);

L.tileLayer('http://mt3.turistforeningen.no/prod/trail_summer/{z}/{x}/{y}.png', {
    attribution: '<a href="https://www.dnt.no/">DNT</a>'
}).addTo(map);