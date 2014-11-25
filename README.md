# sparky-selleck

A fine theme for Selleck based on design by Spark Labs, Inc.

## Usage

    npm i sparky-selleck
    ./node_modules/.bin/sparky-selleck

    Usage: sparky-selleck <configFile> <destination> [options]

    configFile      Path to Selleck configuration JSON for this theme
    destination     Path to destination for configured theme

    Options:
       --assets DIR     Path to additional assets to include in this theme
       --partials DIR   Path to additional partials to include in this theme

## Configuration

 - `projectTitle`: Title of the documentation
 - `githubURL`: Location of documentation's GitHub repositiory
 - `home_url`: Location of documentation home page

## Partials

You may use the following partials by providing them in the provided partials directory.

 - `head`: HTML within the `<head>`
 - `foot`: HTML before `</body>`
 - `header`: HTML inside the header of the body
 - `footer`: HTML inside the footer of the body

## License

See LICENSE file.
