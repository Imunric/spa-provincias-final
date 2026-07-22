const Provincia = require('../models/provincia');

// Obtener todas las provincias
const getAllProvincias = async (req, res) => {
  try {
    const provincias = await Provincia.findAll();
    res.json(provincias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las provincias' });
  }
};

// Obtener una provincia por su id
const getProvinciaById = async (req, res) => {
  try {
    const provincia = await Provincia.findByPk(req.params.id);
    if (!provincia) {
      return res.status(404).json({ error: 'Provincia no encontrada' });
    }
    res.json(provincia);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la provincia' });
  }
};

// Obtener una provincia por su slug
const getProvinciaBySlug = async (req, res) => {
  try {
    const provincia = await Provincia.findOne({
      where: { slug: req.params.slug }
    });

    if (!provincia) {
      return res.status(404).json({ error: "Provincia no encontrada" });
    }

    res.json(provincia);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la provincia" });
  }
};

// Crear una provincia
const createProvincia = async (req, res) => {
  try {
    const provincia = await Provincia.create(req.body);
    res.status(201).json(provincia);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la provincia' });
  }
};

// Modificar una provincia por id
const updateProvincia = async (req, res) => {
  try {
    const provincia = await Provincia.findByPk(req.params.id);
    if (!provincia) {
      return res.status(404).json({ error: 'Provincia no encontrada' });
    }
    await provincia.update(req.body);
    res.json(provincia);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la provincia' });
  }
};

// Modificar una provincia por su slug
const updateProvinciaBySlug = async (req, res) => {
  try {
    const provincia = await Provincia.findOne({
      where: { slug: req.params.slug }
    });

    if (!provincia) {
      return res.status(404).json({ error: "Provincia no encontrada" });
    }

    await provincia.update(req.body);
    res.json(provincia);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la provincia" });
  }
};

// Eliminar una provincia por id
const deleteProvincia = async (req, res) => {
  try {
    const provincia = await Provincia.findByPk(req.params.id);
    if (!provincia) {
      return res.status(404).json({ error: 'Provincia no encontrada' });
    }
    await provincia.destroy();
    res.json({ mensaje: 'Provincia eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la provincia' });
  }
};

// Eliminar una provincia por su slug
const deleteProvinciaBySlug = async (req, res) => {
  try {
    const provincia = await Provincia.findOne({
      where: { slug: req.params.slug }
    });

    if (!provincia) {
      return res.status(404).json({ error: "Provincia no encontrada" });
    }

    await provincia.destroy();
    res.json({ message: "Provincia eliminada" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la provincia" });
  }
};

module.exports = {
  getAllProvincias,
  //getProvinciaById,
  getProvinciaBySlug,
  createProvincia,
  //updateProvincia,
  //deleteProvincia
  updateProvinciaBySlug,
  deleteProvinciaBySlug
};