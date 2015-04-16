require("babel/polyfill");

var Application = require('bridges-application')
var path        = require('path')
var models      = require('../models')
var lib         = require('../lib')

var application = new Application({
  directory : path.join(__dirname, '..'),
  processes : {
    inject: [models, lib]
  }
})

application.supervisor.start()

