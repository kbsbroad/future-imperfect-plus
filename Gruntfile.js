function configGrunt(grunt) {
    require('load-grunt-tasks')(grunt);
    
    var config = {};
    
    config.clean = {
        css: ['./static/assets/css/*.*']
    };
    
    config.sass = {
        dist: {
            files: [{
                expand: true,
                cwd: './src/sass/future-imperfect/',
                src: ['*.scss'],
                dest: './static/assets/css',
                ext: '.css'
            }, {
                expand: true,
                cwd: './src/sass/font-awesome/scss/',
                src: ['font-awesome.scss'],
                dest: './static/assets/css',
                ext: '.css'
            }]
        }
    };
    
    config.cssmin = {
        target: {
            files: [{
                expand: true,
                cwd: './static/assets/css',
                src: ['font-awesome.css'],
                dest: './static/assets/css',
                ext: '.min.css'
            }]    
        }
    }
    
    grunt.initConfig(config);
    grunt.registerTask('build', ['clean', 'sass', 'cssmin']);
    
    grunt.registerTask('default', ['build']);
}

module.exports = configGrunt;