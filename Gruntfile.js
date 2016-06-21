module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        'loopfunc': true,
        'esversion': 6,
        'eqeqeq': true,
        'forin': true,
        'unused': true
      }
    },
    browserify: {
      build: {
        options: {
          transform: [['babelify', {presets: ['es2015']}]]
        },
        src: 'src/**/*.js',
        dest: 'dist/js/index.js'
      }
    },
    uglify: {
      build: {
        files: {
          'dist/js/index.min.js': ['dist/js/index.js']
        }
      }
    },
    compass: {
      build: {
        options: {
          sassDir: 'src/css',
          cssDir: 'dist/css',
          environment: 'development',
          outputStyle: 'compressed'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('build', ['browserify', 'uglify', 'compass']);
  grunt.registerTask('default', ['test', 'build']);
};

