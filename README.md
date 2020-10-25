# FrontendTest
Delocal Zrt. - Frontend fejlesztői teszt

A feladat egy Node.js szerveren futó colorpicker app fejlesztése a Colourlovers API használatával - http://www.colourlovers.com/ 

![sample](https://s3.amazonaws.com/assets-github/repo/progcode/img/ColourLovers+Live+Desktop.png)

# Todo

Fejlessz egy olyan appot, ami egy `npm install` / `npm run` parancs után elindít egy lokális szervert (3000 porton) a következő feltételekkel:

 - Az alkalmazás böngésző független, a népszerű böngészőkön hibátlanul fut
 - Az alkalmazás **mobile-first** és responsive szemlélettel készült
 - Az alkalmazás egyszerre betölt 10 palettát a Colourlovers-ről
 - Az alkalmazás scroll eventre betölt újabb 10 palettát
 
# Technikai segítség
**API hívás**:  `http://www.colourlovers.com/api/palettes/new?format=json`

**API válasz:**

     {
        "id": 3896580,
        "title": "Tequila Sunrise",
        "userName": "peachcreativeco",
        "numViews": 11,
        "numVotes": 3,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2015-10-09 10:15:22",
        "colors": [
          "9F1F63",
          "D61B5B",
          "F6DC32",
          "F69C1F",
          "67B7A8"
        ],
        "description": "A refreshing tropical palette reminiscent of umbrella cocktails...",
        "url": "http://www.colourlovers.com/palette/3896580/Tequila_Sunrise",
        "imageUrl": "http://www.colourlovers.com/paletteImg/9F1F63/D61B5B/F6DC32/F69C1F/67B7A8/Tequila_Sunrise.png",
        "badgeUrl": "http://www.colourlovers.com/images/badges/p/3896/3896580_Tequila_Sunrise.png",
        "apiUrl": "http://www.colourlovers.com/api/palette/3896580"
      }
**Az alkalmazásban meg kell jeleníteni:**

 - Paletta neve
 - Paletta készítője
 - Dátum
 - Értékelések (likes)
 
# Technikai feltételek
 - Az alkalmazás `npm install / npm run` paranccsal indítható
 - Az alkalmazás a **3000** portot használja
 - Mobile-first, responsive
 - A megvalósításhoz **NEM** használható jQuery!
 - A kód Githubon elérhető, jól dokumentált, hibamentesen működik
 
 A fejlesztésre a feladat átadásától számítva 2 nap áll rendelkezésre.

