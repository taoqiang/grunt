//包装函数
module.exports = function(grunt) {

	//任务配置，所有插件的配置信息
	grunt.initConfig({

		//获取 package.json 的信息
		pkg: grunt.file.readJSON('package.json'),

		//uglify插件的配置信息
		uglify: {
			options:{
				striBanners: true,
				banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %>  */\n'
			},
			build:{
				src: 'src/test.js',
				dest:'bulid/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
			}
		},

		jshint: {
			build: ['Gruntfile.js', 'src/*.js'],
			options : {
				jshintrc : '.jshintrc'
			}
		},

		//watch插件的配置信息
		watch: {
			build:{
				files: ['src/*.js' , 'src/*.css'],
				tasks: ['jshint', 'uglify'],
				options: {spawn: false}
			}
		},

		concat: {
			css: {
				src: ['src/concat/*.css'],	//需要合成文件的位置
				dest: 'asset/all.css'   	//合成后的文件位置
			}
		},

		cssmin:{
			css: {
				src: 'asset/all.css',		//需要压缩的文件位置
				dest: 'css/all-min.css'    //压缩后的文件位置
			}
		},

		imagemin: {
			build: {
				options: {
					optimizationLevel: 3   //定义png图片优化水平
				},
				files: [
					{
						expand : true,
						cwd: 'img/',
						src: ['**/*.{png,jpg,jpeg}'], 	//优化 img 目录下所有 png jpg jpeg 图片
						dest: 'img/imgmin/' 					//优化后的图片保存位置，覆盖旧图片，并不做提示
					}
				]
			}
		},

	});

	//告诉grunt我们使用了什么插件
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	//告诉grunt当我们在终端中输入 grunt时需要做些什么（注意先后顺序）
	grunt.registerTask('default',['jshint', 'uglify','concat', 'cssmin', 'imagemin', 'watch']);
};