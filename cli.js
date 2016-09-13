#!/usr/bin/env node

var meow = require('meow');
var isDomain = require('./');

var cli = meow(`
  Usage:
    is-domain <domain-name>
  Example:
    is-domain gokul.com
`);

if (cli.input.length === 0) {
  console.error(cli.help);
  process.exit(1);
}

isDomain(cli.input[0]);
