
var gulp = require('gulp');

gulp.task('sass', function(){
  return gulp.src('css/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('dist'))
});


// // Initialize modules
// // Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
// const { src, dest, watch, series, parallel } = require('gulp');
// // Importing all the Gulp-related packages we want to use
// // const sourcemaps = require('gulp-sourcemaps');
// const sass = require('gulp-sass');
// const concat = require('gulp-concat');
// // const uglify = require('gulp-uglify');
// // const postcss = require('gulp-postcss');
// // const autoprefixer = require('autoprefixer');
// const cssnano = require('cssnano');
// var replace = require('gulp-replace');

// // The `clean` function is not exported so it can be considered a private task.
// // It can still be used within the `series()` composition.
// function clean(cb) {
//   // body omitted
//   cb();
// }

// // The `build` function is exported so it is public and can be run with the `gulp` command.
// // It can also be used within the `series()` composition.
// function build(cb) {
//   // body omitted
//   gulp.src('/src/js/**/*.js')
//   .pipe(concat())
//   .pipe(cssnano())
//   .pipe(gulp.dest('dist'))
//   cb();
// }

// exports.build = build;
// exports.default = series(clean, build);

// const gulp = require("gulp");

// gulp.task("hello", async function () {
// 	console.log("Hello Sam");
// });


// gulp.task('first-task', async function() {
//     gulp.src('/src/scripts/**/*.js')
//     .pipe(concat())
//     .pipe(minify())
//     .pipe(gulp.dest('dist'))
//   });
  
