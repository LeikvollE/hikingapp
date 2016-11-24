//objekter må inneholde: koordinater, sted (bergsdalen), bilde av hytte, beskrivelse av hyttefasiliteter og området rundt.
//datastruktur på liste over hytter: hytteliste[hytte[karfunksjon(koordinater), område, hyttenavn, bildested, beskrivelse, ID, høydemeter]].
var hytter = [
  [[60.535, 5.924722], "bergsdalen", "Høgabu", "img/hogabu.jpg", "beskrivelse av hogabu", 0, 900],
  [L.latLng(60.536944, 6.079167), "bergsdalen", "Alexander Grieghytten", "img/alexgrieg.jpg", "beskrivelse av alexgrieg", 1, 600],
  [L.latLng(60.500833, 5.960278), "bergsdalen", "Gullhorgabu", "img/gullhorgabu.jpg", "beskrivelse av gullhorgabu", 2, 840],
  [L.latLng(60.473889, 6.075278), "bergsdalen", "Vending", "img/vending.jpg", "beskrivelse av vending", 3, 820],
  [L.latLng(60.514602, 6.201278), "bergsdalen", "Kiellandbu", "img/kiellandbu.jpg", "beskrivelse", 4, 913],
  [L.latLng(60.465862, 6.125688), "bergsdalen", "Breidablik", "img/breidablik.jpg", "beskrivelse", 5, 1322]
];

//struktur på startsteder: startSteder[startsted[kartfunksjon(koordinater), beskrivelse, ID]]
//hver hytte har ett designert startsted dersom man kun har valgt 1 hytte i hyttevelgeren
var startSteder = [
  [L.latLng(60.571399, 5.949952), "Lid i bergsdalen", 0],
  [L.latLng(60.534741, 6.074092), "Parkeringsplass ved Bergsdalsvegen", 1],
  [L.latLng(60.544582, 6.030346), "Småbrekkene i bergsdalen", 2],
  [L.latLng(60.534741, 6.074092), "Fra hovedveien", 3],
  [L.latLng(60.560545, 6.208481), "Hodnaberg i enden av hamlagrøvatnet", 4],
  [L.latLng(60.534741, 6.074092), "Parkeringsplass ved Bergdalsvegen", 5]
];
