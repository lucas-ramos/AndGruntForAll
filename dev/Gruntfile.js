'use strict'

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    compass: {
      options: {
        basePath: 'styles',
        config: 'compass.rb'
      },
      clean: {
        options: {
          clean: true
        }
      },
      watch: {
        options: {
          watch: true,
          force: false
        }
      }
    },
    watch: {
      svg: {
        files: ['images/svg/**/*.svg'],
        tasks: ['svgzr'],
        options: {
          spawn: false
        }
      }
    },
    svgzr: {
      desktop: {
        options: {
          templateFileSvg: 'templateSvg.mst',
          templateFileFallback: 'templateFallback.mst',
          files: {
            cwdSvg: 'images/svg/desktop/',
            cwdPng: "images/desktop-fallback/"
          },
          svg: {
            destFile: 'styles/sass/desktop/vendor/svgzr/_sprites-svg.scss'
          },
          png: true,
          fallback : {
            mixinName: 'fallback',
            dir: 'desktop-fallback/',
            destFile: 'styles/sass/desktop/vendor/svgzr/_sprites-fallback.scss'
          }
        }
      }
    }
  });

  grunt.registerTask('default', ['compass:watch']);
};