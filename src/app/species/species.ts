export interface Species {
  name: string;
  imageUrl: string;
}

export function getRandomSpecies() {
  return species[Math.floor(Math.random() * species.length)];
}

const species: Species[] = [
  {
    "name": "AFRICAN POMPANO",
    "imageUrl": "https://myfwc.com/media/13779/africanpompano.jpg"
  },
  {
    "name": "ALMACO JACK",
    "imageUrl": "https://myfwc.com/media/13780/almacojack.jpg"
  },
  {
    "name": "ALTANTIC CROAKER",
    "imageUrl": "https://myfwc.com/media/13784/atlanticcroaker.jpg"
  },
  {
    "name": "AMERICAN SHAD",
    "imageUrl": "https://myfwc.com/media/13781/americanshad.jpg"
  },
  {
    "name": "ATLANTIC BONITO",
    "imageUrl": "https://myfwc.com/media/13782/atlanticbonito.jpg"
  },
  {
    "name": "ATLANTIC BUMPER",
    "imageUrl": "https://myfwc.com/media/13783/atlanticbumper.jpg"
  },
  {
    "name": "ATLANTIC SHARPNOSE SHARK",
    "imageUrl": "https://myfwc.com/media/13785/atlanticsharpnose.jpg"
  },
  {
    "name": "ATLANTIC SPADEFISH",
    "imageUrl": "https://myfwc.com/media/13786/atlanticspadefish.jpg"
  },
  {
    "name": "ATLANTIC THREAD HERRING",
    "imageUrl": "https://myfwc.com/media/13787/atlanticthreadherring.jpg"
  },
  {
    "name": "BALLYHOO",
    "imageUrl": "https://myfwc.com/media/13788/ballyhoo.jpg"
  },
  {
    "name": "BANDED RUDDERFISH",
    "imageUrl": "https://myfwc.com/media/13789/bandedrudderfish.jpg"
  },
  {
    "name": "BANK SEA BASS",
    "imageUrl": "https://myfwc.com/media/13790/bankseabass.jpg"
  },
  {
    "name": "BARRACUDA",
    "imageUrl": "https://myfwc.com/media/13828/greatbarracuda.jpg"
  },
  {
    "name": "BAY ANCHOVY",
    "imageUrl": "https://myfwc.com/media/13791/bayanchovy.jpg"
  },
  {
    "name": "BIGEYE SCAD",
    "imageUrl": "https://myfwc.com/media/13792/bigeyescad.jpg"
  },
  {
    "name": "BLACK DRUM",
    "imageUrl": "https://myfwc.com/media/13793/blackdrum.jpg"
  },
  {
    "name": "BLACK GROUPER",
    "imageUrl": "https://myfwc.com/media/13796/blackgrouper.jpg"
  },
  {
    "name": "BLACK SEA BASS",
    "imageUrl": "https://myfwc.com/media/13798/blackseabass.jpg"
  },
  {
    "name": "BLACKFIN SNAPPER",
    "imageUrl": "https://myfwc.com/media/13794/blackfinsnapper.jpg"
  },
  {
    "name": "BLACKFIN TUNA",
    "imageUrl": "https://myfwc.com/media/13795/blackfintuna.jpg"
  },
  {
    "name": "BLACKNOSE SHARK",
    "imageUrl": "https://myfwc.com/media/13797/blacknoseshark.jpg"
  },
  {
    "name": "BLACKTIP SHARK",
    "imageUrl": "https://myfwc.com/media/13799/blacktipshark.jpg"
  },
  {
    "name": "BLUE MARLIN",
    "imageUrl": "https://myfwc.com/media/13802/bluemarlin.jpg"
  },
  {
    "name": "BLUE RUNNER",
    "imageUrl": "https://myfwc.com/media/13803/bluerunner.jpg"
  },
  {
    "name": "BLUE SHARK",
    "imageUrl": "https://myfwc.com/media/13804/blueshark.jpg"
  },
  {
    "name": "BLUEFIN TUNA",
    "imageUrl": "https://myfwc.com/media/13800/bluefintuna.jpg"
  },
  {
    "name": "BLUEFISH",
    "imageUrl": "https://myfwc.com/media/13801/bluefish.jpg"
  },
  {
    "name": "BONEFISH",
    "imageUrl": "https://myfwc.com/media/13805/bonefish.jpg"
  },
  {
    "name": "BONNETHEAD SHARK",
    "imageUrl": "https://myfwc.com/media/13806/bonnethead.jpg"
  },
  {
    "name": "BULL SHARK",
    "imageUrl": "https://myfwc.com/media/13807/bullshark.jpg"
  },
  {
    "name": "CARIBBEAN REEF SHARK",
    "imageUrl": "https://myfwc.com/media/13808/caribbeanreefshark.jpg"
  },
  {
    "name": "CERO MACKEREL",
    "imageUrl": "https://myfwc.com/media/13809/cero.jpg"
  },
  {
    "name": "COBIA",
    "imageUrl": "https://myfwc.com/media/13810/cobia.jpg"
  },
  {
    "name": "CREVALLE JACK",
    "imageUrl": "https://myfwc.com/media/13812/crevallejack.jpg"
  },
  {
    "name": "CUBERA SNAPPER",
    "imageUrl": "https://myfwc.com/media/13813/cuberasnapper.jpg"
  },
  {
    "name": "DOG SNAPPER",
    "imageUrl": "https://myfwc.com/media/13815/dogsnapper.jpg"
  },
  {
    "name": "DOLPHINFISH",
    "imageUrl": "https://myfwc.com/media/13816/dolphinfish.jpg"
  },
  {
    "name": "DUSKY SHARK",
    "imageUrl": "https://myfwc.com/media/13817/duskyshark.jpg"
  },
  {
    "name": "FANTAIL MULLET",
    "imageUrl": "https://myfwc.com/media/13818/fantailmullet.jpg"
  },
  {
    "name": "FAT SNOOK",
    "imageUrl": "https://myfwc.com/media/13819/fatsnook.jpg"
  },
  {
    "name": "FINETOOTH SHARK",
    "imageUrl": "https://myfwc.com/media/13820/finetooth.jpg"
  },
  {
    "name": "FLORIDA POMPANO",
    "imageUrl": "https://myfwc.com/media/13821/floridapompano.jpg"
  },
  {
    "name": "GAFFTOPSAIL CATFISH",
    "imageUrl": "https://myfwc.com/media/13822/gafftopsailcatfish.jpg"
  },
  {
    "name": "GAG GROUPER",
    "imageUrl": "https://myfwc.com/media/13823/gag.jpg"
  },
  {
    "name": "GOLIATH GROUPER",
    "imageUrl": "https://myfwc.com/media/13824/golaithgrouper.jpg"
  },
  {
    "name": "GRASS PORGY",
    "imageUrl": "https://myfwc.com/media/13825/grassporgy.jpg"
  },
  {
    "name": "GRAY SNAPPER",
    "imageUrl": "https://myfwc.com/media/13826/graysnapper.jpg"
  },
  {
    "name": "GRAY TRIGGERFISH",
    "imageUrl": "https://myfwc.com/media/13827/graytriggerfish.jpg"
  },
  {
    "name": "GREATER AMBERJACK",
    "imageUrl": "https://myfwc.com/media/13829/greateramberjack.jpg"
  },
  {
    "name": "GULF FLOUNDER",
    "imageUrl": "https://myfwc.com/media/13830/gulfflounder.jpg"
  },
  {
    "name": "GULF KINGFISH",
    "imageUrl": "https://myfwc.com/media/13831/gulfkingfish.jpg"
  },
  {
    "name": "GULF MENHADEN",
    "imageUrl": "https://myfwc.com/media/13832/gulfmenhaden.jpg"
  },
  {
    "name": "GULF STURGEON",
    "imageUrl": "https://myfwc.com/media/14400/gulfsturgeon.jpg"
  },
  {
    "name": "HARDHEAD CATFISH",
    "imageUrl": "https://myfwc.com/media/13833/hardheadcatfish.jpg"
  },
  {
    "name": "HOGFISH",
    "imageUrl": "https://myfwc.com/media/13834/hogfish.jpg"
  },
  {
    "name": "HORSE-EYE JACK",
    "imageUrl": "https://myfwc.com/media/13835/horseeyejack.jpg"
  },
  {
    "name": "JOLTHEAD PORGY",
    "imageUrl": "https://myfwc.com/media/13836/joltheadporgy.jpg"
  },
  {
    "name": "KING MACKEREL",
    "imageUrl": "https://myfwc.com/media/13837/kingmackerel.jpg"
  },
  {
    "name": "KNOBBED PORGY",
    "imageUrl": "https://myfwc.com/media/13838/knobbedporgy.jpg"
  },
  {
    "name": "LADYFISH",
    "imageUrl": "https://myfwc.com/media/13839/ladyfish.jpg"
  },
  {
    "name": "LANE SNAPPER",
    "imageUrl": "https://myfwc.com/media/13840/lanesnapper.jpg"
  },
  {
    "name": "LEATHERJACKET",
    "imageUrl": "https://myfwc.com/media/13841/leatherjack.jpg"
  },
  {
    "name": "LEMON SHARK",
    "imageUrl": "https://myfwc.com/media/13842/lemonshark.jpg"
  },
  {
    "name": "LESSER AMBERJACK",
    "imageUrl": "https://myfwc.com/media/13843/lesseramberjack.jpg"
  },
  {
    "name": "LITTLE TUNNY",
    "imageUrl": "https://myfwc.com/media/13846/littletunny.jpg"
  },
  {
    "name": "LITTLEHEAD PORGY",
    "imageUrl": "https://myfwc.com/media/13845/littleheadporgy.jpg"
  },
  {
    "name": "LONGBILL SPEARFISH",
    "imageUrl": "https://myfwc.com/media/13847/longbillspearfish.jpg"
  },
  {
    "name": "LOOKDOWN",
    "imageUrl": "https://myfwc.com/media/13848/lookdown.jpg"
  },
  {
    "name": "MAHOGANY SNAPPER",
    "imageUrl": "https://myfwc.com/media/13849/mahoganysnapper.jpg"
  },
  {
    "name": "MANGROVE RIVULUS",
    "imageUrl": "https://myfwc.com/media/14417/mangroverivulus.jpg"
  },
  {
    "name": "MUTTON SNAPPER",
    "imageUrl": "https://myfwc.com/media/13850/muttonsnapper.jpg"
  },
  {
    "name": "NASSAU GROUPER",
    "imageUrl": "https://myfwc.com/media/13851/nassaugrouper.jpg"
  },
  {
    "name": "NURSE SHARK",
    "imageUrl": "https://myfwc.com/media/13852/nurseshark.jpg"
  },
  {
    "name": "PALOMETA",
    "imageUrl": "https://myfwc.com/media/13853/palometa.jpg"
  },
  {
    "name": "PERMIT",
    "imageUrl": "https://myfwc.com/media/13854/permit.jpg"
  },
  {
    "name": "PIGFISH",
    "imageUrl": "https://myfwc.com/media/13855/pigfish.jpg"
  },
  {
    "name": "PINFISH",
    "imageUrl": "https://myfwc.com/media/13856/pinfish.jpg"
  },
  {
    "name": "QUEEN SNAPPER",
    "imageUrl": "https://myfwc.com/media/13857/queensnapper.jpg"
  },
  {
    "name": "RED DRUM",
    "imageUrl": "https://myfwc.com/media/13859/reddrum.jpg"
  },
  {
    "name": "RED GROUPER",
    "imageUrl": "https://myfwc.com/media/13860/redgrouper.jpg"
  },
  {
    "name": "RED PORGY",
    "imageUrl": "https://myfwc.com/media/13861/redporgy.jpg"
  },
  {
    "name": "RED SNAPPER",
    "imageUrl": "https://myfwc.com/media/13862/redsnapper.jpg"
  },
  {
    "name": "ROCK SEA BASS",
    "imageUrl": "https://myfwc.com/media/13863/rockseabass.jpg"
  },
  {
    "name": "ROUND SCAD",
    "imageUrl": "https://myfwc.com/media/13864/roundscad.jpg"
  },
  {
    "name": "SAILFISH",
    "imageUrl": "https://myfwc.com/media/13865/sailfish.jpg"
  },
  {
    "name": "SALTMARSH TOPMINNOW",
    "imageUrl": "https://myfwc.com/media/14454/saltmarshtopminnow.jpg"
  },
  {
    "name": "SAND PERCH",
    "imageUrl": "https://myfwc.com/media/13867/sandperch.jpg"
  },
  {
    "name": "SAND SEATROUT",
    "imageUrl": "https://myfwc.com/media/13869/sandseatrout.jpg"
  },
  {
    "name": "SAND TIGER SHARK",
    "imageUrl": "https://myfwc.com/media/13870/sandtigershark.jpg"
  },
  {
    "name": "SANDBAR SHARK",
    "imageUrl": "https://myfwc.com/media/13866/sandbarshark.jpg"
  },
  {
    "name": "SCALED SARDINE",
    "imageUrl": "https://myfwc.com/media/13871/scaledsardine.jpg"
  },
  {
    "name": "SCALLOPED HAMMERHEAD SHARK",
    "imageUrl": "https://myfwc.com/media/13872/scallopedhammerhead.jpg"
  },
  {
    "name": "SCAMP",
    "imageUrl": "https://myfwc.com/media/13873/scamp.jpg"
  },
  {
    "name": "SCHOOLMASTER",
    "imageUrl": "https://myfwc.com/media/13874/schoolmaster.jpg"
  },
  {
    "name": "SHEEPSHEAD",
    "imageUrl": "https://myfwc.com/media/13875/sheepshead.jpg"
  },
  {
    "name": "SHORTFIN MAKO SHARK",
    "imageUrl": "https://myfwc.com/media/13876/shortfinmako.jpg"
  },
  {
    "name": "SILK SNAPPER",
    "imageUrl": "https://myfwc.com/media/13877/silksnapper.jpg"
  },
  {
    "name": "SILVER PERCH",
    "imageUrl": "https://myfwc.com/media/13878/silverperch.jpg"
  },
  {
    "name": "SILVER SEATROUT",
    "imageUrl": "https://myfwc.com/media/13879/silverseatrout.jpg"
  },
  {
    "name": "SKIPJACK TUNA",
    "imageUrl": "https://myfwc.com/media/13880/skipjacktuna.jpg"
  },
  {
    "name": "SMALLTOOTH SAWFISH",
    "imageUrl": "https://myfwc.com/media/14457/smalltoothsawfish.jpg"
  },
  {
    "name": "SMOOTH DOGFISH",
    "imageUrl": "https://myfwc.com/media/13881/smoothdogfish.jpg"
  },
  {
    "name": "SNOOK",
    "imageUrl": "https://myfwc.com/media/13811/commonsnook.jpg"
  },
  {
    "name": "SOUTHERN FLOUNDER",
    "imageUrl": "https://myfwc.com/media/13882/southernflounder.png"
  },
  {
    "name": "SOUTHERN KINGFISH",
    "imageUrl": "https://myfwc.com/media/13883/southernkingfish.jpg"
  },
  {
    "name": "SPANISH MACKEREL",
    "imageUrl": "https://myfwc.com/media/13885/spanishmackerel.jpg"
  },
  {
    "name": "SPANISH SARDINE",
    "imageUrl": "https://myfwc.com/media/13886/spanishsardine.jpg"
  },
  {
    "name": "SPINNER SHARK",
    "imageUrl": "https://myfwc.com/media/13887/spinnershark.jpg"
  },
  {
    "name": "SPINY DOGFISH",
    "imageUrl": "https://myfwc.com/media/13888/spinydogfish.jpg"
  },
  {
    "name": "SPOT",
    "imageUrl": "https://myfwc.com/media/13889/spot.jpg"
  },
  {
    "name": "SPOTTAIL PINFISH",
    "imageUrl": "https://myfwc.com/media/13890/spottailpinfish.jpg"
  },
  {
    "name": "SPOTTED SEATROUT",
    "imageUrl": "https://myfwc.com/media/13891/spottedseatrout.jpg"
  },
  {
    "name": "STRIPED ANCHOVY",
    "imageUrl": "https://myfwc.com/media/13892/stripedanchovy.jpg"
  },
  {
    "name": "STRIPED MOJARRA",
    "imageUrl": "https://myfwc.com/media/13893/stripedmojarra.jpg"
  },
  {
    "name": "STRIPED MULLET",
    "imageUrl": "https://myfwc.com/media/13894/stripedmullet.jpg"
  },
  {
    "name": "SWORDFISH",
    "imageUrl": "https://myfwc.com/media/13895/swordfish.jpg"
  },
  {
    "name": "SWORDSPINE SNOOK",
    "imageUrl": "https://myfwc.com/media/13896/swordspinesnook.jpg"
  },
  {
    "name": "TARPON",
    "imageUrl": "https://myfwc.com/media/13897/tarpon.jpg"
  },
  {
    "name": "TARPON SNOOK",
    "imageUrl": "https://myfwc.com/media/13898/tarponsnook.jpg"
  },
  {
    "name": "THRESHER SHARK",
    "imageUrl": "https://myfwc.com/media/13899/threshershark.jpg"
  },
  {
    "name": "TIGER SHARK",
    "imageUrl": "https://myfwc.com/media/13900/tigershark.jpg"
  },
  {
    "name": "TOMTATE",
    "imageUrl": "https://myfwc.com/media/13901/tomtate.jpg"
  },
  {
    "name": "TRIPLETAIL",
    "imageUrl": "https://myfwc.com/media/13902/tripletail.jpg"
  },
  {
    "name": "VERMILION SNAPPER",
    "imageUrl": "https://myfwc.com/media/13903/vermilionsnapper.jpg"
  },
  {
    "name": "WAHOO",
    "imageUrl": "https://myfwc.com/media/13904/wahoo.jpg"
  },
  {
    "name": "WARSAW GROUPER",
    "imageUrl": "https://myfwc.com/media/13905/warsawgrouper.jpg"
  },
  {
    "name": "WEAKFISH",
    "imageUrl": "https://myfwc.com/media/13906/weakfish.jpg"
  },
  {
    "name": "WHITE GRUNT",
    "imageUrl": "https://myfwc.com/media/13907/whitegrunt.jpg"
  },
  {
    "name": "WHITE MARLIN",
    "imageUrl": "https://myfwc.com/media/13908/whitemarlin.jpg"
  },
  {
    "name": "YELLOWFIN GROUPER",
    "imageUrl": "https://myfwc.com/media/13909/yellowfingrouper.jpg"
  },
  {
    "name": "YELLOWFIN MENHADEN",
    "imageUrl": "https://myfwc.com/media/13910/yellowfinmenhaden.jpg"
  },
  {
    "name": "YELLOWFIN TUNA",
    "imageUrl": "https://myfwc.com/media/13911/yellowfintuna.jpg"
  },
  {
    "name": "YELLOWMOUTH GROUPER",
    "imageUrl": "https://myfwc.com/media/13912/yellowmouthgrouper.jpg"
  },
  {
    "name": "YELLOWTAIL SNAPPER",
    "imageUrl": "https://myfwc.com/media/13913/yellowtailsnapper.jpg"
  }
];