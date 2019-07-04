var express = require('express');
var serveStatic = require('serve-static');
const app = express();
app.use(serveStatic(__dirname + "/dist"));
var port =  5000 || process.env.PORT;
app.listen(port);
console.log('server started '+ port);