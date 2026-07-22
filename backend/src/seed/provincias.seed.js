const Provincia = require('../models/provincia');

const provincias = [
  {
    id: 1,
    nombre: 'Albacete',
    slug: 'albacete',
    comunidad: 'Castilla-La Mancha',
    capital: 'Albacete',
    habitantes: 390751,
    superficie: 14926,
    imagen_mapa: 'img/mapas/Albacete.webp',
    imagen_escudo: 'img/escudos/Escudo_provincia_Albacete.webp'
  },
  {
    id: 2,
    nombre: 'Ciudad Real',
    slug: 'ciudad-real',
    comunidad: 'Castilla-La Mancha',
    capital: 'Ciudad Real',
    habitantes: 495045,
    superficie: 19813,
    imagen_mapa: 'img/mapas/CiudadReal.webp',
    imagen_escudo: 'img/escudos/Escudo_provincia_Ciudad_Real.webp'
  },
  {
    id: 3,
    nombre: 'Cuenca',
    slug: 'cuenca',
    comunidad: 'Castilla-La Mancha',
    capital: 'Cuenca',
    habitantes: 199859,
    superficie: 17141,
    imagen_mapa: 'img/mapas/Cuenca.webp',
    imagen_escudo: 'img/escudos/Escudo_provincia_Cuenca.webp'
  },
  {
    id: 4,
    nombre: 'Guadalajara',
    slug: 'guadalajara',
    comunidad: 'Castilla-La Mancha',
    capital: 'Guadalajara',
    habitantes: 285839,
    superficie: 12167,
    imagen_mapa: 'img/mapas/Guadalajara.webp',
    imagen_escudo: 'img/escudos/Escudo_provincia_Guadalajara.webp'
  },
  {
    id: 5,
    nombre: 'Toledo',
    slug: 'toledo',
    comunidad: 'Castilla-La Mancha',
    capital: 'Toledo',
    habitantes: 755081,
    superficie: 15369,
    imagen_mapa: 'img/mapas/Toledo.webp',
    imagen_escudo: 'img/escudos/Escudo_provincia_Toledo.webp'
  }
];

async function seedProvincias() {
  await Provincia.bulkCreate(provincias, { ignoreDuplicates: true });
  console.log('Provincias insertadas correctamente');
}

module.exports = seedProvincias;