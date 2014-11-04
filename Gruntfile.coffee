###
# sparky-selleck
# Provided under a Creative Commons Attribution-Sharealike 3.0 License.
# See LICENSE file for licensing information.
#
# Based on https://github.com/spark/docs
# Copyright 2013 Spark Labs, Inc.
# Used under a Creative Commons Attribution-Sharealike 3.0 License.
#
###

module.exports = (grunt) ->

  gruntConfig =

    clean:
      dest: ['theme/assets/css/**']

    watch:
      stylesheets:
        files: ['stylesheets/*.less']
        tasks: ['less']
      assets:
        files: ['theme/assets/css/**']
        tasks: ['copy']

    coffeelint:
      grunt: ['Gruntfile.coffee']

    less:
      docs:
        files:
          'theme/assets/css/style.css':
            'stylesheets/style.less'

  grunt.initConfig gruntConfig

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-coffeelint'
  grunt.loadNpmTasks 'grunt-contrib-less'

  grunt.registerTask 'build', ['test', 'clean', 'less']
  grunt.registerTask 'test', ['coffeelint']
