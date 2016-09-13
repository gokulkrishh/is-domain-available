var simpleFetch = require('simple-fetch');
var snakeloader = require('snake-cli-loader');
var Table = require('cli-table');
var table = new Table({
  head: ['Domain', 'Price', 'Currency', 'Available']
});

var domainURL = "https://api.ote-godaddy.com/api/v1/domains/available?domain=";

module.exports = function(args) {
  snakeloader.start();
  simpleFetch.getJson(domainURL + args)
    .then(function (data) {
      console.log("Result: ");
      var available = data['available'] ? "Yes ✔": "No ✗";
      table.push([data['domain'], data['price'], data['currency'], available]);
      console.log(table.toString());
      snakeloader.stop();
    })
    .catch(function (err) {
      console.log("Error occurred!");
      snakeloader.stop();
    });
}
