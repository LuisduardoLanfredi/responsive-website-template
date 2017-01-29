var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var cssFiles = 
	['./node_modules/reset-css/reset.less',
	 './private/css/*.less']

var jsFiles = 
	['./private/js/script.js']

gulp.task('default', ['css', 'js'], function() {
	gulp.watch([cssFiles], ['css']);
	gulp.watch([jsFiles], ['js']);
})

gulp.task('css', function () {
  return gulp.src(cssFiles)
    .pipe(less())
		.pipe(cssmin())
		.pipe(concat('style.min.css'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function () {
  return gulp.src(jsFiles)
  	.pipe(uglify())
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest('./public/js'));
});