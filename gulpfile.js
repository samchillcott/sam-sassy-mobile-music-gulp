const { series } = require('gulp');

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  gulp.src('/src/js/**/*.js')
  .pipe(concat())
  .pipe(minify())
  .pipe(gulp.dest('dist'))
  cb();
}

exports.build = build;
exports.default = series(clean, build);

const gulp = require("gulp");

gulp.task("hello", async function () {
	console.log("Hello Sam");
});


gulp.task('first-task', async function() {
    gulp.src('/src/js/**/*.js')
    .pipe(concat())
    .pipe(minify())
    .pipe(gulp.dest('dist'))
  });
  
