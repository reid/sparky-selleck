#!/usr/bin/env node

var generator = require('./index'),
    jsonfile = require('jsonfile'),
    themeConfig,
    opts = require('nomnom')
        .script('sparky-selleck')
        .options({
            configFile: {
                position: 0,
                required: true,
                help: 'Path to Selleck configuration JSON for this theme'
            },
            destination: {
                position: 1,
                required: true,
                help: 'Path to destination for configured theme'
            },
            assets: {
                metavar: 'DIR',
                help: 'Path to additional assets to include in this theme'
            }
        }).parse();

opts.themeConfig = jsonfile.readFileSync(opts.configFile);

generator(opts, function (err) {
    if (err) {
        throw err;
    }

    console.log('sparky-selleck has parked your Ferrari at %s',
        opts.destination);
});
