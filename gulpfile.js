var gulp = require('gulp');
var webpack = require('gulp-webpack');
var browserSync = require('browser-sync').create();

gulp.task('default', ['serve']);

gulp.task('webpack', function() {
	return gulp.src('app_src/js/main.js')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest('app_src/js/'))
		.pipe(browserSync.stream());
});

gulp.task('serve', ['webpack'], function(){
	browserSync.init({
		server: './app_src'
	});
	gulp.watch('./app_src/js/components/*.js', ['webpack']);
	gulp.watch('./app_src/index.html').on('change', browserSync.reload);
});
