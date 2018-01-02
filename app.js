'use strict'
var express = require('express')
var path = require('path')
const LOG = require('./utils/Logger')

var app = express()

// The index route serves bundled ReactJS application in public directory.
app.use('/', express.static(path.join(__dirname, 'public')))

app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  res.status(404).send(err)
})

if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.send({
      message: err.message,
      error: err
    })
  })
}

app.use(function (err, req, res, next) {
  res.status(err.status || 500).send()
})

app.listen(process.env.PORT || 3000, function () {
  LOG.info('app.js::Started web application')
  LOG.info('app.js::Point your browser at http://localhost:3000')
})

module.exports = app
