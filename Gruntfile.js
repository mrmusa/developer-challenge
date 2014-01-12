module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'config/**.js',
        'models/**.js',
        'public/js/*.js',
        'routes/**.js'
      ]
    },
    watch: {
      js: {
        options: {
          spawn: false,
        },
        files: '**/*.js',
        tasks: ['check']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', 'mochaTest', 'jshint');

};
