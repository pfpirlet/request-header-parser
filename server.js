const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
var response = {};

app.get('/', function (req, res) {
	var language = req.headers["accept-language"].split(",")[0];
	var software = /\(([^)]+)\)/.exec(req.headers["user-agent"])[1];
	response["language"] = language;
	response["software"] = software;
	res.send(response);
})

app.listen(port, function () {
  console.log('App listening on port: ' + port)
})
