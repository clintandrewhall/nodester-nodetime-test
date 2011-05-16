if(!process.env.TZDIR) {
    process.env.TZDIR = __dirname + "/lib/zoneinfo";
}

var sys = require("sys"),
  http = require('http'),
  time = require("time");

function test() {
  var d = new time.Date(), result = "";
  result += "\n\n";
  result += "Timezone file location:\n";
  result += "=======================\n\n";
  result += process.env.TZDIR;
  result += "\n\n";
  result += "Creating a date:\n";
  result += "================\n\n";
  result += "Date:     " + d.toString();
  result += "\n\n";
  result += "Changing the Timezone to 'America/Los_Angeles:\n";
  result += "==============================================\n\n";
  d.setTimezone("America/Los_Angeles");
  result += "Date:     " + d.toString();
  result += "\n";
  result += "Timezone: " + d.getTimezoneAbbr();
  return result;
}

sys.log(test());

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(test());
}).listen(9625);