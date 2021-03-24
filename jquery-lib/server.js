var connect = require('connect');
var serveStatic = require('serve-static');

connect()
    .use(serveStatic(__dirname, {
        index: ['index.html'],
        setHeaders: function (res) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        }
    }))
    .listen(8080, () => console.log('Server running on 8080...'));