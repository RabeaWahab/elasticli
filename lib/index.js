#!/usr/bin/env node
var Program = require('commander');

Program
  .version('0.0.1')
  .option('-h, --host', 'Host to connect to')
  .option('-p, --port', 'Port to connect to')
  .option('ping', 'Ping Elastic Search Instance')
  .option('-l, --list', 'List indices')
  .option('-m, --mapping [type]', 'Show mapping for index', ['mapoping it is'])
  .parse(process.argv);

if (!Program.args.length) Program.help();
// console.log('you ordered a pizza with:');
// if (Program.peppers) console.log('  - peppers');
// if (Program.pineapple) console.log('  - pineapple');
// if (Program.bbqSauce) console.log('  - bbq');
// console.log('  - %s cheese', Program.mapping);
