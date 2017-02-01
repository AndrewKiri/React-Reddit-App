var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('default', function () {
	return gulp.src('app_src/js/main.js')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest('app_src/js/'))
});
