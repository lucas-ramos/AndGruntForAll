module.exports = function(grunt) {

	grunt.initConfig({
	//	pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				jshintrc: true
			},
			common: [
				'Gruntfile.js',
				'../../Content/Scripts/Desktop/Modules/*.js',
				'../../Content/Scripts/Desktop/Scopes/*.js',
				'../../Content/Scripts/Smartphone/Modules/*.js',
				'../../Content/Scripts/Smartphone/Scopes/*.js'
			]
		},
		coffee: {
			compile: {
				expand: true,
				flatten: false,
				cwd: '../../Content/Scripts',
				src: ['**/*.coffee'],
				dest: '../../Content/Scripts',
				ext: '.js'
			}
		},
		compass: {
			dist: {
				options: {
					basePath: '../..',
					config: '../styles/compass.rb'
				}
			}
		},
		watch: {
			scripts: {
				files: ['../../Content/Scripts/**/*.coffee'],
				tasks: ['coffee'],
				options: {
					spawn: false
				}
			},
			svg: {
				files: ['../../Content/Images/svg/**/*.svg'],
				tasks: ['svgzr'],
				options: {
					spawn: false
				}
			}
		},
		svgzr: {
			mobile: {
				options: {
					templateFileSvg: 'templateSvg.mst',
					files: {
						cwdSvg: '../../Content/Images/svg/smartphone/'
					},
					svg: {
						destFile: '../../Content/Styles/sass/smartphone/vendor/svgzr/_sprites-svg.scss'
					}
				}
			},
			desktop: {
				options: {
					templateFileSvg: 'templateSvg.mst',
					templateFileFallback: 'templateFallback.mst',
					files: {
						cwdSvg: '../../Content/Images/svg/desktop/',
						cwdPng: "../../Content/Styles/images/desktop-fallback/"
					},
					svg: {
						destFile: '../../Content/Styles/sass/desktop/vendor/svgzr/_sprites-svg.scss'
					},
					png: true,
					fallback : {
						mixinName: 'fallback',
						dir: 'desktop-fallback/',
						destFile: '../../Content/Styles/sass/desktop/vendor/svgzr/_sprites-fallback.scss'
					}
				}
			},
			"desktop-checkbox": {
				options: {
					templateFileSvg: 'templateSvg.mst',
					templateFileFallback: 'templateFallback.mst',
					files: {
						cwdSvg: '../../Content/Images/svg/desktop-checkbox/',
						cwdPng: "../../Content/Styles/images/desktop-checkbox-fallback/"
					},
					svg: {
						destFile: '../../Content/Styles/sass/desktop/vendor/svgzr/_sprites-checkbox-svg.scss'
					},
					png: true,
					fallback : {
						mixinName: 'desktop-checkbox-fallback',
						dir: 'desktop-checkbox-fallback/',
						destFile: '../../Content/Styles/sass/desktop/vendor/svgzr/_sprites-checkbox-fallback.scss'
					}
				}
			},
			"desktop-radiobutton": {
				options: {
					templateFileSvg: 'templateSvg.mst',
					templateFileFallback: 'templateFallback.mst',
					files: {
						cwdSvg: '../../Content/Images/svg/desktop-radiobutton/',
						cwdPng: "../../Content/Styles/images/desktop-radiobutton-fallback/"
					},
					svg: {
						destFile: '../../Content/Styles/sass/desktop/vendor/svgzr/_sprites-radiobutton-svg.scss'
					},
					png: true,
					fallback : {
						mixinName: 'desktop-radiobutton-fallback',
						dir: 'desktop-radiobutton-fallback/',
						destFile: '../../Content/Styles/sass/desktop/vendor/svgzr/_sprites-radiobutton-fallback.scss'
					}
				}
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-svgzr');

	grunt.registerTask('default', ['jshint', 'svgzr']);
};