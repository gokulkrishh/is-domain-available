const colors = require('./colors');
const simpleFetch = require('simple-fetch');
const snakeloader = require('snake-cli-loader');
const Table = require('cli-table');
const table = new Table({
  head: ['Domain', 'Price', 'Currency', 'Available']
});

const domainURL = "https://api.ote-godaddy.com/api/v1/domains/available?domain=";

module.exports = function(args) {
  snakeloader.start();
  simpleFetch.getJson(domainURL + args)
    .then(function (data) {
      snakeloader.stop();
      console.log("Result: ");
      var available = data['available'] ? colors.green("Yes ✔"): colors.red("No ✗");
      table.push([data['domain'], data['price'], data['currency'], available]);
      console.log(table.toString());
    })
    .catch(function (err) {
      snakeloader.stop();
      console.log(colors.yellow("Sorry this domain is not available!"));
    });
}
