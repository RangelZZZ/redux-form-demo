'use strict';
var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');

var app = express();
var port = 3000;

app.use(favicon(__dirname + '/favicon.ico'));
app.use('/static', express.static(__dirname + '/static'));

(function () {

    var webpack = require('webpack');
    var webpackConfig = require('./webpack.config');
    var compiler = webpack(webpackConfig);

    app.use(require("webpack-dev-middleware")(compiler, {
        noInfo: true, publicPath: webpackConfig.output.publicPath
    }));

    app.use(require("webpack-hot-middleware")(compiler, {
        log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }));
})();

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post("/", function (req, res) {
    res.send({name: "guoru"})
});

app.listen(port, 'localhost', function () {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
});
