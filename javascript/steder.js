/*var locations = [
    {navn: 'Vending', location: L.latLng(60.473889, 6.075278)},
    []
];*/ //kommentert ut pga eirik ikke har sagt hva variabelen er til.

//objekter må inneholde: koordinater, sted (bergsdalen), bilde av hytte, beskrivelse av hyttefasiliteter og området rundt.
//datastruktur på liste over hytter: hytteliste[hytte[karfunksjon(koordinater), område, hyttenavn, bildested, beskrivelse, ID]].

var hytter = [
  [L.latLng(60.535, 5.924722), "bergsdalen", "Høgabu", "img/hogabu.jpg", "beskrivelse av hogabu", 0],
  [L.latLng(60.536944, 6.079167), "bergsdalen", "Alexander Grieghytten", "img/alexgrieg.jpg", "beskrivelse av alexgrieg", 1],
  [L.latLng(60.500833, 5.960278), "bergsdalen", "Gullhorgabu", "img/gullhorgabu.jpg", "beskrivelse av gullhorgabu", 2],
  [L.latLng(60.473889, 6.075278), "bergsdalen", "Vending", "img/vending.jpg", "beskrivelse av vending", 3],
  [L.latLng(60.473889, 6.075278), "dal", "vending", "img/vending.jpg", "kopi for å teste hyttevelger", 4],
  [L.latLng(60.514602, 6.201278), "bergsdalen", "Kiellandbu", "img/kiellandbu.jpg", "beskrivelse", 5],
  [L.latLng(60.465862, 6.125688), "bergsdalen", "Breidablik", "img/breidablik.jpg", "beskrivelse", 6]
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
