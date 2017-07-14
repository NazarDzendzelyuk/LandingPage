//const gulp = require('gulp');
//const autoprefixer = require('gulp-autoprefixer');
// 
//gulp.task('default', () =>
//    gulp.src('css/style.css')
//        .pipe(autoprefixer({
//            browsers: ['last 2 versions'],
//            cascade: false
//        }))
//        .pipe(gulp.dest('dist'))
//);

var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
 
gulp.task('default', function () {
    gulp.src('css/media.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});
//var gulp = require('gulp');
//var jsmin = require('gulp-jsmin');
//var rename = require('gulp-rename');
// 
//gulp.task('default', function () {
//    gulp.src('js/script.js')
//        .pipe(jsmin())
//        .pipe(rename({suffix: '.min'}))
//        .pipe(gulp.dest('dist'));
//});