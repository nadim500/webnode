'use strict';

module.exports = {
  get: (req, res) => {
    return res.send('HELLOW WORLD')
  },
  a: (req, res) => {
    return res.status(200).json({
      a: 'a'
    })
  },
  b: (req, res) => {
    return res.status(200).json({
      b: 'b'
    })
  },
  c: (req, res) => {
    return res.status(200).json({
      c: 'c'
    })
  },
  get500: (req, res) => {
    return res.status(500).json({
      msg: 'Message of 500'
    })
  },
  get401: (req, res) => {
    return res.status(401).json({
      msg: 'Unathorized'
    })
  },
  get400: (req, res) => {
    return res.status(400).json({
      msg: 'Bad Request'
    })
  },
  get404: (req, res) => {
    return res.status(404).json({
      msg: 'Not Found'
    })
  },
  get200: (req, res) => {
    return res.status(200).json({
      msg: 'Ok'
    })
  },
  get201: (req, res) => {
    return res.status(201).json({
      msg: 'Created Success'
    })
  }
}
