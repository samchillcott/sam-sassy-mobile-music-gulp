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
  
