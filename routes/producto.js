'use strict';
const express = require('express');
/**
* Se instancia Router de express para que sea posible la creacion de rutas
*
*/
const router = express.Router();

const controllers = {
  producto: require('../controllers/producto')
}

router.route('/productos')
  .get(controllers.producto.get);

module.exports = router;
