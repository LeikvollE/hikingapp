/*var locations = [
    {navn: 'Vending', location: L.latLng(60.473889, 6.075278)},
    []
];*/ //kommentert ut pga eirik ikke har sagt hva variabelen er til.

//objekter må inneholde: koordinater, sted (bergsdalen), bilde av hytte, beskrivelse av hyttefasiliteter og området rundt.
//datastruktur på liste over hytter: hytteliste[hytte[egenskaper]]. elementene til hytte er [sted, location, bilde, beskrivelse]

var hytter = [
  ["L.latLng(60.535, 5.924722)", "bergsdalen", "høgabu", "img/hogabu.jpg", "beskrivelse av hogabu"],
  ["L.latLng(60.536944, 6.079167)", "bergsdalen", "alexander grieg", "img/alexgrieg.jpg", "beskrivelse av alexgrieg"],
  ["L.latLng(60.500833, 5.960278)", "bergsdalen", "gullhorgabu", "img/gullhorgabu.jpg", "beskrivelse av gullhorgabu"],
  ["L.latLng(60.473889, 6.075278)", "bergsdalen", "vending", "img/vending.jpg", "beskrivelse av vending"],
  ["L.latLng(60.473889, 6.075278)", "dal", "vending", "img/vending.jpg", "beskrivelse av vending"]
]; //bruker annet sted enn bergsdalen på siste element

/*var hogabu = {
    location: L.latLng(60.535, 5.924722),
    sted: "bergsdalen",
    picture: "img/hogabu.jpg",
    description: "beskrivelse av hogabu"
};

var alexgrieg = {
    location: L.latLng(60.536944, 6.079167),
    sted: "bergsdalen",
    picture: "img/alexgrieg.jpg",
    description: "beskrivelse av alexgrieg"
};

var gullhorgabu = {
    location: L.latLng(60.500833, 5.960278),
    sted: "bergsdalen",
    picture: "img/gullhorgabu.jpg",
    description: "beskrivelse av gullhorgabu"
};

var vending = {
    location: L.latLng(60.473889, 6.075278),
    sted: "bergsdalen",
    picture: "img/vending.jpg",
    description: "beskrivelse av vending"
}
*/
