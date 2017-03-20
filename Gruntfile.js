module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),    
    concat: {
      js: {
        src: ['src/js/*.js', 'src/js/**/*.js'],
        dest: 'src/public/js/app.js'
      }
    },
    uglify: {
      js: {
          src: ['src/public/js/app.js'],
          dest: 'src/public/js/app.js'
      }
    },
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: [ 
          { 
            src: ['src/less/*.less'], 
            dest: 'src/public/css/main.css'
          }
        ]
      }
    },
    /*watch: {
      styles: {
        files: ['src/less/*.less'], // which files to watch
        tasks: ['src/less'],
        options: {
          nospawn: true
        }
      }
    }*/
  });

  //load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate'); 

  grunt.registerTask('default', ['concat'/*, 'uglify'*/, 'less'/*, 'watch'*/]);
};