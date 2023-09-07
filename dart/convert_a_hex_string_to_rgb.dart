/**
When working with color values it can sometimes be useful to extract
the individual red, green, and blue (RGB) component values for a color. 
Implement a function that meets these requirements:

- Accepts a case-insensitive hexadecimal color string as its parameter 
(ex. "#FF9933" or "#ff9933")
- Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51}
where r, g, and b range from 0 through 255

Note: your implementation does not need to support the shorthand form 
of hexadecimal notation (ie "#FFF")

Example
"#FF9933" --> {r: 255, g: 153, b: 51}

*/

Map<String, int> hexToRGB(String hex) {
  // Mapa que contiene los valores hexadecimales en decimal.
  Map<String, int> mapHex = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'a': 10,
    'b': 11,
    'c': 12,
    'd': 13,
    'e': 14,
    'f': 15
  };

  // Conveersión a minúscula.
  String hexU = hex.toLowerCase();

  // Mapa del RGB.
  Map<String, int> mapRGB = {};
  // Conversión de base hexadecimal a decimal.
  mapRGB['r'] = mapHex[hexU[1]]! * 16 + mapHex[hexU[2]]!;
  mapRGB['g'] = mapHex[hexU[3]]! * 16 + mapHex[hexU[4]]!;
  mapRGB['b'] = mapHex[hexU[5]]! * 16 + mapHex[hexU[6]]!;

  // Retornar el mapa RGB.
  return mapRGB;
}
