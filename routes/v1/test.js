'use strict';
const express = require('express');
/**
* Se instancia Router de express para que sea posible la creacion de rutas
*
*/
const router = express.Router();

const controllers = {
  test: require('../../controllers/v1/test/test')
}

router.route('/tests')
  .get(controllers.test.get);

router.get('/a', controllers.test.a);
router.get('/b', controllers.test.b);
router.get('/c', controllers.test.c);

router.get('/500', controllers.test.get500);
router.get('/400', controllers.test.get400);
router.get('/401', controllers.test.get401);
router.get('/404', controllers.test.get404);
router.get('/200', controllers.test.get200);
router.get('/201', controllers.test.get201);

module.exports = router;
