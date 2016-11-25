//datastruktur på liste over hytter: hytteliste[hytte[karfunksjon(koordinater), område, hyttenavn, bildested, beskrivelse, ID, høydemeter, fasiliteter]].
var hytter = [
  /*[L.latLng(60.535, 5.924722), "bergsdalen", "Høgabu", "img/hogabu.jpg", "beskrivelse av hogabu", 0, 900],
  [L.latLng(60.536944, 6.079167), "bergsdalen", "Alexander Grieghytten", "img/alexgrieg.jpg", "beskrivelse av alexgrieg", 1, 600],
  [L.latLng(60.500833, 5.960278), "bergsdalen", "Gullhorgabu", "img/gullhorgabu.jpg", "beskrivelse av gullhorgabu", 2, 840],
  [L.latLng(60.473889, 6.075278), "bergsdalen", "Vending", "img/vending.jpg", "beskrivelse av vending", 3, 820],
  [L.latLng(60.514602, 6.201278), "bergsdalen", "Kiellandbu", "img/kiellandbu.jpg", "beskrivelse", 4, 913],
  [L.latLng(60.465862, 6.125688), "bergsdalen", "Breidablik", "img/breidablik.jpg", "beskrivelse", 5, 1322]*/
  [L.latLng(60.535, 5.924722), "bergsdalen", "Høgabu", "img/hogabu.jpg", "Høgabu er en av turlagets eldste hytter. Den ligger fint til i siden over Tjøranadalsvatnet, med flott utsyn mot Trollaskardet mot sørøst og Bukkafjellet bak. Kneisende opp ved hytten, ligger Bergsbukken. I Tjørnadalsvatnet kan man få fisk av varierende størrelse, iblant kan den være av bra størrelse.", 0, 900, "<p>Selvbetjent hele året.</p><p>26 senger.</p>"],
  [L.latLng(60.536944, 6.079167), "bergsdalen", "Alexander Grieghytten", "img/alexgrieg.jpg", "beskrivelse av alexgrieg", 1, 600, "<p>Ubetjent hele året.</p><p>Må låne nøkkel.</p><p>34 sengeplasser.</p>"],
  [L.latLng(60.500833, 5.960278), "bergsdalen", "Gullhorgabu", "img/gullhorgabu.jpg", "beskrivelse av gullhorgabu", 2, 840, "<p>Selvbetjent hele året.</p><p>34 sengeplasser.</p>"],
  [L.latLng(60.473889, 6.075278), "bergsdalen", "Vending", "img/vending.jpg", "beskrivelse av vending", 3, 820, "<p>Selvbetjent hele året.</p><p>30 sengeplasser.</p>"],
  [L.latLng(60.514602, 6.201278), "bergsdalen", "Kiellandbu", "img/kiellandbu.jpg", "beskrivelse", 4, 913, "<p>Ubetjent hele året.</p><p>5 sengeplasser.</p>"],
  [L.latLng(60.465862, 6.125688), "bergsdalen", "Breidablik", "img/breidablik.jpg", "beskrivelse", 5, 1160, "<p>Ubetjent.</p><p>Stengt fra 19. sep til 1. juli.</p><p>10 sengeplasser.</p>"],
    [L.latLng(60.090833, 6.343056), "folgefonna", "Breidablikk", "img/breidablik.jpg", "beskrivelse", 6, 1322, "Ubetjent hele året. 4 sengeplasser. "],
    [L.latLng(60.076667, 6.347778), "folgefonna", "Fonnabu", "img/breidablik.jpg", "beskrivelse", 7, 1450, "Selvbetjent hele året, 27 sengeplasser"]
];

//struktur på startsteder: startSteder[startsted[kartfunksjon(koordinater), beskrivelse, ID]]
//hver hytte har ett designert startsted dersom man kun har valgt 1 hytte i hyttevelgeren
var startSteder = [
  [L.latLng(60.571399, 5.949952), "Lid i bergsdalen.", 0],
  [L.latLng(60.534741, 6.074092), "Parkeringsplass ved Bergsdalsvegen.", 1],
  [L.latLng(60.544582, 6.030346), "Småbrekkene i bergsdalen.", 2],
  [L.latLng(60.534741, 6.074092), "Fra hovedveien.", 3],
  [L.latLng(60.560545, 6.208481), "Hodnaberg i enden av hamlagrøvatnet.", 4],
  [L.latLng(60.534741, 6.074092), "Parkeringsplass ved Bergdalsvegen.", 5]
];
