#!/usr/bin/env node
var Program = require('commander');
var Elastic = require('./elastic');
var Helper = require('./helper');

Program
  .version('0.0.1')
  .command('ping')
  .option('--host [host]', 'Host to connect to elastic search')
  .option('--port [port]', 'Port to connect to elastic search')
  .description('Ping Elastic Search')
  .action(function (options) {
    Elastic.ping(options.host, options.port, function (result) {
      console.log(result);
    });
  });

  Program.parse(process.argv);
