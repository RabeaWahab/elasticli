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

Program
  .command('list')
  .option('--host [host]', 'Host to connect to elastic search')
  .option('--port [port]', 'Port to connect to elastic search')
  .description('List indices in Elastic Search')
  .action(function (options) {
    Elastic.list(options.host, options.port, function (result) {
      console.log(result);
    });
  });

Program
  .command('index <indexname>')
  .option('--host [host]', 'Host to connect to elastic search')
  .option('--port [port]', 'Port to connect to elastic search')
  .option('--alias [alias]', 'Alias to assign to index in elastic search')
  .description('List indices in Elastic Search')
  .action(function (indexname, options) {
    Elastic.index(indexname, options.alias, options.host, options.port, function (result) {
      console.log(result);
    });
  });

Program
  .command('alias')
  .option('--host [host]', 'Host to connect to elastic search')
  .option('--port [port]', 'Port to connect to elastic search')
  .description('List indices aliases in Elastic Search')
  .action(function (options) {
    Elastic.aliases(options.host, options.port, function (result) {
      console.log(result);
    });
  });

  Program.parse(process.argv);
