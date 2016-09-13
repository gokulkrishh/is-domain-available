#!/usr/bin/env node

var meow = require('meow');
var isDomainAvailable = require('./');

var cli = meow(`
  Usage:
    is-domain-available <domain-name>
  Example:
    is-domain-available gokul.com
`);

if (cli.input.length === 0) {
  console.error(cli.help);
  process.exit(1);
}

isDomainAvailable(cli.input[0]);
