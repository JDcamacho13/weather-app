const newCodes = [
  {
    code: 1000,
    day: 'Sunny',
    night: 'Clear',
    icon: "01",
    day_es: 'Soleado',
    night_es: 'Despejado'
  },
  {
    code: 1003,
    day: 'Partly Cloudy',
    night: 'Partly Cloudy',
    icon: "02",
    day_es: 'Parcialmente nublado',
    night_es: 'Parcialmente nublado'
  },
  {
    code: 1006,
    day: 'Cloudy',
    night: 'Cloudy',
    icon: "02",
    day_es: 'Nublado',
    night_es: 'Nublado'
  },
  {
    code: 1009,
    day: 'Overcast',
    night: 'Overcast',
    icon: "03",
    day_es: 'Cielo cubierto',
    night_es: 'Cielo cubierto'
  },
  {
    code: 1030,
    day: 'Mist',
    night: 'Mist',
    icon: "50",
    day_es: 'Neblina',
    night_es: 'Neblina'
  },
  {
    code: 1063,
    day: 'Patchy rain nearby',
    night: 'Patchy rain nearby',
    icon: "09",
    day_es: 'Lluvia  moderada a intervalos',
    night_es: 'Lluvia  moderada a intervalos'
  },
  {
    code: 1066,
    day: 'Patchy snow nearby',
    night: 'Patchy snow nearby',
    icon: "13",
    day_es: 'Nieve moderada a intervalos en las aproximaciones',
    night_es: 'Nieve moderada a intervalos en las aproximaciones'
  },
  {
    code: 1069,
    day: 'Patchy sleet nearby',
    night: 'Patchy sleet nearby',
    icon: "13",
    day_es: 'Aguanieve moderada a intervalos en las aproximaciones',
    night_es: 'Aguanieve moderada a intervalos en las aproximaciones'
  },
  {
    code: 1072,
    day: 'Patchy freezing drizzle nearby',
    night: 'Patchy freezing drizzle nearby',
    icon: "13",
    day_es: 'Llovizna helada a intervalos en las aproximaciones',
    night_es: 'Llovizna helada a intervalos en las aproximaciones'
  },
  {
    code: 1087,
    day: 'Thundery outbreaks in nearby',
    night: 'Thundery outbreaks in nearby',
    icon: "11",
    day_es: 'Cielos tormentosos en las aproximaciones',
    night_es: 'Cielos tormentosos en las aproximaciones'
  },
  {
    code: 1114,
    day: 'Blowing snow',
    night: 'Blowing snow',
    icon: "13",
    day_es: 'Chubascos de nieve',
    night_es: 'Chubascos de nieve'
  },
  {
    code: 1117,
    day: 'Blizzard',
    night: 'Blizzard',
    icon: "13",
    day_es: 'Ventisca',
    night_es: 'Ventisca'
  },
  {
    code: 1135,
    day: 'Fog',
    night: 'Fog',
    icon: "50",
    day_es: 'Niebla moderada',
    night_es: 'Niebla moderada'
  },
  {
    code: 1147,
    day: 'Freezing fog',
    night: 'Freezing fog',
    icon: "13",
    day_es: 'Niebla helada',
    night_es: 'Niebla helada'
  },
  {
    code: 1150,
    day: 'Patchy light drizzle',
    night: 'Patchy light drizzle',
    icon: "10",
    day_es: 'Llovizna a intervalos',
    night_es: 'Llovizna a intervalos'
  },
  {
    code: 1153,
    day: 'Light drizzle',
    night: 'Light drizzle',
    icon: "10",
    day_es: 'Llovizna',
    night_es: 'Llovizna'
  },
  {
    code: 1168,
    day: 'Freezing drizzle',
    night: 'Freezing drizzle',
    icon: "10",
    day_es: 'Llovizna helada',
    night_es: 'Llovizna helada'
  },
  {
    code: 1171,
    day: 'Heavy freezing drizzle',
    night: 'Heavy freezing drizzle',
    icon: "11",
    day_es: 'Fuerte llovizna helada',
    night_es: 'Fuerte llovizna helada'
  },
  {
    code: 1180,
    day: 'Patchy light rain',
    night: 'Patchy light rain',
    icon: "10",
    day_es: 'Lluvias ligeras a intervalos',
    night_es: 'Lluvias ligeras a intervalos'
  },
  {
    code: 1183,
    day: 'Light rain',
    night: 'Light rain',
    icon: "09",
    day_es: 'Ligeras lluvias',
    night_es: 'Ligeras lluvias'
  },
  {
    code: 1186,
    day: 'Moderate rain at times',
    night: 'Moderate rain at times',
    icon: "10",
    day_es: 'Periodos de lluvia moderada',
    night_es: 'Periodos de lluvia moderada'
  },
  {
    code: 1189,
    day: 'Moderate rain',
    night: 'Moderate rain',
    icon: "10",
    day_es: 'Lluvia moderada',
    night_es: 'Lluvia moderada'
  },
  {
    code: 1192,
    day: 'Heavy rain at times',
    night: 'Heavy rain at times',
    icon: "10",
    day_es: 'Periodos de fuertes lluvias',
    night_es: 'Periodos de fuertes lluvias'
  },
  {
    code: 1195,
    day: 'Heavy rain',
    night: 'Heavy rain',
    icon: "10",
    day_es: 'Fuertes lluvias',
    night_es: 'Fuertes lluvias'
  },
  {
    code: 1198,
    day: 'Light freezing rain',
    night: 'Light freezing rain',
    icon: '13',
    day_es: 'Ligeras lluvias heladas',
    night_es: 'Ligeras lluvias heladas'
  },
  {
    code: 1201,
    day: 'Moderate or heavy freezing rain',
    night: 'Moderate or heavy freezing rain',
    icon: '13',
    day_es: 'Lluvias heladas fuertes o moderadas',
    night_es: 'Lluvias heladas fuertes o moderadas'
  },
  {
    code: 1204,
    day: 'Light sleet',
    night: 'Light sleet',
    icon: '13',
    day_es: 'Ligeras precipitaciones de aguanieve',
    night_es: 'Ligeras precipitaciones de aguanieve'
  },
  {
    code: 1207,
    day: 'Moderate or heavy sleet',
    night: 'Moderate or heavy sleet',
    icon: '13',
    day_es: 'Aguanieve fuerte o moderada',
    night_es: 'Aguanieve fuerte o moderada'
  },
  {
    code: 1210,
    day: 'Patchy light snow',
    night: 'Patchy light snow',
    icon: '13',
    day_es: 'Nevadas ligeras a intervalos',
    night_es: 'Nevadas ligeras a intervalos'
  },
  {
    code: 1213,
    day: 'Light snow',
    night: 'Light snow',
    icon: '13',
    day_es: 'Nevadas ligeras',
    night_es: 'Nevadas ligeras'
  },
  {
    code: 1216,
    day: 'Patchy moderate snow',
    night: 'Patchy moderate snow',
    icon: '13',
    day_es: 'Nieve moderada a intervalos',
    night_es: 'Nieve moderada a intervalos'
  },
  {
    code: 1219,
    day: 'Moderate snow',
    night: 'Moderate snow',
    icon: '13',
    day_es: 'Nieve moderada',
    night_es: 'Nieve moderada'
  },
  {
    code: 1222,
    day: 'Patchy heavy snow',
    night: 'Patchy heavy snow',
    icon: '13',
    day_es: 'Nevadas intensas',
    night_es: 'Nevadas intensas'
  },
  {
    code: 1225,
    day: 'Heavy snow',
    night: 'Heavy snow',
    icon: '13',
    day_es: 'Fuertes nevadas',
    night_es: 'Fuertes nevadas'
  },
  {
    code: 1237,
    day: 'Ice pellets',
    night: 'Ice pellets',
    icon: '13',
    day_es: 'Granizo',
    night_es: 'Granizo'
  },
  {
    code: 1240,
    day: 'Light rain shower',
    night: 'Light rain shower',
    icon: '09',
    day_es: 'Ligeras precipitaciones',
    night_es: 'Ligeras precipitaciones'
  },
  {
    code: 1243,
    day: 'Moderate or heavy rain shower',
    night: 'Moderate or heavy rain shower',
    icon: '09',
    day_es: 'Lluvias fuertes o moderadas',
    night_es: 'Lluvias fuertes o moderadas'
  },
  {
    code: 1246,
    day: 'Torrential rain shower',
    night: 'Torrential rain shower',
    icon: '09',
    day_es: 'Lluvias torrenciales',
    night_es: 'Lluvias torrenciales'
  },
  {
    code: 1249,
    day: 'Light sleet showers',
    night: 'Light sleet showers',
    icon: '09',
    day_es: 'Ligeros chubascos de aguanieve',
    night_es: 'Ligeros chubascos de aguanieve'
  },
  {
    code: 1252,
    day: 'Moderate or heavy sleet showers',
    night: 'Moderate or heavy sleet showers',
    icon: '13',
    day_es: 'Chubascos de aguanieve fuertes o moderados',
    night_es: 'Chubascos de aguanieve fuertes o moderados'
  },
  {
    code: 1255,
    day: 'Light snow showers',
    night: 'Light snow showers',
    icon: '13',
    day_es: 'Ligeras precipitaciones de nieve',
    night_es: 'Ligeras precipitaciones de nieve'
  },
  {
    code: 1258,
    day: 'Moderate or heavy snow showers',
    night: 'Moderate or heavy snow showers',
    icon: '13',
    day_es: 'Chubascos de nieve fuertes o moderados',
    night_es: 'Chubascos de nieve fuertes o moderados'
  },
  {
    code: 1261,
    day: 'Light showers of ice pellets',
    night: 'Light showers of ice pellets',
    icon: '13',
    day_es: 'Ligeros chubascos acompañados de granizo',
    night_es: 'Ligeros chubascos acompañados de granizo'
  },
  {
    code: 1264,
    day: 'Moderate or heavy showers of ice pellets',
    night: 'Moderate or heavy showers of ice pellets',
    icon: '13',
    day_es: 'Chubascos fuertes o moderados acompañados de granizo',
    night_es: 'Chubascos fuertes o moderados acompañados de granizo'
  },
  {
    code: 1273,
    day: 'Patchy light rain in area with thunder',
    night: 'Patchy light rain in area with thunder',
    icon: '09',
    day_es: 'Intervalos de lluvias ligeras con tomenta en la región',
    night_es: 'Intervalos de lluvias ligeras con tomenta en la región'
  },
  {
    code: 1276,
    day: 'Moderate or heavy rain in area with thunder',
    night: 'Moderate or heavy rain in area with thunder',
    icon: '11',
    day_es: 'Lluvias con tormenta fuertes o moderadas en la región',
    night_es: 'Lluvias con tormenta fuertes o moderadas en la región'
  },
  {
    code: 1279,
    day: 'Patchy light snow in area with thunder',
    night: 'Patchy light snow in area with thunder',
    icon: '11',
    day_es: 'Nieve moderada con tormenta en la región',
    night_es: 'Nieve moderada con tormenta en la región'
  },
  {
    code: 1282,
    day: 'Moderate or heavy snow in area with thunder',
    night: 'Moderate or heavy snow in area with thunder',
    icon: '11',
    day_es: 'Nieve moderada o fuertes nevadas con tormenta en la región',
    night_es: 'Nieve moderada o fuertes nevadas con tormenta en la región'
  }
]

export const getTraducedData = (code) => {
  const traducedData = newCodes.find(item => item.code === code)
  return traducedData
}