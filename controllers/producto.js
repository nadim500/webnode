'use strict';

module.exports = {
  get: (req, res) => {
    console.log('aqui');
    return res.send('HOLA MUNDO')
  }
}
