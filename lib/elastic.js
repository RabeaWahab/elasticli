var ElasticSearch = require('elasticsearch');
var Helper = require('./helper');

var Elastic = {};

Elastic = {
  requestTimeOut: 3000,
  conHost: '127.0.0.1',
  conPort: '9200',

  // Start the elastic search client
  client: function (host, port) {
    var connection = [];

    if (typeof process.env.ESHOST != 'undefined' && process.env.ESHOST.length != 0) {
      this.conHost = process.env.ESHOST.trim();
    }

    if (typeof process.env.ESPORT != 'undefined' && process.env.ESPORT.length != 0) {
      this.conPort = process.env.ESPORT.trim();
    }

    if (typeof host != 'undefined' && host.length != 0) {
      this.conHost = host;
    }

    if (typeof port != 'undefined' && port.length != 0) {
      this.conPort = port;
    }

    connection.push(this.conHost);
    connection.push(this.conPort);

    var client = new ElasticSearch.Client({
      host: connection.join(':'),
      trace: false,
      log: [],
    });

    return client;
  },

  // Ping/Pong the server to check if working
  ping: function (host, port, callback) {
    var client = this.client(host, port);

    if (!client) {
      callback('Can not connect to Elastic Search');
    } else {
      client.ping({
        requestTimeout: this.requestTimeOut,
      }, function (error) {
        client.close();
        if (error) {
          callback(Helper.warningMessage('Can not ping Elastic Search: ' + error.message));
        } else {
          callback(Helper.successMessage('PONG') + '\n' +
          Helper.warningMessage('HOST: ' + client.transport._config.host));
        }
      });
    }
  },

  // List indices in Elastic
  list: function (host, port, callback) {
    var client = this.client(host, port);

    if (!client) {
      callback('Can not connect to Elastic Search');
    } else {
      client.cat.indices({
        v: true,
      }, function (error, response) {
        if (error) {
          callback(Helper.errorMessage(error.message));
        } else {
          callback(Helper.successMessage(response));
        }
      });
    }
  },

  // List indices aliases in Elastic
  aliases: function (host, port, callback) {
    var client = this.client(host, port);

    if (!client) {
      callback('Can not connect to Elastic Search');
    } else {
      client.cat.aliases({
        v: true,
      }, function (error, response) {
        if (error) {
          callback(Helper.errorMessage(error.message));
        } else {
          callback(Helper.successMessage(response));
        }
      });
    }
  },
};

module.exports = Elastic;
