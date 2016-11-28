//datastruktur på liste over hytter: hytteliste[hytte[karfunksjon(koordinater), område, hyttenavn, bildested, beskrivelse, ID, høydemeter, fasiliteter]].
var hytter = [
    [L.latLng(60.535, 5.924722), "bergsdalen", "Høgabu", "img/hogabu.jpg", "Høgabu er en av turlagets eldste hytter. Den ligger fint til i siden over Tjøranadalsvatnet, med flott utsyn mot Trollaskardet mot sørøst og Bukkafjellet bak. Kneisende opp ved hytten, ligger Bergsbukken. I Tjørnadalsvatnet kan man få fisk av varierende størrelse, iblant kan den være av bra størrelse.", 0, 900, "<p>Selvbetjent hele året.</p><p>26 senger.</p>", '<i class="fa fa-table"></i>Hundebur <i class="fa fa-fire"></i>Vedovn'],
    [L.latLng(60.536944, 6.079167), "bergsdalen", "Alexander Grieghytten", "img/alexgrieg.jpg", "Området rundt Alexander Grieghytten har en rekke turmuligheter. Hamlagrøhornet og Krampane nord for hytten, og Kjerringafjellet og Storliknausen sør for hytten, er alle flotte toppturmål. Førstnevnte er mye benyttet som utflukt for de de yngste turgåerne (barneskolealder). Vinterstid er det lett og fint skiterreng fra Hamlagrøosen og sørover mot Fugladalen.", 1, 600, "<p>Ubetjent hele året.</p><p>Må låne nøkkel.</p><p>34 sengeplasser.</p>", '<i class="fa fa-table"></i>Hundebur <i class="fa fa-fire"></i>Vedovn <i class="fa fa-shower"></i>Dusj'],
  [L.latLng(60.500833, 5.960278), "bergsdalen", "Gullhorgabu", "img/gullhorgabu.jpg", "Gullhorgabu ligger ca. 3 timers gange fra bilvei i Bergsdalen. Stien går på den kulturhistoriske vegen Militærvegen, som ble bygget som transportvei mellom Voss og Samnanger i slutten av 1920-årene, gjør i dag tjeneste som god tursti. Det er en fin tur både for store og små. Her kan man stedvis gå ved siden av hverandre, gjennom et variert, spennende og samtidig lettgått terreng.  Beregn lenger tid går du med barn.", 2, 840, "<p>Selvbetjent hele året.</p><p>34 sengeplasser.</p>"],
  [L.latLng(60.473889, 6.075278), "bergsdalen", "Vending", "img/vending.jpg", "Rundt Vending er det et ypperlig turterreng både sommer og vinter. Fuglafjell. Geitafjell og Skrott er flotte dagsturmål fra hytten. Ta med fiskestang, og går du med barn, ligg over en dag og kos dere i området. En av de fineste turene man kan gå i dette området, er fra Hamlagrø, overnatting på Vending og derfra til Botnen.", 3, 820, "<p>Selvbetjent hele året.</p><p>30 sengeplasser.</p>"],
  [L.latLng(60.514602, 6.201278), "bergsdalen", "Kiellandbu", "img/kiellandbu.jpg", "Kiellandbu ligger flott til på Løkjedalsnuten med imponerende utsikt mot Botnen, Fyksesund og mot Folgefonna på andre siden av Hardangerfjorden. Om sommeren nås hytten fra Hamlagrø, Hodnaberg i Bergsdalen, og fra Botnen i Fyksesund på t-merkede stier.", 4, 913, "<p>Ubetjent hele året.</p><p>5 sengeplasser.</p>"],
  [L.latLng(60.465862, 6.125688), "bergsdalen", "Breidablik", "img/breidablik.jpg", "Hytteanlegget Breidablik ligger ligger høyt over Fitjadalen i Kvam og er et av landets mest egenartede hytteanlegg med en fantastisk beliggenhet og et stort rundskue. Fra Vending kan man ta dagstur opp til hytten, mens fra Hamlagrøosen er det greit å ta med seg litt god mat og overnatte. Fra Breidablik kan man ta en kveldstur til Skrott. Uansett er dette stedet verdt en overnatting, og topptur til Skrott setter en ekstra spiss på turen.", 5, 1160, "<p>Ubetjent.</p><p>Stengt fra 19. sep til 1. juli.</p><p>10 sengeplasser.</p>"],
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
