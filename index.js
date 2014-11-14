var jsonfile = require('jsonfile'),
    pkg = require('./package.json'),
    mkdirp = require('mkdirp'),
    path = require('path'),
    hoek = require('hoek'),
    cpr = require('cpr');

/**
 * Write this theme to the given destination using the supplied
 * themeConfig object as the theme.json file.
 *
 * @method module.exports
 * @param themeConfig Object Theme configuration
 * @param destination String Destination directory for theme
 * @param cb Function Callback when complete (err)
 */
module.exports = function (opts, cb) {
    var destination = opts.destination,
        themeConfig = opts.themeConfig;

    themeConfig = hoek.clone(themeConfig);

    // For attribution as required by the license
    themeConfig.themeName = pkg.name;
    themeConfig.themeHomepage = pkg.homepage;

    function onModulesReady(err) {
        if (err) { return cb(err); }

        if (opts.assets) {
            cpr(opts.assets, path.join(destination, 'assets'), cb);
        }

        if (opts.partials) {
            cpr(opts.partials, path.join(destination, 'partials'), cb);
        }
    }

    function onThemeReady(err) {
        if (err) { return cb(err); }

        cpr(path.join(__dirname, 'node_modules'), destination, onModulesReady);
    }

    function onThemeConfigured(err) {
        if (err) { return cb(err); }

        cpr(path.join(__dirname, 'theme'), destination, onThemeReady);
    }

    function onDestinationReady(err) {
        if (err) { return cb(err); }

        jsonfile.writeFile(path.join(destination, 'theme.json'),
            themeConfig, onThemeConfigured);
    }

    mkdirp(destination, onDestinationReady);
};
