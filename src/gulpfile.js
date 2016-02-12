'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');
    
const SASS_GLOB = './public/sass/**/*.scss';

gulp.task('sass', function () {
    return gulp.src(SASS_GLOB)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch(SASS_GLOB, ['sass']);
});