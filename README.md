# elastic-cli
A command line tool to simplify getting information about your Elastic search installation.

## Installation:

`npm install elasticli -g`

## Commands:

`elasticli ping`

Pings elastic search to check if the service is up, it appends the `host:port` to get an idea
on where it connected.

`elasticcli list`

Listing all indices.

`elasticli alias`

Return any aliases and their indices.

### Note on host/port info:

The tool checks:

 - if the options `--host` `--port` are passed with values, if not
 - it will try to look for the environment variables `ESHOST` and `ESPORT`, in case that does not exist either.
 - it will fallback to the default localhost settings `127.0.0.1:9200`
