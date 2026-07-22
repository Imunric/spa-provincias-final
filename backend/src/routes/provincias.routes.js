const express = require('express');
const router = express.Router();
const controller = require('../controllers/provincias.controller');

router.get('/', controller.getAllProvincias);
//router.get('/:id', controller.getProvinciaById);
router.get("/:slug", controller.getProvinciaBySlug);
router.post('/', controller.createProvincia);
//router.put('/:id', controller.updateProvincia);
//router.delete('/:id', controller.deleteProvincia);
router.put("/:slug", controller.updateProvinciaBySlug);
router.delete("/:slug", controller.deleteProvinciaBySlug);

module.exports = router;