module.exports = function(grunt) {
 
	grunt.initConfig({
		cssmin: {
			hedef1: {
				files: {
					'public/cssmin/output.css': ['public/css/style.css', 'public/css/homepage.css']
				}
			}
		}
	});
 
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
 
	grunt.registerTask('default', ['cssmin:hedef1']);
 
};