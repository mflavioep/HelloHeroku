process.title = 'HelloHeroku';
    var args = process.argv,
    port = args[2] || 7071,
    webServer = require('./server');

    webServer.listen(port, function() {
	console.log('NodeJS HelloHeroku Server started at port: ' + port);
});
